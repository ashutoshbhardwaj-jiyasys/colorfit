import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: process.env.EMAIL_TO,
            subject: "New Contact Form Submission",
            html: `
                <div style="font-family:Arial,sans-serif;padding:24px">
                    <h2>📩 New Contact Form Submission</h2>

                    <table cellpadding="10" cellspacing="0" border="1">
                        <tr>
                            <td><b>Name</b></td>
                            <td>${body.name}</td>
                        </tr>

                        <tr>
                            <td><b>Email</b></td>
                            <td>${body.email}</td>
                        </tr>

                        <tr>
                            <td><b>Company</b></td>
                            <td>${body.company}</td>
                        </tr>

                        <tr>
                            <td><b>Services</b></td>
                            <td>${body.services.join(", ")}</td>
                        </tr>

                        <tr>
                            <td><b>Message</b></td>
                            <td>${body.message}</td>
                        </tr>
                    </table>
                </div>
                `


        });
        return NextResponse.json({
            success: true,
            message: "Transporter created successfully",
        })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Something went wrong",
        },
            {
                status: 500,
            }
        );
    }
}
