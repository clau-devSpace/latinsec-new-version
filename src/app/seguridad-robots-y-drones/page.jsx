import Custodia from "@/assets/images/custodia-de-mercaderia.jpg";
import { Reveal } from "@/components/animation/Reveal";
import {Dot, Check} from 'lucide-react';
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import RobotPatrulla from "@/assets/images/robot-patrulla-2.png";

const page = () => {
  return (
    <>
      <section className="bg-[#FAFAFA] relative h-screen">
        <WhatsAppButton />

        <Image
          src={RobotPatrulla}
          alt="Imagen Escolta de Camion con Auto LatinSec"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto w-full">
            <h1 className="text-white text-3xl md:text-6xl leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] font-bold">
              Robots Autónomos y Drones
            </h1>
            <p className="text-white italic py-3 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              Seguridad avanzada con patrullaje autónomo y monitoreo aéreo.
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
                    Robots Autónomos
                  </h2>
                  <p className="text-lg text-[#4B5563]">
                    Incorporamos robots autónomos de patrullaje como una
                    solución innovadora que complementa la seguridad
                    tradicional. Estos sistemas permiten monitoreo constante,
                    disuasión visible y control inteligente, adaptándose a los
                    desafíos actuales de la seguridad moderna. Los robots
                    patrulla operan de forma continua, recorriendo áreas
                    predefinidas y transmitiendo información en tiempo real.
                    Integran tecnología avanzada con la supervisión humana,
                    logrando un equilibrio entre eficiencia operativa y control
                    profesional.
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
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      {" "}
                      Parques industriales y predios de gran extensión.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Edificios corporativos y complejos empresariales.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Playas de estacionamiento y perímetros externos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>Centros logísticos y depósitos.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span></span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Refuerzo de vigilancia nocturna o fuera de horario.{" "}
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Complemento tecnológico para equipos de seguridad
                      existentes.
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
