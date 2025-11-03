'use client'
import Image from 'next/image'
import GradientDecorationBg from './GradientDecorationBg'
import GradientDecorationBgDown from './GradientDecorationBgDown'
import hobbyImage1 from "../img/hobby1.jpeg"
import hobbyImage2 from "../img/hobby2.jpeg"
import hobbyImage3 from "../img/hobby3.jpeg"
import hobbyImage4 from "../img/hobby4.jpeg"
import hobbyImage5 from "../img/hobby5.jpeg"

const hobbiesList = [
  {
    name: 'Play the Guitar',
    description:"I like to express my feelings through the guitar by playing songs that I identify with. Music allows me to communicate emotions that are sometimes hard to put into words, and through the guitar, I can convey moods, stories, and personal experiences. Each song I play becomes a reflection of my thoughts and feelings, helping me relax, focus, and even connect with others who resonate with the same melodies. Playing the guitar is not only a form of personal expression but also a way to continuously challenge myself creatively and technically.",
    img: hobbyImage1,
  },
  {
    name: "Solve Rubik's cubes",
    description: "Solving Rubik's Cubes is one of the activities I excel at. I have achieved some of the best averages in the country, which reflects my focus, patience, and problem-solving skills. Beyond being a competitive hobby, it also serves as a way to relax and de-stress, allowing me to challenge my mind while maintaining a sense of calm and satisfaction. Each puzzle I solve pushes me to improve my strategies and think creatively under pressure.",
    img: hobbyImage2,
  },

  {
    name: 'Experiment with AI',
    description: "I enjoy experimenting with AI, especially by creating images using artificial intelligence. I love exploring the endless possibilities that AI offers and learning how to craft precise prompts to achieve the best results. This hobby allows me to combine creativity and technical skill, pushing me to think critically about how to communicate ideas effectively to the AI. It's exciting to see how a few words can transform into unique and visually striking images, and I constantly strive to refine my approach to get the most out of every prompt.",
    img: hobbyImage3,
  },
  {
    name: 'Play Chess',
    description: "I really enjoy playing chess, a passion I developed from a very young age with guidance from my dad. Over the years, I honed my skills through practice and strategy, which eventually led me to join my school’s chess team. Competing at the national level multiple times taught me valuable lessons in focus, patience, and critical thinking. On one occasion, I proudly achieved 8th place in the national tournament, an experience that motivated me to continually improve my game and embrace challenges both on and off the board. Chess has not only sharpened my analytical skills but also strengthened my perseverance and ability to think several steps ahead.",
    img: hobbyImage4,
  },
  {
    name: 'Read books',
    description: "I really enjoy reading books about personal development, as they provide valuable insights into improving both my mindset and daily habits. Atomic Habits is one of my favorite reads, and it profoundly influenced the way I approach life. The book taught me how small, consistent changes can lead to significant improvements over time, helping me organize my goals, routines, and priorities more effectively. Applying these principles has allowed me to develop discipline, increase my productivity, and maintain a positive outlook, making personal growth an ongoing and rewarding journey.",
    img: hobbyImage5,
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
