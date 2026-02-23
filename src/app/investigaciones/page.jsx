import Investigaciones from "@/assets/images/investigaciones.jpg";
import InvestigacionesPrivadas from "@/assets/images/Investigaciones-privadas.png";
import { Reveal } from "@/components/animation/Reveal";
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {Check} from 'lucide-react';

const page = () => {
  return (
    <>
      <section className="relative h-screen">
        <WhatsAppButton />
        <Image
          src={InvestigacionesPrivadas}
          alt="Imagen aluciva a investigaciones privadas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto w-full px-5">
            <h1 className="text-white text-3xl md:text-6xl leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] font-bold">
              Investigaciones
            </h1>
            <p className="text-white italic py-3 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              Caso por caso y de acuerdo a las necesidades específicas de cada
              cliente.
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
                    Investigaciones
                  </h2>
                  <p className="text-lg text-[#4B5563]">
                    En{" "}
                    <strong>
                      <span className="text-[#007bff]">Latin</span>
                      <span className="text-red-600">Sec</span>
                    </strong>{" "}
                    Contamos con un área especializada en investigaciones privadas,
                    orientada tanto a particulares como a empresas, que combina
                    experiencia, discreción y un enfoque humano. Con 29 años de
                    trayectoria, entendemos que cada situación es única y requiere
                    un tratamiento profesional, ético y confidencial. Nuestro equipo
                    trabaja con metodologías modernas, herramientas tecnológicas y
                    personal altamente capacitado, garantizando información precisa
                    y útil para la toma de decisiones. Acompañamos al cliente
                    durante todo el proceso, brindando claridad, contención y
                    resultados concretos.
                  </p>
                </div>

                {/* Columna de imagen */}
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={Investigaciones}
                    alt="Investigaciones privadas"
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
                  Este servicio puede aplicarse en:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>Investigaciones laborales (ausentismo, licencias, conductas irregulares).</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>Verificación de antecedentes personales o comerciales.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>Investigaciones patrimoniales y comerciales.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>Casos de infidelidad o conflictos familiares.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>Detección de fraudes internos o externos.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[#4B5563]">
                    <Check className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>Apoyo investigativo para estudios jurídicos y aseguradoras.</span>
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
