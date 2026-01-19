"use client"
import Hero from "./src/components/Hero"
import Skills from "./src/components/Skills"
import AbilitiesSection from "./src/components/AbilitiesSection"
import GrayLine from "./src/components/GrayLine"
import BallpitComoponent from './src/components/animations/balls/BallpitComoponent';
import { useState, useEffect } from "react";
import { log } from "console";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkmobile = () => setIsMobile(window.innerWidth < 768)
    checkmobile()
    window.addEventListener('rezise',checkmobile)
    return () => window.addEventListener("resize", checkmobile)
  }, [])
  
  return (
    <div className="bg-gray-1000">
      {
        isMobile ?  <></> : <BallpitComoponent />
      }
      <Hero />
      <GrayLine />
      <Skills />
      <GrayLine />
      <AbilitiesSection />
    </div>
  )
}

