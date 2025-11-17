import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to get my CV or cover letter?",
    answer: "Standard delivery is 3–5 business days. We also offer rush orders for urgent needs. Contact us for expedited service options."
  },
  {
    question: "How do I know if my LinkedIn needs optimization?",
    answer: "If you're not getting recruiter messages or relevant connections, it's time for optimization. We'll enhance your profile to increase visibility and engagement."
  },
  {
    question: "Will you tailor my CV to a specific job or industry?",
    answer: "Yes. All CVs are customized based on your target job, sector, and career goals to maximize your chances of success."
  },
  {
    question: "Do you offer revisions?",
    answer: "Absolutely. We revise until you're satisfied and confident with your documents. Your success is our priority."
  },
  {
    question: "How can career coaching help me?",
    answer: "From gaining clarity to building confidence, we help you navigate your career path with strategic guidance, interview preparation, and personalized advice."
  },
  {
    question: "How does a professional CV help me land a job?",
    answer: "It passes Applicant Tracking Systems (ATS), captures recruiter attention, and presents you as a serious, qualified professional ready to excel."
  }
];

const FAQ = () => {
  return (
    <section className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-24 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border border-border rounded-lg px-8 hover:border-accent/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed font-light pb-6">
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

export default FAQ;
