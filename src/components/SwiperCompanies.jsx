/* eslint-disable react/prop-types */
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function SwiperCompanies({data}) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            // CAMBIO: se redujo de 4 a 3 slides en móvil.
            // Con 4 slides y los contenedores internos de w-40 (160px),
            // el total superaba el ancho del viewport causando superposición.
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        {[...data, ...data].map(({ logo }, i) => (
          // CAMBIO: se mantiene h-36 para que el slide siga teniendo la misma altura de antes.
          <SwiperSlide key={i} className='h-36 flex items-center justify-center'>
            {/* 
              CAMBIO: se reemplazó w-40 (ancho fijo de 160px) por w-full.
              El ancho fijo era el principal culpable: en móvil cada slide recibe
              un ancho menor a 160px, pero el contenedor lo ignoraba y se salía,
              pisando al slide vecino. Con w-full el contenedor respeta el espacio
              que Swiper le asigna a cada slide.
            */}
            <div className="w-full flex items-center justify-center px-2">
              {/* 
                CAMBIO: se agregaron width={120} y height={60} al componente Image.
                Next.js requiere dimensiones explícitas; sin ellas la imagen no sabe
                qué tamaño ocupar y puede desbordarse. Se agregó también
                object-contain para que la imagen se escale proporcionalmente
                sin recortarse, y w-full + h-auto para que se adapte al
                contenedor en lugar de tener un tamaño fijo.
                El resultado visual es prácticamente idéntico al original en desktop.
              */}
              <Image
                src={logo}
                alt=""
                width={120}
                height={60}
                className="object-contain w-full h-auto max-h-16"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}