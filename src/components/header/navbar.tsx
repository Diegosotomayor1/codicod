import { motion } from 'framer-motion'
import { BookIcon, HomeIcon, Mail, User2 } from 'lucide-react'
import Link from 'next/link'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
export default function Navbar () {
  const headerRef = useRef<HTMLDivElement>(null)
  const [widthCenterNav, setWidthCenterNav] = useState<number>(0)
  useEffect(() => {
    function handleResize () {
      const navbarWidth = headerRef.current?.clientWidth ?? 0
      setWidthCenterNav(window.innerWidth / 2 - navbarWidth / 2)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <motion.div
      ref={headerRef as unknown as MutableRefObject<HTMLDivElement>}
      initial={{
        translateY: '100px'
      }}
      animate={{
        translateY: 0,
        transition: {
          duration: 0.5,
          delay: 0.5
        }
      }}
      className={`fixed z-50 bottom-5`}
      style={{ left: `${widthCenterNav}px` }}
    >
      <section className='relative flex flex-row gap-6 items-center justify-center p-5 px-10 bg-[rgb(255,255,255,0.5)] backdrop-blur-md shadow-[0px_0px_40px_rgb(60,171,170,0.2)] rounded-3xl [&>a]:p-1'>
        <object
          data='/codicod-imagotype-animated.svg'
          type='image/svg+xml'
          className='w-16 -m-5'
        />
        <div className='w-1 h-8 bg-gradient-to-t rounded-full from-primary to-secondary' />
        <Link
          href=''
          className='flex flex-col items-center justify-center text-transparent bg-clip-text text-gradient bg-gradient-to-l from-primary to-secondary hover:scale-90 transition-transform duration-300'
        >
          <HomeIcon className='text-white bg-gradient-to-l from-primary to-secondary p-1 rounded-md hover:rotate-12 transition-all' />
          <p className='text-xs -mb-1'>Home</p>
        </Link>
        <Link
          href='#projects'
          className='flex flex-col items-center justify-center text-transparent bg-clip-text text-gradient bg-gradient-to-l from-primary to-secondary hover:scale-90 transition-transform duration-300'
        >
          <BookIcon className='hover:rotate-12 transition-all text-white bg-gradient-to-l from-primary to-secondary p-1 rounded-md' />
          <p className='text-xs -mb-1'>Works</p>
        </Link>
        <Link
          href='#about'
          className='flex flex-col items-center justify-center text-transparent bg-clip-text text-gradient bg-gradient-to-l from-primary to-secondary hover:scale-90 transition-transform duration-300'
        >
          <User2 className='text-white bg-gradient-to-l from-primary to-secondary p-1 rounded-md hover:rotate-12 transition-all' />
          <p className='text-xs -mb-1'>Exp +</p>
        </Link>
        <Link
          href='#contact'
          className='flex flex-col items-center justify-center text-transparent bg-clip-text text-gradient bg-gradient-to-l from-primary to-secondary hover:scale-90 transition-transform duration-300'
        >
          <Mail className='text-white bg-gradient-to-l from-primary to-secondary p-1 rounded-md hover:rotate-12 transition-all' />
          <p className='text-xs -mb-1'>Contact</p>
        </Link>
      </section>
    </motion.div>
  )
}
