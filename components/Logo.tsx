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
      <Image
        src="/logo.png"
        alt="Rudood Logo"
        width={size}
        height={size}
        className="object-contain shrink-0"
      />
      {showText && (
        <span className={`font-black tracking-tight ${textClass || "text-xl text-text-primary"}`}>
          {name}
        </span>
      )}
    </div>
  );
}
