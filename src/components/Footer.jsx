import Logo from '@/assets/images/logo.png';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="z-10 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto grid xl:grid-cols-3 gap-10 px-5 py-12 items-start justify-items-center">

        {/* Logo y derechos */}
        <div className="flex flex-col items-center text-center gap-2">
          <Image src={Logo} alt="Logo" width={200} />
          <p className="text-sm">
            &copy; Derechos reservados Latinsec. 
          </p>
          <a
            href="https://www.google.com/maps/place/Fraga+1119,+CABA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500"
          >
            Ver en Google Maps
          </a>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-[#252B42] font-bold text-2xl">Contacto</h2>
          <div className="mt-2 text-sm text-[#737373] flex flex-col gap-1">
            <p>Email: comercial@latinsec.com</p>
            <p>Teléfono: 5219-1638</p>
            <p>WhatsApp: +54-9-11-5765-1676</p>
          </div>
        </div>

        {/* Redes */}
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-[#252B42] font-bold text-2xl">Nuestras redes</h2>
          <p className="text-[#737373] font-semibold text-sm">
            Seguinos en nuestras redes sociales
          </p>
          <div className="mt-1 flex text-2xl gap-3">
             <a href="#" className='bg-[#07142A] rounded-full p-2'>
            <FaInstagram className="w-4 h-4 text-[#fff] hover:text-[#e63946]" />
          </a>
          <a href="#" className='bg-[#07142A] rounded-full p-2'>
            <FaFacebookF className="w-4 h-4 text-[#fff] hover:text-[#e63946]" />
          </a>
          <a href="#" className='bg-[#07142A] rounded-full p-2'>
            <FaLinkedinIn className=" w-4 h-4 text-[#fff] hover:text-[#e63946]" />
          </a>
          </div>
        </div>

      </div>
    </footer>
  );
};