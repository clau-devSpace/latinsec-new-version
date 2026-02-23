"use client";

import { useState } from 'react';
import Logo from '@/assets/images/logo.png';
import { MenuHamburger } from './MenuHamburger';
import { NavArrowIcon } from '@/assets/icons';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="nav fixed top-0 w-full z-50 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <nav className="bg-white max-w-[1400px] mx-auto px-10 py-2.5 grid grid-cols-[auto_1fr_auto] items-center gap-8">
        {/* Logo */}
        <div className="w-36">
          <a href="/">
            <Image src={Logo} alt="Logo" />
          </a>
        </div>

        {/* Menú Desktop - Centrado */}
        <ul className="lg:flex hidden items-center justify-center gap-5 text-[15px] font-medium text-[#0e2c66]">
          <li>
            <a
              href="/"
              className="relative py-2 hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#e63946] after:transition-all after:duration-300"
            >
              Inicio
            </a>
          </li>

          <li className="relative group">
            <button className="flex gap-1 items-center py-2 hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#e63946] after:transition-all after:duration-300">
              Servicios
              <span className="transition-transform group-hover:rotate-180">
                <NavArrowIcon />
              </span>
            </button>
            <ul className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 bg-white shadow-lg rounded-lg w-72 p-5 flex flex-col gap-2 top-full left-1/2 -translate-x-1/2 mt-2">
              <li>
                <a
                  href="/seguridad-fisica"
                  className="block p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Seguridad física
                </a>
              </li>
              <li>
                <a
                  href="/seguridad-electronica"
                  className="block p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Seguridad electrónica
                </a>
              </li>
              <li>
                <a
                  href="/custodia-de-mercaderia"
                  className="block p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Custodia de mercadería en tránsito
                </a>
              </li>
              <li>
                <a
                  href="/investigaciones"
                  className="block p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Investigaciones
                </a>
              </li>
              <li>
                <a
                  href="/asesoramiento-y-consultoria"
                  className="block p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Asesoramiento y consultoría
                </a>
              </li>
               <li>
                <a
                  href="/servicio-de-totem"
                  className="block p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Servicio de Tótems
                </a>
              </li>
               <li>
                <a
                  href="/seguridad-robots-y-drones"
                  className="block p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg transition-colors"
                >
                 Patrullaje con robots autónomos y drones
                </a>
              </li>
               <li>
                <a
                  href="/seguridad-bancaria"
                  className="block p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Seguridad bancaria
                </a>
              </li>
               <li>
                <a
                  href="/seguridad-armada"
                  className="block p-1 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Seguridad armada
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="/latinsec"
              className="relative py-2 hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#e63946] after:transition-all after:duration-300"
            >
              Latinsec
            </a>
          </li>

          <li>
            <a
              href="/contacto"
              className=" text-[#e63946] relative py-2 hover:after:w-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#e63946] after:transition-all after:duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Puntos decorativos - Desktop */}
        <div className="lg:flex hidden gap-3 text-[#0e2c66]">
          <a href="#" className='bg-[#07142A] rounded-full p-2'>
            <FaInstagram className="w-4 h-4 text-[#fff] hover:text-[#e63946]" />
          </a>
          <a href="#" className='bg-[#07142A] rounded-full p-2'>
            <FaFacebookF className="w-4 h-4 text-[#fff] hover:text-[#e63946]" />
          </a>
          <a href="#" className='bg-[#07142A] rounded-full p-2'>
            <FaLinkedinIn className=" w-4 h-4 text-[#fff] hover:text-[#e63946]" />
          </a>
        </div>

        {/* Menú Hamburguesa - Mobile */}
        <div className="lg:hidden ml-auto">
          <MenuHamburger handleOpenMenu={handleOpenMenu} />
        </div>
      </nav>

      {/* Menú Mobile */}
      <nav
        className={`absolute w-screen h-screen transition-all duration-500 ${
          openMenu ? "top-0" : "-translate-y-[1920px]"
        }`}
      >
        <div className="bg-white px-4">
          <div
            onClick={handleOpenMenu}
            className="pr-10 pt-5 text-3xl font-bold flex justify-end text-[#0e2c66] cursor-pointer"
          >
            <span>&times;</span>
          </div>
          <div className="max-w-xs mx-auto py-10">
            <div className="text-sm font-medium flex flex-col gap-2">
              <a
                href="/"
                className="bg-[#e63946] py-3 px-4 rounded-lg text-white"
              >
                Inicio
              </a>
              <details className="py-2 px-4">
                <summary className="inline-flex items-center justify-between cursor-pointer text-[#0e2c66]">
                  <div className="flex gap-1 items-center">
                    Servicios
                    <span>
                      <NavArrowIcon />
                    </span>
                  </div>
                </summary>
                <div className="flex flex-col mt-2 transition-all duration-500 overflow-hidden">
                  <a
                    href="/seguridad-fisica"
                    className="p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg"
                  >
                    Seguridad física
                  </a>
                   <a
                    href="/seguridad-electronica"
                    className="p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg"
                  >
                    Seguridad electrónica
                  </a>
                  <a
                    href="/custodia-de-mercaderia"
                    className="p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg"
                  >
                    Custodia de mercadería en tránsito
                  </a>
                 
                  <a
                    href="/investigaciones"
                    className="p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg"
                  >
                    Investigaciones
                  </a>
                  <a
                    href="/asesoramiento-y-consultoria"
                    className="p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg"
                  >
                    Asesoramiento y consultoría
                  </a>
                   <a
                    href="/servicio-de-totem"
                    className="p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg"
                  >
                    Servicio de Tótems
                  </a>
                   <a
                    href="/seguridad-robots-y-drones"
                    className="p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg"
                  >
                    Patrullaje con Robots Autónomos y Drones
                  </a>
                   <a
                    href="/seguridad-bancaria"
                    className="p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg"
                  >
                    Seguridad Bancaria
                  </a>
                  <a
                    href="/seguridad-armada"
                    className="p-2 hover:text-[#0063A5] hover:bg-gray-50 rounded-lg"
                  >
                    Seguridad Armada
                  </a>
                </div>
              </details>
              <a href="/latinsec" className="py-3 px-4 text-[#0e2c66]">
                Latinsec
              </a>
              <a
                href="/contacto"
                className="font-semibold bg-[#e63946] rounded-lg py-3 px-4 text-white"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};