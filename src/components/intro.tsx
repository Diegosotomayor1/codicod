'use client'
import React, { useEffect, useState } from 'react'
import Blur from './icons/logo'
import { motion } from 'framer-motion'
import { timeIntroInS } from '@/app/constants/style'
export default function Intro ({ visibleIntro }: { visibleIntro: boolean }) {
  return (
    <section
      className={`${
        visibleIntro ? 'flex' : 'hidden'
      } relative  flex-col items-center justify-center w-full h-screen overflow-hidden`}
      style={{
        maskImage: 'linear-gradient(black 95%, transparent 100%)'
      }}
    >
      <Blur />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className='flex flex-col items-center justify-center text-gray-700'
      >
        <object
          data='/codicod-imagotype-animated.svg'
          type='image/svg+xml'
        ></object>
        <h1 className='text-5xl font-semibold'>codicod</h1>
        <p className='text-lg'>Transformando ideas a código</p>
        <button className='z-10 px-8 py-2 mt-4 font-semibold rounded-full text-[#c62e5d] hover:text-[#3cabaa] transition-colors duration-300 outline-none'>
          Empieza tu nuevo proyecto
        </button>
        <div className='w-[220px] bg-gray-400 rounded-full'>
          <motion.hr
            initial={{ width: 0 }}
            animate={{
              width: '220px',
              transition: { duration: timeIntroInS }
            }}
            className='h-2 bg-gradient-to-l from-primary to-secondary rounded-full'
          />
        </div>
      </motion.div>
      <div className='absolute bottom-10 text-sm z-30 opacity-50'>
        <p>
          Esta es una web de ejemplo hecha por{' '}
          <a href='/' className='text-[#3cabaa]'>
            Diego Sotomayor
          </a>
        </p>
      </div>
    </section>
  )
}
