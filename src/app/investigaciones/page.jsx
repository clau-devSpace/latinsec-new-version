import Investigaciones from '@/assets/images/investigaciones.jpg';
import InvestigacionesPrivadas from '@/assets/images/investigaciones-privadas.png';
import { Reveal } from '@/components/animation/Reveal';
import Image from 'next/image';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const page = () => {
  return (
    <>
    <section className='relative h-screen'>
       <WhatsAppButton />
        <Image src={InvestigacionesPrivadas} 
        alt="Imagen aluciva a investigaciones privadas" 
        fill
        className="object-cover"/>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-5 w-full">
            <h1 className="text-white text-3xl md:text-6xl leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] font-bold flex items-center justify-center">Investigaciones</h1>
          </div>
        </div>
    </section>

    <section>
      <div className="max-w-5xl mx-auto py-16 flex flex-col gap-5 px-5">
        <Reveal hiddenValue={{ opacity: 0, x: -75 }}>
          <section>
            <h1 className="text-[#252B42] text-4xl font-bold mb-4">
              Investigaciones
            </h1>
            <p className="text-lg">
              En{' '}
              <strong>
                <span className="text-[#007bff]">Latin</span>
                <span className="text-red-600">Sec</span>
              </strong>{' '}
              trabajamos con un equipo especial, encargados de realizar
              cualquier tipo de investigación, tanto corporativa como de tinte
              personal. Las empresas suelen experimentar situaciones negativas
              que tienen impacto directo en sus principales recursos
              estratégicos como: personas, instalaciones, productos, información
              y reputación, lo que afecta el logro de sus objetivos estratégicos
              y en algunos casos compromete la continuidad del negocio. Una
              investigación busca determinar de manera plena y creíble, lo que
              sucedió con respecto a un incidente en particular, si se produjo o
              no una conducta sospechosa; cuáles fueron las circunstancias;
              quién está involucrado; si ocurrió una violación de la ley o
              política de la compañía. Trabajamos con personal altamente
              capacitado, utilizando además herramientas electrónicas modernas,
              para ir cumpliendo de manera progresiva con las distintas etapas
              investigativas.
            </p>
          </section>
        </Reveal>
      </div>
    </section>
    </>
   
  );
};

export default page;
