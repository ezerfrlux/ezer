'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import porfilePicture from './../img/profile.png';
import GradientDecorationBg from './GradientDecorationBg';
import GradientDecorationBgDown from './GradientDecorationBgDown';

const Hero = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* Forma superior */}
      <GradientDecorationBg />

      {/* Contenido principal */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 lg:flex">
        <div className="flex w-full relative lg:pr-20">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Frontend Developer Specializing in <span className="text-blue-500">React</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Frontend developer with experience in React, TypeScript, and Tailwind. I create fast and easy-to-use interfaces.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="text-sm/6 font-semibold text-white">
                Projects <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Imagen de perfil */}
        <div className="sm:justify-center lg:w-[25%] mt-10 sm:w-full md:relative overflow-hidden rounded-full lg:absolute lg:ml-[50%]">
          <Image
            src={porfilePicture}
            alt="Profile"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Forma inferior */}
      <GradientDecorationBgDown />
    </div>
  );
};

export default Hero;
