import { NextRequest, NextResponse } from "next/server";
import { popAgentMessages } from "@/lib/chatwoot-store";

/**
 * GET /api/chat/messages?id=<conversationId>
 * Returns and clears pending agent replies for the given conversation.
 * Called by the browser every 3 seconds.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  if (!id) return NextResponse.json({ messages: [] });

  const messages = popAgentMessages(id);
  return NextResponse.json({ messages });
}
