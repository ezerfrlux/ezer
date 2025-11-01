import { useEffect, useState } from 'react';
import Image from 'next/image';
import porfilePicture from './../img/profile.png';

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
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            transform: `translate(${pos.x * 0.03}px, ${pos.y * 0.03}px) rotate(30deg)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>

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
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            transform: `translate(${pos.x * -0.03}px, ${pos.y * -0.03}px)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
