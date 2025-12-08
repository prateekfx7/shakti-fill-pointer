import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is an AI-powered digital twin for substations?",
    answer:
      "An AI-powered digital twin is a virtual replica of your physical substation that uses machine learning and real-time data to simulate, predict, and optimize operations.",
  },
  {
    question: "How does AI improve substation health monitoring?",
    answer:
      "AI analyzes sensor data in real-time to detect anomalies, predict equipment failures, and provide actionable insights for preventive maintenance.",
  },
  {
    question: "Can digital twins integrate with existing grid infrastructure?",
    answer:
      "Yes, our digital twin solution is designed to seamlessly integrate with existing SCADA systems, IoT sensors, and grid management platforms.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center gap-4 text-left py-4 px-6 rounded-xl border border-border bg-card hover:border-muted-foreground/30 transition-all duration-300"
              >
                <span className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Plus className="h-4 w-4 text-muted-foreground" />
                  )}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {faq.question}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-14 py-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
