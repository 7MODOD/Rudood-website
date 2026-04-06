"use client";

import Image from "next/image";

interface LogoProps {
  size?: number;
  showText?: boolean;
  textClass?: string;
  lang?: "ar" | "en";
}

export default function Logo({ size = 36, showText = true, textClass = "", lang = "ar" }: LogoProps) {
  const name = lang === "ar" ? "ردود" : "Rudood";
  return (
    <div className="flex items-center gap-2">
      {/* Try PNG first, fallback to SVG */}
      <div style={{ width: size, height: size }} className="relative shrink-0">
        <Image
          src="/logo.png"
          alt="Rudood Logo"
          width={size}
          height={size}
          className="object-contain"
          onError={(e) => {
            // Fallback to SVG if PNG not found
            const target = e.target as HTMLImageElement;
            target.src = "/logo.svg";
          }}
        />
      </div>
      {showText && (
        <span className={`font-black tracking-tight ${textClass || "text-xl text-text-primary"}`}>
          {name}
        </span>
      )}
    </div>
  );
}
