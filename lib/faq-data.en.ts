import type { FaqItem } from "./faq-data";

// English FAQ — shared between the EN FAQ accordion and FAQPage structured data.
export const faqs: FaqItem[] = [
  {
    q: "Does the AI make mistakes in replies?",
    a: "The system is trained specifically on your business data using some of the most accurate models in the world. Errors are very rare, and when it encounters a question outside its training scope, it notifies you rather than making up an answer. We also continuously monitor performance and improve the training.",
  },
  {
    q: "What happens if the bot doesn't know the answer?",
    a: 'The system is programmed on a "honesty first" principle. If it encounters a question it doesn\'t have clear information about, it politely tells the customer and transfers the conversation to your human team — rather than fabricating a wrong answer that could damage your reputation.',
  },
  {
    q: "What do I need to get started with you?",
    a: "You only need: a WhatsApp Business account, and information about your products, services, pricing, and policies. We handle everything else — technical setup, training, and integration. No technical expertise required.",
  },
  {
    q: "Do I need technical skills to manage the system?",
    a: "Not at all. After launch, the system runs automatically without your intervention. If you want to update information (such as new prices or products), just let us know and we'll update the training. Our interface is very simple for those who want to monitor.",
  },
  {
    q: "Is my customers' data safe?",
    a: "Security is our top priority. Conversations are encrypted, we don't share your customers' data with any third party, and we comply with strict privacy policies. Your data is used only to improve your system's performance — nothing else.",
  },
];
