import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to get my Smart CV?",
    answer: "3–5 business days (rush orders available).",
  },
  {
    question: "Can I customize my CV for a specific job or sector?",
    answer: "Absolutely! Every CV is tailored for your target role and industry.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, we revise until you are confident and satisfied.",
  },
  {
    question: "How does Smart CV help me get noticed?",
    answer: "It passes ATS filters, highlights your impact, and speaks the recruiter's language.",
  },
  {
    question: "What's included in the wait-list perks?",
    answer: "Early bird discount, exclusive WhatsApp community, free Career Clinic ticket, and a mini career toolkit.",
  },
];

const WaitlistFAQ = () => {
  return (
    <section className="relative py-24 overflow-hidden border-t border-border">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border border-border rounded-xl px-6 data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="text-left py-5 hover:no-underline">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WaitlistFAQ;
