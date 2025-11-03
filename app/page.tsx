import Hero from "./components/Hero"
import Skills from "./components/Skills"
import AbilitiesSection from "./components/AbilitiesSection"
import GrayLine from "./components/GrayLine"
import BallpitComoponent from './components/animations/balls/BallpitComoponent';

export default function Home() {

  return (
    <div className="bg-gray-1000">
      <BallpitComoponent />
      <Hero />
      <GrayLine />
      <Skills />
      <GrayLine />
      <AbilitiesSection />
    </div>
  )
}

