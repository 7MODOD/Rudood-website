import { NextRequest, NextResponse } from "next/server";

const BASE = process.env.CHATWOOT_BASE_URL ?? "https://chat.rudood.app";
const TOKEN = process.env.CHATWOOT_API_TOKEN ?? "";
const ACCOUNT = process.env.CHATWOOT_ACCOUNT_ID ?? "1";
const INBOX_ID = process.env.CHATWOOT_INBOX_ID ?? "";

/**
 * POST /api/chat/start
 * Creates an anonymous contact + conversation in Chatwoot.
 * Returns { conversationId }
 */
export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json().catch(() => ({ name: "موقع زائر" }));

    // 1. Create contact
    const contactRes = await fetch(`${BASE}/api/v1/accounts/${ACCOUNT}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api_access_token": TOKEN,
      },
      body: JSON.stringify({ name: name || "Website Visitor" }),
    });
    const contact = await contactRes.json();
    const contactId = contact?.id;
    if (!contactId) throw new Error("Failed to create contact");

    // 2. Create conversation
    const convRes = await fetch(`${BASE}/api/v1/accounts/${ACCOUNT}/conversations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api_access_token": TOKEN,
      },
      body: JSON.stringify({
        inbox_id: Number(INBOX_ID),
        contact_id: contactId,
        additional_attributes: { initiated_at: { href: "website-chat" } },
      }),
    });
    const conv = await convRes.json();
    const conversationId = conv?.id;
    if (!conversationId) throw new Error("Failed to create conversation");

    return NextResponse.json({ conversationId });
  } catch (e) {
    console.error("[chat/start]", e);
    return NextResponse.json({ error: "Could not start chat" }, { status: 500 });
  }
}
