import Custodia from "@/assets/images/custodia-de-mercaderia.jpg";
import { Reveal } from "@/components/animation/Reveal";
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
          <div className="max-w-5xl mx-auto px-5 w-full">
            <h1 className="text-white text-3xl md:text-6xl leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] font-bold flex items-center justify-center">Custodia de Mercadería</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto py-16 flex flex-col gap-5 px-5">
          <Reveal hiddenValue={{ opacity: 0, x: -75 }}>
            <section>
              <h1 className="text-[#252B42] text-4xl font-bold mb-4">
                Custodia de mercadería en tránsito
              </h1>
              <p className="text-lg">
                El patrimonio de una empresa va más allá de sus instalaciones,
                incluye también mercadería que en muchos casos debe ser
                trasladada y necesita ser protegida. Ofrecemos un servicio de
                Custodia Armada, a distintos tipos de transportes, no solo de
                mercadería, sino también de personal y equipos técnicos, cuya
                jurisdicción abarca todo el Territorio Nacional. Brindamos la
                más amplia cobertura, para este tipo de custodias, contando con
                personal con alto grado de entrenamiento.
              </p>
            </section>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default page;
