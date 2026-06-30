import React, { useState, useEffect } from "react";
import { Check, ShieldCheck, Award, Heart, Sparkles, MessageCircle, Clock, Lock } from "lucide-react";
import { motion } from "motion/react";

interface PricingSectionProps {
  onSelectPlan: (plan: "basic" | "premium") => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  // 15-minute countdown persistent on visit
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 15, seconds: 0 });

  useEffect(() => {
    const COUNTDOWN_KEY = "jiujitsu_countdown_end";
    let endTimeStr = localStorage.getItem(COUNTDOWN_KEY);
    let endTime: number;

    if (!endTimeStr) {
      // 15 minutes from now
      endTime = Date.now() + 15 * 60 * 1000;
      localStorage.setItem(COUNTDOWN_KEY, endTime.toString());
    } else {
      endTime = parseInt(endTimeStr, 10);
      // If timer already expired, reset it to another 15 minutes for the next demo session
      if (endTime < Date.now()) {
        endTime = Date.now() + 15 * 60 * 1000;
        localStorage.setItem(COUNTDOWN_KEY, endTime.toString());
      }
    }

    const interval = setInterval(() => {
      const remaining = endTime - Date.now();
      if (remaining <= 0) {
        // Reset timer once it hits zero for endless urgency demonstration
        const newEndTime = Date.now() + 15 * 60 * 1000;
        localStorage.setItem(COUNTDOWN_KEY, newEndTime.toString());
        setTimeLeft({ hours: 0, minutes: 15, seconds: 0 });
      } else {
        const h = Math.floor(remaining / (3600 * 1000));
        const m = Math.floor((remaining % (3600 * 1000)) / (60 * 1000));
        const s = Math.floor((remaining % (60 * 1000)) / 1000);
        setTimeLeft({ hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div id="pricing-section-container" className="space-y-10">
      {/* Title */}
      <div className="text-center space-y-3">
        <h2 className="font-display text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Invierte en la Calidad de tus Clases
        </h2>
      </div>

      {/* Countdown Timer */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="text-[10px] md:text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 animate-pulse" />
          El descuento expira en:
        </p>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="bg-slate-100 border border-slate-200/80 rounded-xl px-4 py-3 min-w-[70px] text-center shadow-xs">
            <span className="block font-display font-black text-slate-800 text-xl md:text-2xl leading-none">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-[9px] uppercase font-mono font-semibold text-slate-400 mt-1 block">Horas</span>
          </div>
          <span className="font-bold text-slate-400 text-xl">:</span>
          <div className="bg-slate-100 border border-slate-200/80 rounded-xl px-4 py-3 min-w-[70px] text-center shadow-xs">
            <span className="block font-display font-black text-slate-800 text-xl md:text-2xl leading-none">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-[9px] uppercase font-mono font-semibold text-slate-400 mt-1 block">Minutos</span>
          </div>
          <span className="font-bold text-slate-400 text-xl">:</span>
          <div className="bg-slate-100 border border-slate-200/80 rounded-xl px-4 py-3 min-w-[70px] text-center shadow-xs">
            <span className="block font-display font-black text-brand-blue text-xl md:text-2xl leading-none animate-pulse-subtle">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="text-[9px] uppercase font-mono font-semibold text-slate-400 mt-1 block">Segundos</span>
          </div>
        </div>
      </div>

      {/* Plans comparison cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto px-4 lg:px-0">
        {/* Basic Plan */}
        <div 
          id="pricing-card-basic" 
          className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 flex flex-col justify-between card-shadow relative overflow-hidden"
        >
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-bold tracking-wider">
                Acceso Inicial
              </span>
              <h3 className="font-display text-xl md:text-2xl font-black text-slate-800 mt-3">Plan Básico</h3>
              <p className="text-xs text-slate-400 mt-1">Para quienes están comenzando y quieren probar en el tatami.</p>
            </div>

            <div className="py-4 border-y border-slate-100 space-y-1 text-center">
              <span className="text-xs text-slate-400 line-through block">Antes USD 27.00</span>
              <div className="flex items-baseline justify-center gap-1.5">
                <span className="font-display font-black text-3xl md:text-4xl text-slate-800">USD 5.00</span>
                <span className="text-xs text-slate-500 font-semibold">Pago Único</span>
              </div>
            </div>

            <ul className="space-y-3 pt-2 text-xs md:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>+150 Sesiones de Entrenamiento de Jiu-Jitsu</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Acceso de por vida al material inicial</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Entrenamientos organizados listos para aplicar.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Garantía incondicional de 7 días</span>
              </li>
              <li className="flex items-start gap-2.5 opacity-40 line-through">
                <Check className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <span>Bono 1: Certificado Oficial de Participación en Jiu-Jitsu Infantil</span>
              </li>
              <li className="flex items-start gap-2.5 opacity-40 line-through">
                <Check className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <span>Bono 2: Libro de Juegos de Lucha</span>
              </li>
              <li className="flex items-start gap-2.5 opacity-40 line-through">
                <Check className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <span>Bono 3: 100 Ejercicios de Prep. Física</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 space-y-4">
            <button
              id="choose-basic-plan-btn"
              onClick={() => onSelectPlan("basic")}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 px-4 rounded-xl transition-all cursor-pointer text-center text-xs md:text-sm shadow-xs border border-slate-200 animate-btn-pulse"
            >
              ELEGIR PLAN BÁSICO
            </button>

            {/* Badges */}
            <div className="flex items-center justify-center gap-3 text-[10px] text-slate-400 font-semibold">
              <span className="flex items-center gap-0.5">🔒 Seguro</span>
              <span>•</span>
              <span className="flex items-center gap-0.5">⭐ Garantizado</span>
              <span>•</span>
              <span className="flex items-center gap-0.5">🛡️ Protegido</span>
            </div>


          </div>
        </div>

        {/* Premium Plan - Highly Highlighted */}
        <div 
          id="pricing-card-premium" 
          className="bg-white rounded-2xl border-2 border-brand-blue p-6 md:p-8 flex flex-col justify-between card-shadow glow-shadow relative overflow-hidden"
        >
          {/* Most popular Ribbon banner */}
          <div className="absolute top-0 right-0 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest px-8 py-2 rotate-45 translate-x-7 translate-y-3 shadow-sm">
            POPULAR ⭐
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-gold fill-brand-gold animate-bounce" />
              <span className="text-[10px] font-mono uppercase bg-blue-100 text-brand-blue px-2.5 py-1 rounded-md font-extrabold tracking-wider">
                El Kit Completo Recomendado
              </span>
            </div>
            
            <h3 className="font-display text-xl md:text-2xl font-black text-slate-900 mt-2 flex items-center gap-1.5">
              Plan Premium
            </h3>
            <p className="text-xs text-slate-500">El arsenal pedagógico completo para dominar la atención de los más pequeños.</p>

            {/* Interactive Bundle Visual Representation */}
            <div className="py-2.5 flex justify-center">
              <div className="relative w-full rounded-xl border border-slate-200 flex items-center justify-center overflow-hidden bg-slate-50">
                <img
                  src="https://i.ibb.co/twYFCDWV/Chat-GPT-Image-24-de-jun-de-2026-22-33-59-Photoroom.webp"
                  alt="Plan Premium Mockup"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block transition-transform duration-300 hover:scale-102"
                />
              </div>
            </div>

            <div className="py-4 border-y border-slate-100 space-y-1 text-center">
              <span className="text-xs text-red-500 font-semibold line-through block">Antes USD 47.00 por:</span>
              <div className="flex items-baseline justify-center gap-1.5">
                <span className="font-display font-black text-3xl md:text-5xl text-brand-blue">USD 15.00</span>
                <span className="text-xs text-slate-500 font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md">Pago Único e Ilimitado</span>
              </div>
            </div>

            <ul className="space-y-3 pt-2 text-xs md:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 font-extrabold" />
                <span><strong>+250 Sesiones de Entrenamiento</strong> de Jiu-Jitsu</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Actualizaciones Mensuales (Acceso de por vida)</span>
              </li>
              <li className="flex items-start gap-2.5 text-emerald-700 font-semibold">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Soporte VIP Prioritario</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Metodología Probada</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Garantía Incondicional de 7 días</span>
              </li>
              <li className="flex items-start gap-2.5 text-emerald-700 font-bold bg-emerald-50 p-2 rounded-xl border border-emerald-100">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                <span>🎁 Bono 1: Certificado Oficial de Participación</span>
              </li>
              <li className="flex items-start gap-2.5 text-emerald-700 font-bold bg-emerald-50 p-2 rounded-xl border border-emerald-100">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                <span>🎁 Bono 2: Libro de Juegos de Lucha</span>
              </li>
              <li className="flex items-start gap-2.5 text-emerald-700 font-bold bg-emerald-50 p-2 rounded-xl border border-emerald-100">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                <span>🎁 Bono 3: 100 Ejercicios de Prep. Física</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 space-y-4">
            <button
              id="choose-premium-plan-btn"
              onClick={() => onSelectPlan("premium")}
              className="w-full bg-brand-green hover:bg-brand-green-bright text-white font-bold py-4 px-4 rounded-xl transition-all cursor-pointer text-center text-xs md:text-sm shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 animate-btn-pulse"
            >
              ELEGIR PLAN PREMIUM
            </button>

            {/* Badges */}
            <div className="flex items-center justify-center gap-3 text-[10px] text-slate-400 font-semibold">
              <span className="flex items-center gap-0.5">🔒 Compra Segura</span>
              <span>•</span>
              <span className="flex items-center gap-0.5">⭐ Satisfacción Garantizada</span>
              <span>•</span>
              <span className="flex items-center gap-0.5">🛡️ Datos Protegidos</span>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
