export interface FaqItem {
  question: string;
  answer: string;
}

/** Answers strictly reflect the company profile — no invented claims. */
export const faqItems: FaqItem[] = [
  {
    question: "What products does Krisons Marketing manufacture?",
    answer:
      "Thermal bond non-woven interlining, microdot fusible interlining, coated fabrics (paste dot, double dot and scatter coating in polyester and polyamide), and geo-textile fabric for industrial applications.",
  },
  {
    question: "What GSM range, widths and colours are available?",
    answer:
      "Thermal bond non-woven fabric runs from 23 to 80 GSM in widths of 100 to 200 cm, in White, Off White, Optical White, Charcoal and Black. Microdot fusible interlining is available in 13 articles across the same weight range.",
  },
  {
    question: "What is your production capacity?",
    answer:
      "Our factory in South India's textile heartland, commissioned in 2019 with modern machinery, produces up to 2,000,000 metres of fabric per month with in-house laboratory testing at every stage.",
  },
  {
    question: "Do you supply international buyers?",
    answer:
      "Yes — our supply chain is designed for punctual, on-time delivery across borders, and quality is tested against international standards. Send an enquiry with your destination and requirements.",
  },
  {
    question: "How do I request specifications or samples?",
    answer:
      "Use the enquiry form with your product interest, GSM, width and quantity, or email krisonsmarketing@gmail.com. We typically respond within one business day.",
  },
];
