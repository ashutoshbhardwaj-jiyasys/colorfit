import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  markOnly?: boolean;
  light?: boolean;
}

export default function BrandLogo({
  className = "",
  light = false,
}: BrandLogoProps) {
  const logoSrc = light ? "/logo-white.png" : "/logo-black.png";

  return (
    <div className={`flex items-center select-none ${className}`}>
      <Image
        src={logoSrc}
        alt="Colorfit Logo"
        width={109}
        height={32}
        priority
        className="h-8 w-auto object-contain shrink-0"
      />
    </div>
  );
}
