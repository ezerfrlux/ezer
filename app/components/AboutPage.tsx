'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import GradientDecorationBg from '../components/GradientDecorationBg'
import GradientDecorationBgDown from '../components/GradientDecorationBgDown'
import profilePicture from '../img/profile.png'

export default function About() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8 mt-20 mb-20">
      <GradientDecorationBg />

      <div className="mx-auto max-w-4xl flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Texto principal */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
              Me
            </span>
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            I’m a passionate{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] font-medium">
              frontend developer
            </span>{' '}
            who loves creating interactive and visually appealing web experiences.
            My main focus is building fast, responsive, and elegant user interfaces using{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
              React
            </span>
            ,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
              TypeScript
            </span>
            , and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
              Tailwind CSS
            </span>
            .
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            I enjoy transforming ideas into functional designs while maintaining clean code and smooth animations.
            Outside of coding, I’m always learning new technologies to stay ahead in the fast-evolving web world.
          </p>

          <div className="mt-10">
            <a
              href="/projects"
              className="text-sm font-semibold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-[#ff80b5] hover:to-[#9089fc] transition-all duration-300"
            >
              View My Projects →
            </a>
          </div>
        </div>

        <div
          className="w-64 h-64 sm:w-80 sm:h-80 relative rounded-full overflow-hidden ring-2 ring-[#ff80b5]/40 shadow-xl transition-transform duration-300"
        >
          <Image
            src={profilePicture}
            alt="Profile"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>

      <GradientDecorationBgDown />
    </div>
  )
}
