import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../types";

export default function TestimonialCarousel() {
  const [activeChatIndex, setActiveChatIndex] = useState(0);

  // Map the chats to direct testimonials
  const testimonialsList = TESTIMONIALS.map((chat) => {
    // Find the message from the user
    const feedbackMessage = chat.messages.find((m) => m.isUser)?.content || "";
    return {
      id: chat.id,
      name: chat.contactName,
      initial: chat.avatarLetter,
      avatarUrl: chat.avatarUrl,
      text: feedbackMessage,
      verifiedPurchase: true,
    };
  });

  const handlePrev = () => {
    setActiveChatIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveChatIndex((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsList[activeChatIndex];

  return (
    <div id="testimonial-carousel-container" className="relative max-w-3xl mx-auto px-4 sm:px-12">
      {/* Testimonial Card Frame */}
      <div className="relative min-h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-slate-100/40 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Background Accent Quotes */}
            <div className="absolute right-8 top-6 opacity-5 text-slate-400 select-none pointer-events-none">
              <Quote className="w-24 h-24 stroke-[1]" />
            </div>

            <div className="space-y-6 relative z-10">
              {/* Author details at the top (before testimonial text) */}
              <div className="flex items-center gap-4">
                {current.avatarUrl ? (
                  <img
                    src={current.avatarUrl}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-blue/20 shadow-md"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-lg border border-brand-blue/20 shadow-md">
                    {current.initial}
                  </div>
                )}
                <div>
                  <p className="font-bold text-slate-900 text-base sm:text-lg font-display">
                    {current.name}
                  </p>
                  <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <span>Instructor de Jiu-Jitsu</span>
                    <span>•</span>
                    <span className="text-emerald-600 font-semibold">Garantizado</span>
                  </p>
                </div>
              </div>

              {/* Stars & Verified Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100/80">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                {current.verifiedPurchase && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Compra Verificada
                  </span>
                )}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-slate-700 font-sans text-base sm:text-lg md:text-xl font-medium leading-relaxed italic">
                "{current.text}"
              </blockquote>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev Arrow Button */}
      <button
        id="testimonial-prev-arrow"
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 w-12 h-12 rounded-full bg-white hover:bg-slate-50 text-slate-700 shadow-lg border border-slate-100/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95 z-20"
        aria-label="Testimonio anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Arrow Button */}
      <button
        id="testimonial-next-arrow"
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 w-12 h-12 rounded-full bg-white hover:bg-slate-50 text-slate-700 shadow-lg border border-slate-100/80 flex items-center justify-center transition-all hover:scale-105 active:scale-95 z-20"
        aria-label="Siguiente testimonio"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {testimonialsList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveChatIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === activeChatIndex ? "bg-brand-blue w-6" : "bg-slate-200 hover:bg-slate-300 w-2"
            }`}
            aria-label={`Ir al testimonio ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
