'use client'
import React, { useEffect, useState } from 'react'

const Skills = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="py-24 sm:py-32 relative">

      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <h2 className="text-center text-lg/8 font-semibold text-white">Frontend Stack</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <img
            alt="Reform"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <img
            alt="Tuple"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          <img
            alt="SavvyCal"
            src="https://upload.wikimedia.org/wikipedia/commons/6/62/Git-logo-orange.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />

          <img
            alt="Statamic"
            src="https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvqwoji22l56hjgsl6woy.jpeg"
            width={200}
            height={100}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
        <div className='flex justify-center items-center text-center w-full  pr-[20%] pl-[20%] pt-10'>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Through self-study, I have developed strong expertise in modern web development technologies such as <span className='text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]'>
              React
            </span>, {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]'>JavaScript</span>, {" "}
             <span className='text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]'>Next.js</span>, {" "}
             <span className='text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]'>Tailwind CSS</span>,
              and <span className='text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]'>Git</span> 
              . These tools allow me to build complete web applications, from functionality and logic to clean, modern, and responsive interfaces, managing projects efficiently and in an organized way. With this skill set, I can take a project from start to finish, ensuring fast and high-quality development.
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-10"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            transform: `translate(${pos.x * 0.03}px, ${pos.y * 0.03}px) rotate(10deg)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[10rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[40rem]"
        />
      </div>
    </div>

  )
}

export default Skills