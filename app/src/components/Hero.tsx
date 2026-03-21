'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
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
            <a
          href="https://github.com/ezerfrlux"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-x-2 text-sm/6 font-semibold text-white hover:text-blue-400 transition-all duration-300"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-400"></span>
        </a>
            </div>
          </div>
        </div>

        <div className="sm:justify-center lg:w-[25%] mt-10 sm:w-full md:relative overflow-hidden rounded-full lg:absolute lg:ml-[50%]">
          <Image
            src={"/profile.png"}
            alt="Profile"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <GradientDecorationBgDown />
    </div>
  );
};

export default Hero;
