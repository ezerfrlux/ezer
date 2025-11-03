'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import porfilePicture from './../../public/profile.png';
import GradientDecorationBg from './GradientDecorationBg';
import GradientDecorationBgDown from './GradientDecorationBgDown';
import Link from 'next/link';
import SplitTextComponent from './animations/text/SplitTextComponent';
import { useMemo } from 'react';
import TypingTextAnimation from './animations/text/TypingTextAnimation';
const Hero = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const splitText = useMemo(() => <SplitTextComponent text="Frontend Developer Specializing in" />, [])
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* Forma superior */}
      <GradientDecorationBg />
      {/* Contenido principal */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 lg:flex">
        <div className="flex w-full relative lg:pr-20">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              <TypingTextAnimation text={["Frontend Developer Specializing in"]} />

              <span className="text-blue-500">React</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Frontend developer with experience in React, TypeScript, and Tailwind. I create fast and easy-to-use interfaces.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/projects"
                className="text-sm/6 font-semibold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-[#ff80b5] hover:to-[#9089fc] transition-all duration-300"
              >
                Projects <span aria-hidden="true">→</span>
              </Link>
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
