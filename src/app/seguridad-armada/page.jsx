import Asesoramiento from '@/assets/images/asesoramiento.jpg';
import { Reveal } from '@/components/animation/Reveal';
import Image from 'next/image';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import AsesoramientoYConsultoria from '@/assets/images/consultoria.jpg';
import SeguridadArmada from '@/assets/images/Seguridad-armada.png';
import SeguridadArmadaDescripcion from '@/assets/images/Seguridad-armada-descripcion.png';
import {Check} from 'lucide-react';

const page = () => {
  return (
    <>
      <section className="relative h-screen">
        <WhatsAppButton />

        <Image
          src={SeguridadArmada}
          alt="Imagen aluciva a asesoramiento y consultoria"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto w-full px-5">
            <h1 className="text-white text-3xl md:text-6xl leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] font-bold">
              Seguridad Armada
            </h1>
            <p className="text-white italic py-3 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              Servicios de seguridad armada con criterio profesional y habilitación legal.
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
                    Seguridad Armada
                  </h2>
                  <p className="text-lg text-[#4B5563]">
                    Acorde a los requerimientos de cada cliente, brindamos
                    servicios de seguridad armada bajo estrictos criterios
                    profesionales y dentro del marco legal vigente. Nuestra
                    empresa cuenta con la habilitación correspondiente otorgada
                    por ANMaC, lo que nos permite operar con distintos niveles
                    de disuasión según el tipo de servicio y el análisis de
                    riesgo realizado. Los servicios se desarrollan priorizando
                    la prevención, la protección de las personas y el control
                    responsable de cada situación, combinando recorridas,
                    control de accesos y custodia de áreas sensibles. Cada
                    operación es evaluada de manera individual, aplicando
                    protocolos claros y personal debidamente capacitado. Nuestro
                    enfoque es profesional, humano y flexible, adaptándose a las
                    características del entorno y a las necesidades específicas
                    de cada cliente, siempre con el objetivo de garantizar
                    seguridad, tranquilidad y confianza.
                  </p>
                </div>

                {/* Columna de imagen */}
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={SeguridadArmadaDescripcion}
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
                  Nuestro servicio puede aplicarse en:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Barrios privados, countries y urbanizaciones cerradas.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Control de accesos y recorridas preventivas en entornos
                      residenciales.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Custodia de perímetros y sectores estratégicos, según
                      análisis previo de riesgo.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Instalaciones que requieran servicios de seguridad armada
                      habilitada.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Operativos especiales o refuerzos de seguridad en
                      situaciones puntuales.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Servicios que requieran distintos niveles de disuasión,
                      definidos de manera profesional.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Escenarios donde, conforme a la normativa vigente y
                      evaluación de riesgo, se determine la modalidad operativa
                      más adecuada.
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
