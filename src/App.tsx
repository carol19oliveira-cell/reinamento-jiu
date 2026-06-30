import React, { useState, useEffect } from "react";
import { Star, Gift, Users, Smartphone, Printer, ClipboardCheck, GraduationCap, Heart, Shield, Activity, Award, Sparkles, MessageCircle, ArrowRight, ShieldAlert, CheckCircle, Clock, Target, Smile, Calendar, Zap } from "lucide-react";
import { motion } from "motion/react";

// Components
import HeaderTopBar from "./components/HeaderTopBar";
import TestimonialCarousel from "./components/TestimonialCarousel";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import CheckoutModal from "./components/CheckoutModal";

// Data
import { FEATURES, TARGET_AUDIENCES, BONUSES } from "./types";



// Icon mapper for dynamic lists
const IconMap: Record<string, React.ComponentType<any>> = {
  Star,
  Gift,
  Users,
  Smartphone,
  Printer,
  ClipboardCheck,
  GraduationCap,
  Heart,
  Shield,
  Activity,
  Award,
  Clock,
  Target,
  Smile,
  Calendar,
  Zap,
};

// No longer using WistiaEmbed, replaced with high-quality promo image.

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<"basic" | "premium">("premium");

  const openCheckout = (plan: "basic" | "premium") => {
    if (plan === "basic") {
      window.location.href = "https://pay.hotmart.com/D106480159Y?off=4wrouhld";
      return;
    }
    if (plan === "premium") {
      window.location.href = "https://pay.hotmart.com/D106480159Y?off=htt12ti3";
      return;
    }
    setCheckoutPlan(plan);
    setIsCheckoutOpen(true);
  };

  const scrollToPricing = () => {
    const element = document.getElementById("pricing-section-container");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30 overflow-x-hidden selection:bg-brand-blue selection:text-white">
      {/* 1. Header Top Bar Warning */}
      <HeaderTopBar />

      {/* 2. Hero Section */}
      <section id="hero-section" className="bg-white py-12 md:py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          {/* Main Title */}
          <div className="space-y-2">
            <motion.h1 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-none"
            >
              <span className="block text-brand-blue text-5xl sm:text-6xl md:text-7xl font-extrabold mb-1">
                +250
              </span>
              <span className="block text-brand-blue">Sesiones de Entrenamiento</span>
              <span className="text-slate-800 text-3xl sm:text-4xl md:text-5xl font-bold block mt-2">
                de Jiu-Jitsu Infantil Listas
              </span>
              <span className="block text-brand-gold mt-1">
                para Aplicar
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xs sm:text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            Planifica meses de entrenamiento en minutos. Más organización, mejores resultados y alumnos más motivados desde la primera clase.
          </motion.p>

          {/* Main Product Offer Image */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 mb-6 max-w-2xl mx-auto px-4"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <img
                src="https://i.ibb.co/prXdSyWB/Chat-GPT-Image-29-de-jun-de-2026-18-16-40.webp"
                alt="Sesiones de Entrenamiento de Jiu-Jitsu Infantil"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="pt-4"
          >
            <button
              id="hero-cta-btn"
              onClick={scrollToPricing}
              className="w-full sm:w-auto bg-brand-green hover:bg-brand-green-bright text-white font-black py-4 px-10 rounded-xl transition-all shadow-md hover:shadow-xl hover:scale-[1.02] cursor-pointer text-xs sm:text-sm tracking-wider uppercase animate-btn-pulse"
            >
              ¡QUIERO MIS ENTRENAMIENTOS AHORA!
            </button>
            <p className="text-[10px] text-slate-400 font-medium mt-2">⚡ Empieza a utilizar las sesiones hoy mismo.</p>
          </motion.div>
        </div>
      </section>

      {/* 3. O Que Você Vai Receber? Section */}
      <section id="features-section" className="py-16 md:py-24 max-w-5xl mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            ¿Qué vas a <span className="text-brand-blue">recibir?</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 max-w-lg mx-auto">
            Todo lo que necesitas para planificar meses de entrenamiento sin improvisar.
          </p>
        </div>

        {/* Features grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {FEATURES.map((feature) => {
            const IconComponent = IconMap[feature.iconName] || Star;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-[24px] border border-slate-200/60 p-5 md:p-8 flex flex-col items-center text-center space-y-4 hover:border-slate-300 hover:scale-[1.01] transition-all card-shadow"
              >
                {/* Rounded square filled blue icon container as seen in screenshot */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-[18px] bg-[#0066cc] text-white flex items-center justify-center shadow-sm">
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7 stroke-[2]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-slate-900 text-xs sm:text-sm md:text-base leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Por Que Escolher Nosso Material Section */}
      <section id="target-audience-section" className="bg-slate-100/50 py-16 md:py-24 border-y border-slate-200/50">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-3">
            <span className="inline-block text-[10px] font-mono uppercase bg-brand-blue text-white font-extrabold px-3 py-1 rounded-sm tracking-wider shadow-xs">
              BENEFICIOS
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              🥋 ¿Por qué elegir <span className="text-brand-blue">nuestro material?</span>
            </h2>
          </div>

          {/* Grid target cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {TARGET_AUDIENCES.map((target) => {
              const IconComponent = IconMap[target.iconName] || Heart;
              return (
                <div
                  key={target.id}
                  className="bg-white rounded-xl border border-slate-100 p-5 md:p-6 flex flex-col items-start gap-4 hover:border-slate-200 hover:shadow-md transition-all duration-300 card-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 text-2xl">
                    {target.emoji ? (
                      <span>{target.emoji}</span>
                    ) : (
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display font-bold text-slate-800 text-sm md:text-base leading-snug">
                      {target.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-normal">
                      {target.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Bônus Exclusivos Section */}
      <section id="bonus-section" className="bg-brand-blue-dark py-16 md:py-24 text-white relative overflow-hidden">
        {/* Decorative background glow rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 space-y-12 relative z-10">
          <div className="text-center space-y-4">
            <span className="inline-block text-[10px] font-mono uppercase border border-emerald-400 text-emerald-400 font-extrabold px-3 py-1 rounded-full tracking-wider animate-pulse-subtle bg-emerald-950/20">
              BONOS EXCLUSIVOS
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              ¡Recibe 3 Bonos Increíbles GRATIS!
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-200/90 max-w-lg mx-auto">
              Valor total de los bonos por separado: <span className="line-through text-red-300">USD 97.00</span> • <span className="text-emerald-400 font-bold">¡Hoy te llevas todo GRATIS!</span>
            </p>
          </div>

          {/* Row of 3 card containers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {BONUSES.map((bonus, idx) => {
              return (
                <div
                  key={bonus.id}
                  className="bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-between items-center text-center space-y-6 backdrop-blur-xs relative group"
                >
                  {/* Image/Representation placeholder with CSS styling */}
                  <div className="w-full rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center bg-black/20">
                    {bonus.imageUrl ? (
                      <>
                        <img
                          src={bonus.imageUrl}
                          alt={bonus.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-auto block transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-3">
                          <span className="text-[8px] text-slate-300 uppercase font-bold bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs self-start">
                            Regalo Exclusivo #0{idx+1}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
                        <Award className="w-10 h-10 text-brand-gold fill-brand-gold/20 mb-2 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-[8px] text-slate-400 uppercase font-bold mt-1">Regalo Exclusivo #0{idx+1}</span>
                      </>
                    )}
                  </div>

                  {/* Title and details */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-base md:text-lg leading-tight text-white">
                      {bonus.title}
                    </h3>
                    <p className="text-xs text-slate-300/80 leading-relaxed max-w-xs mx-auto">
                      {bonus.description}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Valor por separado: <span className="line-through font-mono">USD {bonus.valueOriginal}.00</span>
                    </p>
                  </div>

                  {/* Visual non-clickable badge/button */}
                  <div
                    className="w-full bg-brand-green text-white font-extrabold py-2.5 px-4 rounded-xl text-xs tracking-wider text-center select-none shadow-sm"
                  >
                    HOY GRATIS
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total Value Summary Callout */}
          <div className="text-center pt-4">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-display font-bold text-sm sm:text-base md:text-lg shadow-inner">
              <span className="text-slate-300">Total en bonos:</span>
              <span className="line-through text-red-400">USD 97.00</span>
              <span className="text-emerald-400">- Hoy: ¡GRATIS!</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing Section (Countdown & Packages) */}
      <section id="pricing-section" className="py-16 md:py-24 max-w-6xl mx-auto px-4">
        <PricingSection onSelectPlan={openCheckout} />
      </section>

      {/* 7. Social Proof Section */}
      <section id="social-proof-section" className="bg-slate-100/50 py-16 md:py-24 border-y border-slate-200/50">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <div className="text-center space-y-3">
            <span className="inline-block text-[10px] font-mono uppercase bg-brand-blue text-white font-extrabold px-3 py-1 rounded-sm tracking-wider shadow-xs">
              RESULTADOS REALES
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Lo que dicen nuestros <span className="text-brand-blue">Senseis</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
              Mira testimonios reales de senseis, profesores y academias que ya utilizan nuestras sesiones de entrenamiento y han transformado sus clases de Jiu-Jitsu infantil.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* 8. Guarantee Section */}
      <section id="guarantee-section" className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          {/* Gold Guarantee Seal in SVG for crisp look */}
          <div className="w-24 h-24 mx-auto relative flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-brand-gold fill-none">
                <path id="curve" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                <text className="text-[8px] font-bold font-mono tracking-widest uppercase fill-brand-gold" dy="-4">
                  <textPath href="#curve" startOffset="0%">
                    • GARANTÍA DE SATISFACCIÓN • 7 DÍAS DE REEMBOLSO •
                  </textPath>
                </text>
              </svg>
            </motion.div>
            <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold border-2 border-brand-gold rounded-full flex flex-col items-center justify-center relative z-10">
              <span className="font-display font-black text-lg leading-none">7</span>
              <span className="text-[8px] font-extrabold uppercase leading-none font-mono">DÍAS</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-2xl md:text-3xl font-black text-slate-800">
              Garantía Incondicional
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
              Prueba el material sin riesgos por <strong>7 días</strong>. Si por cualquier motivo sientes que estas sesiones no se adaptan a tu tatami o a tus clases infantiles, te devolveremos el <strong>100% de tu dinero de inmediato, sin preguntas ni complicaciones</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FAQs Section */}
      <section id="faq-section" className="py-16 md:py-24 max-w-4xl mx-auto px-4">
        <div className="text-center space-y-3 mb-12">
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-500 max-w-md mx-auto">
            ¿Tienes alguna duda? Encuentra respuestas rápidas aquí.
          </p>
        </div>

        <FAQSection />

        {/* Closing CTA */}
        <div className="pt-12 text-center">
          <button
            onClick={scrollToPricing}
            className="w-full sm:w-auto bg-brand-green hover:bg-brand-green-bright text-white font-black py-4 px-10 rounded-xl transition-all shadow-md hover:shadow-xl hover:scale-[1.02] cursor-pointer text-xs sm:text-sm tracking-wider uppercase animate-btn-pulse"
          >
            ¡QUIERO EMPEZAR AHORA!
          </button>
        </div>
      </section>

      {/* 10. Footer Section */}
      <footer id="main-footer" className="bg-[#0b1329] text-slate-400 py-12 px-4 border-t border-slate-950">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="font-display text-white text-lg font-black tracking-widest uppercase">
            JIU-JITSU INTERACTIVO
          </h3>
          <p className="text-xs leading-relaxed max-w-md mx-auto text-slate-400/80">
            © 2026 Sesiones de Entrenamiento de Jiu-Jitsu. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* Secure Checkout Modal Overlay */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedPlan={checkoutPlan}
      />
    </div>
  );
}
