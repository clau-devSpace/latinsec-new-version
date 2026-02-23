import Asesoramiento from '@/assets/images/asesoramiento.jpg';
import { Reveal } from '@/components/animation/Reveal';
import Image from 'next/image';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import AsesoramientoYConsultoria from '@/assets/images/consultoria.jpg';
import Consultoria from '@/assets/images/consulltoria-nueva-imagen.jpg';
import {Check} from 'lucide-react';

const page = () => {
  return (
    <>
      <section className="relative h-screen">
        <WhatsAppButton />

        <Image
          src={Consultoria}
          alt="Imagen aluciva a asesoramiento y consultoria"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto w-full">
            <h1 className="text-white text-3xl md:text-6xl leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] font-bold">
              Asesoramiento y Consultoría
            </h1>
            <p className="text-white italic py-3 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              Consultoría experta para prevenir riesgos y optimizar la seguridad.
            </p>
          </div>
        </div>
      </section>

     <section className="bg-[#FAFAFA]">
  <div className="max-w-5xl mx-auto py-16 flex flex-col gap-5 px-5">
    <Reveal hiddenValue={{ opacity: 0, x: 75 }}>
      <section>
        {/* Sección de título, descripción e imagen */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Columna de texto */}
          <div>
            <h2 className="text-[#252B42] text-4xl font-bold mb-4">
              Asesoramiento y consultoría
            </h2>
            <p className="text-lg text-[#4B5563]">
              Ofrecemos asesoramiento y consultoría en seguridad, orientados a
              analizar, prevenir y optimizar la protección de personas, bienes
              e información. Nuestro enfoque combina experiencia práctica,
              análisis estratégico y una mirada actual, alineada con los
              desafíos de cada época. Acompañamos a empresas y organizaciones
              en la evaluación de riesgos, el diseño de soluciones a medida y
              la mejora continua de sus sistemas de seguridad. Creemos en un
              servicio cercano, flexible y profesional, donde la prevención y
              la planificación son clave.
            </p>
          </div>

          {/* Columna de imagen */}
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={Asesoramiento}
              alt="Asesoramiento y consultoría"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Línea divisoria elegante */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#FAFAFA] px-4 text-sm text-gray-500">
              Aplicaciones
            </span>
          </div>
        </div>

        {/* Sección de lista */}
        <div>
          <h3 className="text-[#252B42] text-2xl font-semibold mb-6">
            Nuestro servicio de consultoría puede aplicarse en:
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Diagnóstico y auditoría de seguridad integral.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Diseño de planes y protocolos de seguridad.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Optimización de recursos humanos y tecnológicos.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Asesoramiento en seguridad física y electrónica.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Capacitación del personal.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Planificación de seguridad para nuevas instalaciones o proyectos.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Armado de proyectos de seguridad a medida.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Manejo de crisis.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Elaboración de manuales de seguridad.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Diagramación de centros de control de seguridad.</span>
            </li>
          </ul>
        </div>
      </section>
    </Reveal>
  </div>
</section>
    </>
  );
};

export default page;
