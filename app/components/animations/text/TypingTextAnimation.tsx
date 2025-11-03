import React from 'react'
import TextType from './typingtext';

interface Props {
  text: string
}

const TypingTextAnimation:React.FC<Props> = ({text}) => {
  return (

    <TextType
      text={text}
      loop={true}
      typingSpeed={100}
      pauseDuration={1500}
      cursorCharacter={"_"}
      showCursor={true}
    />
  )
}

export default TypingTextAnimation