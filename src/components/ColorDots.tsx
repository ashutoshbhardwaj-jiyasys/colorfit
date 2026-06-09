import React from "react";

interface ColorDotsProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const DOT_COLORS = [
  "#F0047F", // Magenta
  "#F26522", // Orange
  "#7B3FA0", // Violet
  "#3B9EDC", // Sky
  "#F7C82A", // Sunburst
  "#5DBB46", // Leaf
  "#F05A5B", // Coral
  "#2BBCD4", // Aqua
];

export default function ColorDots({ className = "", size = "md" }: ColorDotsProps) {
  const sizeClasses = {
    sm: "w-1 h-1",
    md: "w-1.5 h-1.5",
    lg: "w-2.5 h-2.5",
  };

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {DOT_COLORS.map((color, i) => (
        <span
          key={i}
          className={`rounded-full shrink-0 ${sizeClasses[size]}`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
