import Custodia from "@/assets/images/custodia-de-mercaderia.jpg";
import { Reveal } from "@/components/animation/Reveal";
import {Dot, Check} from 'lucide-react';
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import CustodiaDeMercaderia from "@/assets/images/imagen-escolta.png";

const page = () => {
  return (
    <>
      <section className="bg-[#FAFAFA] relative h-screen">
        <WhatsAppButton />

        <Image
          src={CustodiaDeMercaderia}
          alt="Imagen Escolta de Camion con Auto LatinSec"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto w-full px-5">
            <h1 className="text-white text-3xl md:text-6xl leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] font-bold">
              Custodia de Mercadería
            </h1>
            <p className="text-white italic py-3 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              Asegurá tu carga para que llegue segura a destino y sentite
              tranquilo/a durante el proceso.
            </p>
          </div>
        </div>
      </section>

     <section>
  <div className="max-w-5xl mx-auto py-16 flex flex-col gap-5 px-5">
    <Reveal hiddenValue={{ opacity: 0, x: -75 }}>
      <section>
        {/* Sección de título, descripción e imagen */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Columna de texto */}
          <div>
            <h2 className="text-[#252B42] text-4xl font-bold mb-4">
              Custodia de mercadería en tránsito
            </h2>
            <p className="text-lg text-[#4B5563]">
              Brindamos un servicio integral de custodia y protección de
              mercadería en tránsito, diseñado para minimizar riesgos y
              asegurar que cada carga llegue a destino de forma segura.
              Nuestra experiencia en seguridad logística nos permite
              adaptarnos a distintos tipos de operaciones, rutas y niveles de
              exposición. Trabajamos con protocolos claros, personal entrenado
              y comunicación permanente, priorizando la prevención y la
              respuesta rápida ante cualquier eventualidad. 
            </p>
          </div>

          {/* Columna de imagen */}
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={Custodia}
              alt="Custodia de mercadería"
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
            Nuestro servicio de custodia puede aplicarse en:
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Traslado de mercadería de alto valor.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Distribución de productos sensibles o estratégicos.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Operaciones logísticas en zonas de riesgo.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Acompañamiento de camiones y flotas.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Custodia de cargas especiales o fuera de horario habitual.</span>
            </li>
            <li className="flex items-start gap-2 text-[#4B5563]">
              <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span>Eventos puntuales o refuerzos de seguridad temporales.</span>
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
