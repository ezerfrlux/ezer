"use client"
import SplitText from "./textanimation";
interface Props {
  text: string
  className?: string
}
const SplitTextComponent:React.FC<Props>  = ({text ,className}) => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <SplitText
      text={text}
      className={`text-7xl font-semibold text-center ${className}`}
      delay={100}
      duration={0.4}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      onLetterAnimationComplete={handleAnimationComplete}
    />
  )
}



export default SplitTextComponent