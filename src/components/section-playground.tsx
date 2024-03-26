import { motion } from 'framer-motion'
import { Lightbulb, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import Burbles from './burbles'
import Blur from './icons/logo'
import Link from 'next/link'
export default function SectionPlayground () {
  const [count, setCount] = useState(0)
  return (
    <section
      className='relative flex flex-col items-center justify-center w-full max-w-[1140px] h-[900px] overflow-hidden mt-20 md:mt-0'
      style={{
        maskImage:
          'linear-gradient(transparent 0%, black 5%, black 95%, transparent 100%)'
      }}
    >
      <div className='absolute bottom-10 md:left-10 flex flex-col items-center justify-center gap-2 lg:w-[1140px]'>
        <p className='text-xl font-semibold '>
          🤟 Una probada de lo que puedo hacer
        </p>
        <p>Revienta los globos</p>
        <motion.p
          className='p-2 rounded-md px-4 font-medium'
          animate={{
            color: count % 2 === 0 ? 'rgb(198,46,93)' : 'rgb(60,171,170)',
            scale: count % 2 === 0 ? 0.9 : 1,
            background: count % 2 === 0 ? 'rgb(60,171,170)' : 'rgb(198,46,93)'
          }}
        >
          Puntuación: {count}
        </motion.p>
      </div>
      <motion.div
        draggable
        drag
        dragConstraints={{
          top: -350,
          right: 400,
          bottom: 350,
          left: -400
        }}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
        whileTap={{ cursor: 'grabbing' }}
        whileInView={{
          opacity: [0, 1, 1],
          color: ['#333', 'rgb(198,46,93)'],
          scale: [1, 1, 0.6],
          transition: { duration: 3 }
        }}
        className='flex flex-col cursor-move items-center justify-center text-center py-4 px-5 bg-white md:p-10 rounded-3xl shadow-xl gap-4 absolute z-10 p-5'
      >
        <div className='flex w-fit md:w-full items-center justify-center '>
          <motion.div
            animate={{
              color: ['rgb(198,46,93)', '#dddd00'],
              scale: [1.5, 1],
              rotate: ['0deg', '45deg', '0deg'],
              transition: {
                duration: 0.75,
                delay: 0.5
              }
            }}
            whileTap={{
              scale: 1.5,
              rotate: '45deg',
              transition: {
                duration: 0.75
              }
            }}
          >
            <Lightbulb className='w-10 md:w-16 h-10 md:h-16 mr-2 cursor-pointer' />
          </motion.div>
          <span className='w-fit text-md md:text-4xl font-bold'>
            Hagamos tus ideas realidad!
          </span>
        </div>
        <p className='text-xs md:text-sm text-black text-center max-w-sm '>
          Utilizo las ultimas tecnologías para mejorar el performance y entregar
          proyectos muy rápido con herramientas inteligentes y que ayudan al
          desarrollo.
        </p>
        <Link
          href='#contact'
          className='flex text-sm md:text-base gap-2 py-2 px-5 border-2 border-secondary rounded-xl cursor-pointer hover:bg-secondary hover:text-white transition-all animate-[pulse_2.5s_ease-in-out_infinite]'
        >
          <MessageCircle className='w-5 h-5' />
          Contáctame
        </Link>
      </motion.div>
      <div className='absolute z-0 w-full h-[600px] md:w-[600px]'>
        <Burbles width={900} height={900} setCount={setCount} />
      </div>
    </section>
  )
}
