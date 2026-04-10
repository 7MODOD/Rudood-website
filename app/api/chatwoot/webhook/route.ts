import { NextRequest, NextResponse } from "next/server";
import { pushAgentMessage } from "@/lib/chatwoot-store";

/**
 * POST /api/chatwoot/webhook
 *
 * Chatwoot calls this URL whenever an event occurs in your inbox.
 * We listen for agent replies (message_created + message_type: "outgoing")
 * and store them for the browser to poll.
 *
 * Set this URL in your Chatwoot Custom API Inbox settings.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Only handle agent-sent messages
    if (
      body?.event === "message_created" &&
      body?.message_type === "outgoing" &&
      body?.content &&
      body?.conversation?.id
    ) {
      pushAgentMessage(body.conversation.id, {
        id: body.id ?? Date.now(),
        content: body.content,
        created_at: Date.now(),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
