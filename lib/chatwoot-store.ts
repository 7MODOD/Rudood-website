/**
 * In-memory store for agent replies from Chatwoot.
 * Maps conversationId → array of pending message objects.
 * Cleared after client polls and reads them.
 */

export interface AgentMessage {
  id: number;
  content: string;
  created_at: number;
}

// Map<conversationId, AgentMessage[]>
const store = new Map<number, AgentMessage[]>();

export function pushAgentMessage(conversationId: number, msg: AgentMessage) {
  const existing = store.get(conversationId) ?? [];
  existing.push(msg);
  store.set(conversationId, existing);
}

/** Returns and clears all pending messages for a conversation. */
export function popAgentMessages(conversationId: number): AgentMessage[] {
  const msgs = store.get(conversationId) ?? [];
  store.delete(conversationId);
  return msgs;
}
