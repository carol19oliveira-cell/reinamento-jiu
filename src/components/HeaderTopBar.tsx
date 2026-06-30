import React, { useState, useEffect } from "react";

export default function HeaderTopBar() {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
    // Get date in Spanish format: e.g., "29 de junio de 2026"
    const today = new Date().toLocaleDateString("es-ES", options);
    setFormattedDate(today);
  }, []);

  return (
    <div 
      id="top-alert-banner" 
      className="bg-red-600 text-white text-center py-2 px-4 text-xs font-semibold tracking-wide uppercase flex items-center justify-center gap-2 border-b border-red-700 shadow-xs"
    >
      <span className="flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
      </span>
      <span className="font-display">
        🔥 Descuento Exclusivo • Válido Solo por Hoy{formattedDate ? `, ${formattedDate}` : ""}
      </span>
    </div>
  );
}
