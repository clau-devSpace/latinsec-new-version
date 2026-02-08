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
          <div className="max-w-5xl mx-auto w-full">
            <h1 className="text-white text-3xl md:text-6xl leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] font-bold">
              Tótem de Seguridad
            </h1>
            <p className="text-white italic py-3 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem accusantium repellat, voluptate fugit quasi
              laborum.
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
                    Tótem de Seguridad
                  </h2>
                  <p className="text-lg text-[#4B5563]">
                    Ofrecemos tótems de seguridad inteligentes, una solución
                    moderna que brinda presencia disuasiva, comunicación
                    inmediata y control visual en puntos estratégicos. Estos
                    dispositivos funcionan como un canal directo entre el lugar
                    protegido y nuestro centro de monitoreo. Los tótems permiten
                    una respuesta rápida ante emergencias, mejoran la percepción
                    de seguridad y se integran fácilmente a distintos entornos,
                    tanto públicos como privados. Su diseño y tecnología los
                    convierten en una herramienta eficaz para reforzar la
                    seguridad sin invadir el espacio.
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
                    <span>Barrios privados y countries.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Edificios corporativos y complejos residenciales.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>Centros comerciales y espacios públicos..</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>Playas de estacionamiento.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>Accesos principales y zonas de alto tránsito.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check
                      className="text-green-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Eventos puntuales o refuerzos de seguridad temporales.
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
