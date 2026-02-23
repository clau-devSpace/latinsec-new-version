import Custodia from "@/assets/images/custodia-de-mercaderia.jpg";
import { Reveal } from "@/components/animation/Reveal";
import {Dot, Check} from 'lucide-react';
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import SeguridadBancaria from "@/assets/images/seguridad-bancaria-1.png";
import SeguridadBancaria2 from "@/assets/images/seguridad-bancaria-3.png";

const page = () => {
  return (
    <>
      <section className="bg-[#FAFAFA] relative h-screen">
        <WhatsAppButton />

        <Image
          src={SeguridadBancaria}
          alt="Imagen Escolta de Camion con Auto LatinSec"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto w-full">
            <h1 className="text-white text-3xl md:text-6xl leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] font-bold">
              Seguridad Bancaria
            </h1>
            <p className="text-white italic py-3 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              Seguridad profesional diseñada para el entorno bancario y financiero.
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
                    Seguridad Bancaria
                  </h2>
                  <p className="text-lg text-[#4B5563]">
                    Brindamos servicios de seguridad bancaria diseñados para
                    proteger personas, instalaciones y activos críticos,
                    cumpliendo con los más altos estándares del sector
                    financiero. Nuestra experiencia de 29 años trabajando con
                    clientes de primera línea nos permite comprender en
                    profundidad las dinámicas, exigencias y responsabilidades
                    que requiere este entorno. Combinamos presencia humana
                    altamente capacitada, protocolos estrictos y tecnología de
                    apoyo, priorizando la prevención, la atención al público y
                    la respuesta eficiente ante cualquier incidente. Nuestro
                    enfoque es profesional, discreto y adaptable a las
                    necesidades de cada entidad.
                  </p>
                </div>

                {/* Columna de imagen */}
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={SeguridadBancaria2}
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
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>Sucursales bancarias y entidades financieras.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>Seguridad en áreas de atención al público.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Custodia de sectores sensibles y áreas restringidas.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>Control de accesos de personal y proveedores.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Acompañamiento en aperturas, cierres y horarios
                      especiales.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Refuerzo de seguridad en fechas o situaciones de mayor
                      exposición.
                    </span>
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
