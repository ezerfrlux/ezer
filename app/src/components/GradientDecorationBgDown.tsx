import React, { useEffect, useState } from 'react'

const GradientDecorationBgDown = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setPos({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          transform: `translate(${pos.x * -0.03}px, ${pos.y * -0.03}px)`,
          transition: 'transform 0.1s ease-out',
        }}
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
      />
    </div>
  )
}

export default GradientDecorationBgDown