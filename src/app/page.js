"use client"
import React from 'react';
import {
  ArrowRightIcon,
  AwardIcon,
  ClarityUsersIcon,
  NotebookIcon,
  SearchIcon,
  ShopTwotoneIcon,
  TruckIcon,
  CameraIcon,
} from '@/assets/icons';
import { FaBuilding, FaUsers, FaAward } from "react-icons/fa";
import ChatBot from '@/components/ChatBot/ChatBot';
import SwiperCompanies from '@/components/SwiperCompanies';
import SwiperComponent from '@/components/SwiperComponent';
import bgPrimary from '@/assets/images/bg-primary.webp';
import CountUp from 'react-countup';
import { Reveal } from '@/components/animation/Reveal';
import { Typewriter } from 'react-simple-typewriter';
import { DataCompanies } from '@/data/dataCompanies';
import { DataTerritory } from '@/data/dataTerritory';
import SwiperAbout from '@/components/SwiperAbout';
import Image from 'next/image';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import CoverImage from "@/assets/images/portada.png";
import ImagenPortada from '@/assets/images/seguridad-latinsec-2.png';
import Fisic from '@/assets/images/seguridad-fisica.png';
import Elec from '@/assets/images/control-accesos.png';
import Custodia from '@/assets/images/imagen-escolta.png';
import Consultoria from '@/assets/images/consultoria.jpg';
import RobotsAutonomos from '@/assets/images/robots-autonomos.png';
import SeguridadBancaria from '@/assets/images/seguridad-en-bancos.jpeg';
import Research from '@/assets/images/research.jpg';
import Totem from '@/assets/images/totem-vigilador.png';


