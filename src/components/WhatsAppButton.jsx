import { WhatsappIcon } from '@/assets/icons';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+5491157651676"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-8 md:right-8 z-50 flex items-center gap-2 bg-[#0263A5] hover:bg-[#024f87] transition-colors duration-300 rounded-full pl-2 pr-4 py-2 md:pl-3 md:pr-5 md:py-3 shadow-lg"
    >
      <div className="bg-white/20 rounded-full p-1 md:p-1.5 flex items-center justify-center">
        <WhatsappIcon className="w-4 h-4 md:w-6 md:h-6 text-white" />
      </div>
      <span className="text-white font-semibold text-xs md:text-sm whitespace-nowrap">
        Solicita tu presupuesto
      </span>
    </a>
  );
};