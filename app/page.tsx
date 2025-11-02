
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import AbilitiesSection from "./components/AbilitiesSection"
import GrayLine from "./components/GrayLine"
import Footer from "./components/Footer"


export default function Home() {

  return (
    <div className="bg-gray-1000">
      <Hero />
      <GrayLine />
      <Skills />
      <GrayLine />
      <AbilitiesSection />
    </div>
  )
}

