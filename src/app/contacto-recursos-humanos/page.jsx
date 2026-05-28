"use client";

import { useState } from "react";

const EMAIL = "reclutamiento@latinsec.com";
const SUBJECT = "Postulación - Envío de CV";

export default function Postulaciones() {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative overflow-hidden"
      style={{ background: "linear-gradient(145deg, #083d6e 0%, #0b62a2 35%, #0d71b8 60%, #0a5a96 100%)" }}
    >
      {/* Decorative floating shapes - hidden on small screens */}
      <div
        className="hidden sm:block absolute w-80 h-80 rounded-full -top-20 -right-16"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
          animation: "float1 8s ease-in-out infinite",
        }}
      />
      <div
        className="hidden sm:block absolute w-60 h-60 rounded-full -bottom-10 -left-10"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          animation: "float2 10s ease-in-out infinite",
        }}
      />
      <div
        className="hidden sm:block absolute w-40 h-40 top-1/2 left-[15%] border border-white/5"
        style={{
          borderRadius: "40%",
          animation: "float3 12s ease-in-out infinite",
        }}
      />

      {/* Card */}
      <div
        className="bg-white/95 rounded-xl sm:rounded-2xl px-5 py-8 sm:px-10 sm:py-12 max-w-md w-full text-center relative overflow-hidden shadow-2xl"
        style={{ animation: "fadeUp 0.7s ease-out both" }}
      >
        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{
            background: "linear-gradient(90deg, #0b62a2, #0d8edb, #0b62a2)",
            backgroundSize: "200% auto",
            animation: "shimmer 3s linear infinite",
          }}
        />

        {/* Icon */}
        <div
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5"
          style={{ background: "linear-gradient(135deg, #e8f2fc, #d4e8f9)" }}
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0b62a2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <line x1="12" y1="12" x2="12" y2="16" />
            <line x1="10" y1="14" x2="14" y2="14" />
          </svg>
        </div>

        {/* Title */}
        <h1
          className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight"
          style={{ fontFamily: "'Playfair Display', serif", color: "#0b2e4f" }}
        >
          Postulaciones Abiertas
        </h1>

        {/* Divider */}
        <div
          className="w-12 h-0.5 rounded-full mx-auto my-4"
          style={{ background: "linear-gradient(90deg, #0b62a2, #3da0e3)" }}
        />

        {/* Description */}
        <p className="text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6" style={{ color: "#4a5e73", fontWeight: 300 }}>
          Estamos buscando talento. Enviá tu CV al siguiente mail, solo se reciben CV enviados a este medio:
        </p>

        {/* Email CTA */}
        <a
          href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`}
          className={`inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 py-3 sm:px-7 sm:py-3.5 text-white rounded-xl text-sm sm:text-base font-medium tracking-wide no-underline transition-all duration-300 w-full sm:w-auto ${
            hovered ? "-translate-y-0.5" : ""
          }`}
          style={{
            background: hovered
              ? "linear-gradient(135deg, #094f84, #0b6db8)"
              : "linear-gradient(135deg, #0b62a2, #0d7fd4)",
            boxShadow: hovered
              ? "0 6px 22px rgba(11, 98, 162, 0.45)"
              : "0 4px 15px rgba(11, 98, 162, 0.35)",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13L2 4" />
          </svg>
          <span className="break-all sm:break-normal">{EMAIL}</span>
        </a>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="block mx-auto mt-3.5 bg-transparent border-none text-xs font-medium cursor-pointer opacity-75 hover:opacity-100 transition-opacity duration-200"
          style={{ color: "#0b62a2", fontFamily: "'DM Sans', sans-serif" }}
        >
          {copied ? "✓ Copiado" : "Copiar dirección de email"}
        </button>

        {/* Footer note */}
        <p className="text-[11px] sm:text-xs mt-5 sm:mt-7 leading-relaxed" style={{ color: "#8a9baf", fontWeight: 300 }}>
          Hacé click en el mail para abrir tu cliente de correo, o copiá la dirección con el botón.
        </p>
      </div>
    </div>
  );
}