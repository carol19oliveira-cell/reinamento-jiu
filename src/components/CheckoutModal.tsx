import React, { useState, useEffect } from "react";
import { X, CreditCard, Copy, CheckCircle, Lock, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: "basic" | "premium";
}

export default function CheckoutModal({ isOpen, onClose, selectedPlan }: CheckoutModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Info, 2: Payment, 3: Success
  const [plan, setPlan] = useState<"basic" | "premium">(selectedPlan);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvv: "",
    installments: "1",
  });
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPlan(selectedPlan);
      setStep(1);
      setIsProcessing(false);
    }
  }, [isOpen, selectedPlan]);

  const price = plan === "premium" ? 15.00 : 5.00;
  const planName = plan === "premium" ? "Plan Premium + 3 Bonos" : "Plan Básico";

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }
    setStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 2000);
  };

  const copyPixCode = () => {
    const pixCode = `00020101021226870014jiujitsuinterativo_pago_express_5204000053039865405${price.toFixed(2)}5802MX5921JiuJitsuInterativo6009CDMX62070503***6304CA8F`;
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="checkout-modal-overlay" className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
        <motion.div
          id="checkout-modal-container"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh] card-shadow"
        >
          {/* Header */}
          <div className="bg-brand-blue-dark text-white p-5 flex justify-between items-center relative">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-emerald-300 font-bold bg-emerald-950/40 px-2 py-0.5 rounded-sm">
                Ambiente 100% Seguro
              </span>
              <h3 className="font-display text-lg font-bold mt-1">Finalizar Inscripción</h3>
            </div>
            <button
              id="close-checkout-btn"
              onClick={onClose}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
            <span className={`${step >= 1 ? "text-blue-600 font-semibold" : ""}`}>1. Identificación</span>
            <span className="text-slate-300">/</span>
            <span className={`${step >= 2 ? "text-blue-600 font-semibold" : ""}`}>2. Pago</span>
            <span className="text-slate-300">/</span>
            <span className={`${step >= 3 ? "text-emerald-600 font-semibold" : ""}`}>3. Acceso</span>
          </div>

          {/* Content Area */}
          <div className="p-6 overflow-y-auto flex-1">
            {step === 1 && (
              <form id="checkout-info-form" onSubmit={handleInfoSubmit} className="space-y-4">
                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs text-slate-500">Item seleccionado:</p>
                    <p className="font-display text-sm font-semibold text-slate-800">{planName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 line-through">USD {plan === "premium" ? "47.00" : "27.00"}</p>
                    <p className="font-display font-black text-brand-blue text-lg">USD {price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex gap-2 p-1 bg-slate-100 rounded-lg mb-4">
                  <button
                    type="button"
                    onClick={() => {
                      window.location.href = "https://pay.hotmart.com/D106480159Y?off=4wrouhld";
                    }}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      plan === "basic"
                        ? "bg-white text-slate-800 shadow-xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Básico (USD 5)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlan("premium")}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      plan === "premium"
                        ? "bg-brand-blue text-white shadow-xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Premium (USD 15.00) ⭐
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nombre Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Carlos Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Tu mejor correo electrónico</label>
                    <input
                      type="email"
                      required
                      placeholder="Ej: tu-correo@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">WhatsApp (con código de país)</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej: +52 55 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                    />
                    <p className="text-[10px] text-slate-400 mt-1">El enlace de descarga se enviará automáticamente a este número.</p>
                  </div>
                </div>

                <button
                  type="submit"
                  id="checkout-next-btn"
                  className="w-full mt-6 bg-brand-green hover:bg-brand-green-bright text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:scale-[1.01]"
                >
                  Ir al Pago
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {step === 2 && (
              <div className="space-y-5">
                {/* Order Summary banner */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between text-xs text-slate-600 mb-2">
                  <span>Enviando a: <strong className="text-slate-800">{formData.phone}</strong></span>
                  <span>Total: <strong className="text-slate-800">USD {price.toFixed(2)}</strong></span>
                </div>

                {/* Payment method selector */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("pix")}
                    className={`p-3 border rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-bold ${
                      paymentMethod === "pix"
                        ? "border-brand-blue bg-blue-50/40 text-brand-blue"
                        : "border-slate-200 hover:border-slate-300 text-slate-500"
                    }`}
                  >
                    <span className="text-sm">⚡ Pago Express</span>
                    <span>SPEI / PSE / Sinpe / Sinpe Móvil</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-3 border rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-bold ${
                      paymentMethod === "card"
                        ? "border-brand-blue bg-blue-50/40 text-brand-blue"
                        : "border-slate-200 hover:border-slate-300 text-slate-500"
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Tarjeta de Crédito</span>
                  </button>
                </div>

                {paymentMethod === "pix" ? (
                  <div className="space-y-4 text-center">
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      Paga de forma express para recibir acceso inmediato por WhatsApp y Correo electrónico.
                    </p>

                    {/* Fake QR Code */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 inline-block mx-auto relative">
                      <div className="w-36 h-36 bg-white border border-slate-100 flex items-center justify-center p-2 mx-auto rounded-lg">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-slate-800">
                          {/* Simulated QR Code patterns */}
                          <rect x="0" y="0" width="25" height="25" fill="currentColor" />
                          <rect x="5" y="5" width="15" height="15" fill="white" />
                          <rect x="8" y="8" width="9" height="9" fill="currentColor" />

                          <rect x="75" y="0" width="25" height="25" fill="currentColor" />
                          <rect x="80" y="5" width="15" height="15" fill="white" />
                          <rect x="83" y="8" width="9" height="9" fill="currentColor" />

                          <rect x="0" y="75" width="25" height="25" fill="currentColor" />
                          <rect x="5" y="80" width="15" height="15" fill="white" />
                          <rect x="8" y="83" width="9" height="9" fill="currentColor" />

                          <rect x="35" y="10" width="10" height="10" fill="currentColor" />
                          <rect x="50" y="5" width="15" height="10" fill="currentColor" />
                          <rect x="40" y="25" width="15" height="15" fill="currentColor" />
                          <rect x="10" y="40" width="15" height="10" fill="currentColor" />
                          <rect x="65" y="40" width="20" height="15" fill="currentColor" />
                          <rect x="35" y="60" width="25" height="15" fill="currentColor" />
                          <rect x="70" y="70" width="15" height="20" fill="currentColor" />
                          <rect x="45" y="80" width="15" height="10" fill="currentColor" />
                        </svg>
                      </div>
                      <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-brand-blue text-[9px] text-white px-2.5 py-0.5 rounded-full font-mono">
                        USD {price.toFixed(2)}
                      </span>
                    </div>

                    <div className="space-y-2 mt-4 max-w-sm mx-auto">
                      <button
                        type="button"
                        onClick={copyPixCode}
                        className="w-full py-2.5 px-4 border-2 border-dashed border-brand-blue hover:bg-blue-50/50 text-brand-blue font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                        {copied ? "¡Código Copiado! ✔️" : "Copiar código de pago express"}
                      </button>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handlePaymentSubmit}
                        disabled={isProcessing}
                        className="w-full bg-brand-green hover:bg-brand-green-bright text-white font-bold py-3 rounded-xl transition-all shadow-md hover:scale-[1.01] flex items-center justify-center gap-2"
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Procesando pago...
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            Simular Pago Confirmado
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handlePaymentSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Número de Tarjeta</label>
                      <input
                        type="text"
                        required
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        value={cardData.number}
                        onChange={(e) => setCardData({ ...cardData, number: e.target.value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim() })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Vencimiento (MM/AA)</label>
                        <input
                          type="text"
                          required
                          placeholder="MM/AA"
                          maxLength={5}
                          value={cardData.expiry}
                          onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-center"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">CVC (Atrás)</label>
                        <input
                          type="text"
                          required
                          placeholder="123"
                          maxLength={4}
                          value={cardData.cvv}
                          onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                          className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue text-center"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Cuotas / Pagos</label>
                      <select
                        value={cardData.installments}
                        onChange={(e) => setCardData({ ...cardData, installments: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue bg-white"
                      >
                        <option value="1">1 pago de USD {price.toFixed(2)} (Sin interés)</option>
                        {plan === "premium" && (
                          <>
                            <option value="2">2 pagos de USD 5.15</option>
                            <option value="3">3 pagos de USD 3.50</option>
                          </>
                        )}
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full mt-2 bg-brand-green hover:bg-brand-green-bright text-white font-bold py-3 rounded-xl transition-all shadow-md hover:scale-[1.01] flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Conectando con el banco...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Simular Pago de USD {price.toFixed(2)}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 text-center py-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-slate-800">¡Inscripción Confirmada!</h4>
                  <p className="text-sm text-slate-500 mt-1">¡Felicidades, {formData.name || "Sensei"}! Tu pago fue procesado con éxito.</p>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-left text-xs text-slate-600 space-y-2">
                  <p>✨ ¿Qué pasa ahora?</p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-700">
                    <li>Tu material <strong>{plan === "premium" ? "+250 Dinámicas" : "+150 Dinámicas"} Interactivas de Jiu-Jitsu</strong> ya está disponible.</li>
                    <li>Un asesor automatizado acaba de enviar los archivos PDF a tu WhatsApp <strong>{formData.phone}</strong>.</li>
                    <li>El recibo de compra y el enlace de respaldo se enviaron a tu correo electrónico: <strong>{formData.email}</strong>.</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/525512345678?text=Hola,%20gostaria%20de%20receber%20as%20minhas%20din%C3%A2micas%20de%20Jiu-Jitsu"
                    target="_blank"
                    rel="noreferrer"
                    onClick={onClose}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md hover:scale-[1.01] inline-flex items-center justify-center gap-2 text-sm"
                  >
                    <span>Abrir Material en WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Footer lock certificates */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-center gap-6 text-[10px] text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-slate-400" />
              Encriptación SSL
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              Garantía de 7 Días
            </span>
            <span className="text-emerald-600 font-semibold">🔒 Compra Segura</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
