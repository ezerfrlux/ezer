
"use client"
import { useEffect, useState } from 'react'
import AbilitiesSection from '../src/components/AbilitiesSection'
import AboutPage from '../src/components/AboutPage'
import GrayLine from '../src/components/GrayLine'
import Hobbies from '../src/components/Hobbies'
import Skills from '../src/components/Skills'
import Plasma from '../src/components/animations/bg/Plasma'
export default function About() {

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mobilecheck = () => setIsMobile(window.innerWidth < 1000);

    // Ejecutar al montar
    mobilecheck();

    // Agregar listener
    window.addEventListener("resize", mobilecheck);

    // Limpiar listener al desmontar
    return () => window.removeEventListener("resize", mobilecheck);
  }, []);

  return (
    <div>
      {isMobile ? null : <div
        style={{
          width: '100%',
          height: '126vh', // o lo que necesites
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'hidden',
          opacity: 0.2,
        }}
      >
        <Plasma
          color="#ffffff"
          speed={0.9}
          direction="pingpong"
          scale={1}
          opacity={1}
        />
      </div>}
      <AboutPage />
      <GrayLine />
      <AbilitiesSection />
      <GrayLine />
      <Skills />
      <GrayLine />
      <Hobbies />
    </div>
  )
}
