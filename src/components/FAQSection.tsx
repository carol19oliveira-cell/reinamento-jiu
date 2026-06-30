import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id="faq-section-wrapper" className="max-w-2xl mx-auto space-y-3.5">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-white rounded-xl border border-slate-200/80 overflow-hidden transition-all hover:border-slate-300 card-shadow"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-4 md:p-5 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <h4 className="font-display font-bold text-slate-800 text-sm md:text-base leading-snug">
                  {faq.question}
                </h4>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-brand-blue" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
