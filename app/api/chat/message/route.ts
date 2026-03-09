import { NextRequest, NextResponse } from "next/server";

const BASE = process.env.CHATWOOT_BASE_URL ?? "https://chat.rudood.app";
const TOKEN = process.env.CHATWOOT_API_TOKEN ?? "";
const ACCOUNT = process.env.CHATWOOT_ACCOUNT_ID ?? "1";

/**
 * POST /api/chat/message
 * Sends a user message to an existing Chatwoot conversation.
 * Body: { conversationId: number, content: string }
 */
export async function POST(req: NextRequest) {
  try {
    const { conversationId, content } = await req.json();
    if (!conversationId || !content) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const res = await fetch(
      `${BASE}/api/v1/accounts/${ACCOUNT}/conversations/${conversationId}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api_access_token": TOKEN,
        },
        body: JSON.stringify({
          content,
          message_type: "incoming", // "incoming" = from the customer/visitor
          private: false,
        }),
      }
    );

    if (!res.ok) throw new Error(`Chatwoot error: ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[chat/message]", e);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
