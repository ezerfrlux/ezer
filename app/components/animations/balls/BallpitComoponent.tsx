import React from 'react'

import Ballpit from "./Ballpit"

const BallpitComoponent = () => {
  return (
    <div style={{ position: 'absolute', overflow: 'hidden', minHeight: '1000px', maxHeight: '500px', width: '100%', opacity:"50%" }}>
      <Ballpit
        count={100}
        friction={0.96}
        gravity={0.001}
        wallBounce={0.95}
        ambientColor={16777215}
        followCursor={true}
        colors={ [0x1e40af, 0x3b82f6, 0x93c5fd]}
        ambientIntensity={2}
        lightIntensity={200}
        minSize={0.5}
        maxSize={1}
        size0={1}
        
      />

    </div>
  )
}

export default BallpitComoponent
