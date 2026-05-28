const BriefcaseIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="12" />
    <path d="M2 12h20" />
  </svg>
);

export const WorkWithUsButton = () => {
  return (
    <a
      href="/contacto-recursos-humanos"
      className="fixed bottom-4 left-4 md:left-auto md:bottom-24 md:right-8 z-50 flex items-center gap-2 bg-[#0263A5] hover:bg-[#024f87] transition-colors duration-300 rounded-full pl-2 pr-4 py-2 md:pl-3 md:pr-5 md:py-3 shadow-lg"
    >
      <div className="bg-white/20 rounded-full p-1 md:p-1.5 flex items-center justify-center">
        <BriefcaseIcon className="w-4 h-4 md:w-6 md:h-6 text-white" />
      </div>
      <span className="text-white font-semibold text-xs md:text-sm whitespace-nowrap">
        Trabajá con Nosotros
      </span>
    </a>
  );
};