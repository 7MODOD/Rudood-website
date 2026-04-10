"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    chatwootSettings: {
      hideMessageBubble?: boolean;
      position?: "left" | "right";
      locale?: string;
      type?: "standard" | "expanded_bubble";
      customAttributes?: Record<string, string>;
    };
    chatwootSDK: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

export default function LiveChat() {
  useEffect(() => {
    const baseUrl =
      process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL || "https://app.chatwoot.com";
    const websiteToken = process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN || "";

    if (!websiteToken) return;

    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "left",
      locale: "ar",
      type: "standard",
    };

    const script = document.createElement("script");
    script.src = `${baseUrl}/packs/js/sdk.js`;
    script.defer = true;
    script.async = true;

    script.onload = () => {
      window.chatwootSDK.run({ websiteToken, baseUrl });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
