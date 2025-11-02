'use client'
import Image from 'next/image'
import GradientDecorationBg from './GradientDecorationBg'
import GradientDecorationBgDown from './GradientDecorationBgDown'

const hobbiesList = [
  {
    name: 'Music',
    description: 'I love listening to and creating music, it keeps me inspired and motivated.',
    img: '/hobbies/music.jpg',
  },
  {
    name: 'Running',
    description: 'Running helps me clear my mind and stay healthy, both mentally and physically.',
    img: '/hobbies/running.jpg',
  },
  {
    name: 'Drawing',
    description: 'Drawing allows me to express creativity outside of coding and relax my mind.',
    img: '/hobbies/drawing.jpg',
  },
  {
    name: 'Gaming',
    description: 'Gaming keeps me sharp and is a fun way to challenge myself with strategy and teamwork.',
    img: '/hobbies/gaming.jpg',
  },
]

const Hobbies = () => {
  return (
    <section className="relative mt-20">
      <GradientDecorationBg />
      <h3 className="text-4xl font-semibold text-center text-white mb-16">
        My{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
          Hobbies
        </span>
      </h3>

      <div className="flex flex-col gap-20 px-6 lg:px-20">
        {hobbiesList.map((hobby, idx) => (
          <div key={idx} className="relative flex flex-col lg:flex-row items-center gap-10">
            {/* Imagen de fondo */}
            <div className="relative w-full lg:w-1/2 h-64 lg:h-96 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
              <Image
                src={hobby.img}
                alt={hobby.name}
                fill
                className="object-cover rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Texto */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h4 className="text-3xl font-semibold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]">
                  {hobby.name}
                </span>
              </h4>
              <p className="text-gray-400 text-lg leading-relaxed">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>

      <GradientDecorationBgDown />
    </section>
  )
}

export default Hobbies