const Home = () => {
  return (
    <main className="z-10 relative">
      {/*<ChatBot />*/}
      <WhatsAppButton />
     <section className="relative min-h-screen overflow-hidden bg-gradient-to-l from-[#2a4a6c]/40 to-[#3d6db0]/30">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-[1]">
        <img 
          src={ImagenPortada.src} 
          alt="Background"
          className="w-full h-full object-cover object-right"
        />
        {/* Overlay azul unificador */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07142a]/80 via-[#07142a]/64 to-[#07142a]/30"></div>
      </div>

      {/* Shapes geométricos */}
      <div className="absolute w-[520px] h-[520px] bg-white/5 rounded-[60px] rotate-[20deg] top-[-160px] right-[120px] z-[2]"></div>
      <div className="absolute w-[420px] h-[420px] bg-white/5 rounded-[60px] -rotate-[25deg] bottom-[-200px] left-[-140px] z-[2]"></div>
      <div className="absolute w-[380px] h-[380px] bg-white/[0.04] rounded-[60px] rotate-[20deg] top-[120px] right-[380px] z-[2] blur-[2px]"></div>
      <div className="absolute w-[260px] h-[260px] bg-[#e63946]/[0.08] rounded-[60px] -rotate-[15deg] bottom-[160px] right-[120px] z-[2]"></div>
      <div className="absolute w-[600px] h-[600px] bg-white/[0.03] rounded-[60px] rotate-[30deg] bottom-[-260px] right-[-200px] z-[2]"></div>

      {/* Panel diagonal */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-br from-transparent via-white/5 to-transparent bg-[length:200%_200%] opacity-50"></div>

      {/* Grid decorativa */}
      <div 
        className="absolute inset-0 z-[2] opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      ></div>

      {/* Contenido del hero */}
      <div className="relative z-[3] h-screen grid place-content-center text-white px-4">
        <div className="flex flex-col items-center text-center gap-3 max-w-[800px]">
          <h1 className="xl:text-[52px] lg:text-5xl text-3xl font-extrabold">
            Tu{" "}
            <Typewriter
              words={["protección"]}
              loop={5}
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={2000}
            />{" "}
            es nuestra especialidad
          </h1>
          <p className="font-medium xl:text-xl lg:text-lg text-md max-w-sm text-[#dbe4ff]">
            Somos una empresa de vigilancia que cuenta con mas de 27 años de
            experiencia
          </p>
        </div>
      </div>
    </section>
      <section className="bg-[#07142A] xl:h-20 lg:h-40 md:h-48 h-56 relative flex justify-center mt-10">
        <div className="bg-white max-w-[768px] p-4 grid xl:grid-cols-3 grid-cols-1 md:gap-6 gap-10 absolute -top-10">
          <div className="flex items-center gap-2">
            <span>
              <FaUsers className="text-[45px] text-[#e63946]" />
            </span>
            <div>
              <span className="font-bold text-[24px] text-[#252B42]">
                +<CountUp end={300} duration={5} />
              </span>
              <p className="font-semibold text-sm text-[#737373]">Empleados</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <FaBuilding className="text-[45px] text-[#e63946]" />
            </span>
            <div>
              <span className="font-bold text-[24px] text-[#252B42]">
                +<CountUp end={250} duration={5} />
              </span>
              <p className="font-semibold text-sm text-[#737373]">
                Clientes felices
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <FaAward className="text-[45px] text-[#e63946]" />
            </span>
            <div>
              <span className="font-bold text-[24px] text-[#252B42]">
                +<CountUp end={27} duration={5} />
              </span>
              <p className="font-semibold text-sm text-[#737373]">
                Años en el mercado
              </p>
            </div>
          </div>
        </div>
      </section>

<section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-5">
    <div className="text-center max-w-xl mx-auto mb-14">
      <h2 className="text-[38px] font-bold text-[#07142A]">
        Nuestros Servicios
      </h2>
      <p className="text-[#737373] mt-3">
        Soluciones de seguridad adaptadas a cada necesidad
      </p>
    </div>

    {/* Grid premium – cards superiores */}
    <div
      className="
        grid
        gap-8
        justify-center
        mb-8
        [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]
      "
    >
      {/* Seguridad Fisica */}
      <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 right-0 z-10 bg-[#0263A5]/70 px-5 py-2">
          <h3 className="text-white text-base font-medium">Seguridad Física</h3>
        </div>
        <img
          src={Fisic.src}
          alt="Investigación"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent"></div>
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-sm text-white/90">
             Personal de seguridad altamente capacitado
          </p>
          <a
            href="/investigaciones"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#7EC1FF]"
          >
            Más info <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Seguridad Electronica */}
      <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 right-0 z-10 bg-[#0263A5]/70 px-5 py-2">
          <h3 className="text-white text-base font-medium">Seguridad Electrónica</h3>
        </div>
        <img
          src={Elec.src}
          alt="Seguridad Física"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent"></div>
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-sm text-white/90">
            Monitoreo y tecnología de última generación
          </p>
          <a
            href="/seguridad-fisica"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#7EC1FF]"
          >
            Más info <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Custodia de Mercadería */}
      <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 right-0 z-10 bg-[#0263A5]/70 px-5 py-2">
          <h3 className="text-white text-base font-medium">
            Custodia de Mercadería
          </h3>
        </div>
        <img
          src={Custodia.src}
          alt="Custodia de Mercadería"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent"></div>
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-sm text-white/90">
            Custodia armada y protección de mercadería en tránsito
          </p>
          <a
            href="/custodia-de-mercaderia"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#7EC1FF]"
          >
            Más info <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Seguridad Electrónica */}
      <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 right-0 z-10 bg-[#0263A5]/70 px-5 py-2">
          <h3 className="text-white text-base font-medium">
            Seguridad Bancaria
          </h3>
        </div>
        <img
          src={SeguridadBancaria.src}
          alt="Seguridad Electrónica"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-sm text-white/90">
            Protección integral para entidades financieras
          </p>
          <a
            href="/seguridad-electronica"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#7EC1FF]"
          >
            Más info <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>

    {/* Grid premium – cards inferiores */}
    <div
      className="
        grid
        gap-8
        justify-center
        [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]
      "
    >
      {/* Seguridad Bancaria */}
      <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 right-0 z-10 bg-[#0263A5]/70 px-5 py-2">
          <h3 className="text-white text-base font-medium">Asesoramiento y Consultoría</h3>
        </div>
        <img
          src={Consultoria.src}
          alt="Seguridad Bancaria"
          className="absolute inset-0 w-full h-full object-cover object-[center_3%] group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-sm text-white/90">
            Asesorías integrales en Seguridad
          </p>
          <a
            href="/seguridad-bancaria"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#7EC1FF]"
          >
            Más info <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Servicio de Tótem */}
      <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 right-0 z-10 bg-[#0263A5]/70 px-5 py-2">
          <h3 className="text-white text-base font-medium">Investigaciones Privadas</h3>
        </div>
        <img
          src={Research.src}
          alt="Servicio de Tótem"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-sm text-white/90">
            Investigaciones con enfoques únicos en cada caso
          </p>
          <a
            href="/servicio-de-toten"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#7EC1FF]"
          >
            Más info <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Seguridad Integral */}
      <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 right-0 z-10 bg-[#0263A5]/70 px-5 py-2 ">
          <h3 className="text-white text-base font-medium">Servicio de Tótems</h3>
        </div>
        <img
          src={Totem.src}
          alt="Seguridad Integral"
          className="absolute inset-0 w-full h-full object-cover object-[center_3%] group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-sm text-white/90">
            Tótems de Seguridad con tecnología de vanguardia
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#7EC1FF]"
          >
            Más info <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Seguridad Integral */}
      <div className="group relative h-[340px] rounded-2xl overflow-hidden shadow-md">
        <div className="absolute top-0 left-0 right-0 z-10 bg-[#0263A5]/70 px-5 py-2">
          <h3 className="text-white text-base font-medium">Robots Autónomos</h3>
        </div>
        <img
          src={RobotsAutonomos.src}
          alt="Seguridad Integral"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 p-6 text-white">
          <p className="text-sm text-white/90">
            Sistema de control de rondas y vigilancia
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#7EC1FF]"
          >
            Más info <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    <section className="bg-white py-16">
  <div className="max-w-5xl mx-auto">
    <Reveal>
      <div className="text-center max-w-4xl px-5 mx-auto">
        <h3 className="text-[#07142A] font-bold text-[40px] mb-4">
          Sobre <span className="text-[#0263A5]">Latin</span>
          <span className="text-[#FF0000]">Sec</span>
        </h3>

        <p className="text-[#4B5563] font-medium text-base md:text-lg leading-relaxed">
        Con 27 años de trayectoria, somos una empresa de seguridad dedicada a la protección de personas, bienes e información. A lo largo de nuestra historia hemos trabajado con clientes de primer nivel, construyendo relaciones basadas en la confianza, el compromiso y el profesionalismo.
        </p>

        <p className="text-[#4B5563] font-medium text-base md:text-lg leading-relaxed mt-4">
          Ofrecemos soluciones integrales de seguridad, combinando personal capacitado, tecnología confiable y procedimientos eficientes, adaptados a las necesidades de cada cliente. Nuestro enfoque es cercano y personalizado, con altos estándares de calidad y una mejora constante para responder a los nuevos desafíos del entorno.
        </p>
      </div>
    </Reveal>
  </div>
</section>

      <section className="bg-[#0263A5] py-10 px-5">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-white font-medium text-[40px]">
            Opiniones de nuestros clientes
          </h3>
          <p className="text-white font-medium text-sm">
            Opiniones de nuestros clientes potenciales.
          </p>
        </div>
        <div className="mt-10">
          <SwiperComponent />
        </div>
      </section>
      <section className="bg-[#FAFAFA] py-16 px-5">
        <div className="text-center">
          <h3 className="text-[#252B42] font-bold text-[32px]">
            Compañías con la que trabaja{" "}
            <span className="text-[#0263A5]">Latin</span>
            <span className="text-[#FF0000]">Sec</span>
          </h3>
        </div>
        <div className="mt-10">
          <SwiperCompanies data={DataCompanies} />
        </div>
      </section>
      <section className="bg-[#FAFAFA] pt-16 pb-20 text-white px-5">
        <div className="max-w-5xl mx-auto lg:flex items-center gap-5">
          <Reveal hiddenValue={{ opacity: 0, x: -75 }}>
            <div>
              <h3 className="font-bold text-[40px] text-[#07142A]">Cobertura Territorial</h3>
              <p className="font-medium text-sm text-[#4B5563] line-clamp-7">
                <span className="text-[#0263A5]">Latin</span>
                <span className="text-[#FF0000]">Sec</span> con habilitaciones
                para operar tanto en la Ciudad de Buenos Aires como en todo el
                Ã¡mbito de la Provincia, en jurisdicciÃ³n de la Prefectura Naval
                Argentina y poseemos habilitaciones para el uso de armas de
                ANMaC. AdemÃ¡s estamos adheridos a la CÃ¡mara Argentina de
                Empresas de Seguridad e InvestigaciÃ³n (CAESI). Para custodia de
                mercaderÃ­a en trÃ¡nsito en todo el territorio nacional.
              </p>
            </div>
          </Reveal>
          <div className="lg:w-[600px] mt-16 lg:mt-0">
            <SwiperCompanies data={DataTerritory} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;