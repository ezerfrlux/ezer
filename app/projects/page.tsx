'use client'
import GradientDecorationBg from "../components/GradientDecorationBg"
import GradientDecorationBgDown from "../components/GradientDecorationBgDown"
import Image from "next/image"
import LightRays from "../components/animations/bg/LightRays"
import Shuffle from "../components/animations/text/Shuffle"

import imageProject1 from "./../img/project1.png"
import imageProject2 from "./../img/project2.png"
import imageProject3 from "./../img/project3.png"

const projectsPortfolio = [
  {
    id: 1,
    title: "Cubos Rubik Nicaragua",
    description:
      "A responsive rubik's sotre built with Next.js and Tailwind CSS, featuring smooth animations and a clean design.",
    videoUrl: "",
    imageUrl: imageProject1,
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://cubos-rubik-nicaragua-store.vercel.app/",
  },
  {
    id: 2,
    title: "Online Courses Template",
    description:
      "An elegant online courses with shopping car functionality, using tailwind and next js.",
    imageUrl: imageProject2,
    videoUrl: "",
    tech: ["React", "Next.js", "Tailwind"],
    link: "https://courses-shopping-cart.netlify.app/",
  },
  {
    id: 3,
    title: "GuitarLA",
    videoUrl: "",
    description:
      "An modern style in this online guitar store using tailwind and next js.",
    imageUrl: imageProject3,
    tech: ["React", "Next.js", "CSS modules"],
    link: "https://guitar-la-nextjs-ecru.vercel.app/",
  },
];

export default function projects() {
  return (
    <div className="relative py-24 sm:py-32">
      <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays top-[-8rem]"
        />
      </div>

      <GradientDecorationBg />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
        <div className="flex flex-col w-full mx-auto max-w-2xl items-center justify-center">
          <Shuffle
            text="Projects"
            shuffleDirection="right"
            className="font-pressStart !text-3xl sm:!text-4xl md:!text-5xl lg:!text-7xl xl:!text-8xl"
            duration={0.5}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
          />


          <p className="mt-2 text-lg/8 text-gray-300" >
            Check my latest personal projects
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projectsPortfolio.map((project) => (
            <article
              key={project.id}
              className="relative flex flex-col overflow-hidden rounded-3xl shadow-lg ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:ring-gray-600 hover:scale-[1.02]"
            >
              {/* Fondo oscuro con opacidad */}
              <div className="absolute inset-0 bg-gray-900/60 rounded-3xl opacity-30" />

              <div className="aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col justify-between grow">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    <a href={project.link} target="_blank">
                      <span className="absolute inset-0" />
                      {project.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm text-gray-400">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
      <GradientDecorationBgDown />
    </div>
  )
}
