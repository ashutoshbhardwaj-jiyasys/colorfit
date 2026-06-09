import Hero from "@/components/home/Hero";
import PortfolioSlider from "@/components/home/PortfolioSlider";
import Marquee from "@/components/home/Marquee";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedWork from "@/components/home/FeaturedWork";
import Process from "@/components/home/Process";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      
      {/* Brand Journals Title Section */}
      <section className="bg-canvas">
        <SectionHeader
          title="Brand Journal"
          pt="pt-12 md:pt-16"
          pb="pb-0"
        />
      </section>

      <PortfolioSlider />
      <ServicesSection />
      <FeaturedWork />
      <Process />
    </>
  );
}
