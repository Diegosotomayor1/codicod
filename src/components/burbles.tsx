import { motion } from 'framer-motion'
import { Crosshair } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import GlobeSVG from './icons/globe'
import confetti from 'canvas-confetti'
export default function Burbles ({
  width,
  height,
  setCount
}: {
  width: number
  height: number
  setCount: Dispatch<SetStateAction<number>>
}) {
  const colors = ['#3cabaa', '#c62e5d', '#dddd00', '#333']
  const circles = [
    { x: 0, y: 100, delay: 0.1, color: colors[0] },
    { x: 10, y: 200, delay: 0.5, color: colors[1] },
    { x: 20, y: 20, delay: 1, color: colors[2] },
    { x: 50, y: 50, delay: 2, color: colors[3] },
    { x: 80, y: 120, delay: 3.5, color: colors[0] },
    { x: 75, y: 150, delay: 4.5, color: colors[1] },
    { x: 60, y: 80, delay: 5.5, color: colors[2] },
    { x: 40, y: 60, delay: 6.5, color: colors[3] }
  ]

  const [showCircles, setShowCircles] = useState(circles)
  const [scale, setScale] = useState(1.5)
  const handleClick = (
    clientX: number,
    clientY: number,
    x: number,
    y: number,
    delay: number
  ) => {
    if (showCircles.length === 1) {
      setShowCircles(circles)
    }
    setCount(prev => prev + 1)
    setShowCircles(prevCircles =>
      prevCircles.filter(
        circle => circle.x !== x || circle.y !== y || circle.delay !== delay
      )
    )
    confetti({
      shapes: ['circle'],
      origin: {
        x: clientX / window.innerWidth,
        // since they fall down, start a bit higher than random
        y: clientY / window.innerHeight
      }
    })
  }
  const handleExitComplete = (x: number, y: number, delay: number) => {
    setShowCircles(prevCircles =>
      prevCircles.filter(
        circle => circle.x !== x || circle.y !== y || circle.delay !== delay
      )
    )
  }

  return (
    <>
      {showCircles.map(({ x, y, delay, color }) => (
        <motion.div
          key={`${x}_${y}_${delay}`}
          className='flex items-center justify-center absolute w-20 h-20 cursor-crosshair'
          initial={{
            x: `${(x * width) / 100}px`,
            y: `${(y * height) / 100}px`,
            scale
          }}
          animate={{
            y: [height + 200, y - 500],
            transition: {
              duration: 2.5,
              delay,
              repeat: Infinity,
              ease: 'linear'
            }
          }}
          exit={{
            scale: [1, 0], // Reduce la escala del 100% al 0%
            opacity: [1, 0], // Cambia la opacidad de 100% a 0%
            transition: { duration: 0.5 }
          }}
          onClick={({ clientX, clientY }) =>
            handleClick(clientX, clientY, x, y, delay)
          }
          onAnimationComplete={() => handleExitComplete(x, y, delay)}
        >
          <GlobeSVG fill={color} className='w-20  z-10' />
          <Crosshair className='absolute w-10 h-10 text-white z-20 mix-blend-overlay -translate-y-7 animate-[pulse_2s_ease-in-out_infinite]' />
        </motion.div>
      ))}
    </>
  )
}
