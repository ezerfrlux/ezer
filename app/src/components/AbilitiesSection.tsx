'use client'
import { useEffect, useState } from "react";
import type { Metadata } from 'next'

function AbilitiesSection() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div className="relative py-24 sm:py-32 ">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            transform: `translate(${pos.x * 0.03}px, ${pos.y * 0.03}px) rotate(50deg)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

        <h2 className="text-center text-base/7 font-semibold text-transparent text-blue-400 bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
          Abilities
        </h2>

        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          How I Develop Websites
        </p>

        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative group lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-900 opacity-30 lg:rounded-l-5xl transition-opacity duration-500 group-hover:opacity-15" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  Responsive Websites
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  I create responsive designs that adapt to mobile devices using Tailwind CSS and React.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                  <video className="w-full h-full object-cover object-top" autoPlay loop muted>
                    <source src="/videos/Videoapp.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
          </div>
          <div className="relative group max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-gray-900 opacity-30 max-lg:rounded-t-4xl transition-opacity duration-500 group-hover:opacity-15" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  I develop apps with Next.js with good performance.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative group max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-gray-900 opacity-30 transition-opacity duration-500 group-hover:opacity-15" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  I build secure websites, protecting user data and preventing vulnerabilities for safe and reliable web experiences.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
          </div>
          <div className="relative group lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-gray-900 max-lg:rounded-b-4xl lg:rounded-r-4xl opacity-30 transition-opacity duration-500 group-hover:opacity-20" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                  SEO
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  I create high-performance websites using Next.js, delivering fast, scalable, and modern web experiences that enhance user engagement and business growth.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        layout.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">
                    <code>
                      <span className="text-blue-300">
                        import{" "}
                      </span>
                      <span className="text-purple-400">
                        type {" "}
                      </span>
                      <span className="text-blue-500">
                        &#123; {" "}
                      </span>
                      <span className="text-blue-300">
                        Metadata {" "}
                      </span>
                      <span className="text-blue-500">
                        &#125; {" "}
                      </span>
                      <span className="text-blue-300">
                        from {" "}
                      </span>
                      <span className="text-green-400">
                        &apos;next&apos;
                      </span>
                      <br />
                      <br />
                      <span className="text-blue-300">
                        export {""}
                      </span>
                      <span className="text-purple-400">
                        const {""}
                      </span>
                      <span className="text-purple-300">
                        metadata
                      </span>
                      <span className="text-blue-300">
                        :{" "}
                      </span>
                      <span className="text-white">
                        Metadata{" "}
                      </span>
                      <span className="text-blue-300">
                        = {" "}
                      </span>
                      <span className="text-blue-500">
                        &nbsp;&nbsp;&nbsp;&nbsp; &#123; {" "}
                      </span>
                      <br />
                      <span className="text-green-300">
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; title
                      </span>
                      <span className="text-blue-300">
                        :{" "}
                      </span>
                      <span className="text-blue-300">
                        &quot;
                      </span>
                      <span className="text-green-200">
                        My blog
                      </span>
                      <span className="text-blue-300">
                        &quot;
                      </span>
                      <span className="text-white">
                        ,
                      </span>
                      <br />
                      <span className="text-green-300">
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; description
                      </span>
                      <span className="text-blue-300">
                        :{" "}
                      </span>
                      <span className="text-blue-300">
                        &quot;
                      </span>
                      <span className="text-green-200">
                        ....
                      </span>
                      <span className="text-blue-300">
                        &quot;
                      </span>
                      <span className="text-white">
                        ,
                      </span>
                      <br />
                      <span className="text-blue-500">
                        &nbsp;&nbsp;&nbsp;&nbsp; &#125; {" "}
                      </span>
                      <br />
                      <br />
                      <span className="text-blue-300">
                        export default{" "}
                      </span>
                      <span className="text-purple-400">
                        function{" "}
                      </span>
                      <span className="text-blue-400">
                        Layout()
                      </span>
                      <span className="text-blue-400">
                        &#123; &#125;
                      </span>
                    </code>
                  </div>
                </div>
              </div>

            </div>

            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />

          </div>

        </div>

      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(70%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            transform: `translate(${pos.x * -0.03}px, ${pos.y * -0.03}px)`,
            transition: 'transform 0.1s ease-out',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[48rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[96rem]"
        />
      </div>
    </div>
  )
}

export default AbilitiesSection