import Image from "next/image";

/* eslint-disable react/prop-types */
export const TestimonialCard = ({ data }) => {
  const { name, description, rate } = data;

  return (
    <div className="relative max-w-[420px] mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/30">

      {/* Comillas decorativas */}
      <span className="absolute -top-6 -left-4 text-[90px] leading-none text-black/5 font-serif select-none">
        “
      </span>

      {/* Contenido */}
      <div className="relative z-10">
        <p className="text-[#252B42] text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div>
          <p className="font-bold text-sm text-[#252B42]">{name}</p>
          <p className="text-xs text-[#737373]">Cliente verificado</p>
        </div>
      </div>

      {/* Estrellas */}
      <div className="absolute bottom-4 right-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < rate ? "fill-[#F5B301]" : "fill-[#E0E0E0]"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09L5.5 12.18.999 7.91l6.06-.88L10 1.5l2.94 5.53 6.06.88-4.5 4.27 1.378 5.91z" />
          </svg>
        ))}
      </div>
    </div>
  );
};
