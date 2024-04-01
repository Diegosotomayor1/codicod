'use client'
import ButtonDegrade from '@/components/button-degrade'
import Blur from '@/components/icons/logo'
import Intro from '@/components/intro'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Facebook,
  GithubIcon,
  Globe,
  Lightbulb,
  Linkedin,
  MessageCircle,
  WebhookIcon
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { timeIntroInS } from './constants/style'
import Navbar from '@/components/header/navbar'
import ItemExperience from '@/components/item-experience'
import { itemsExperiences } from './constants/info'
import Burbles from '@/components/burbles'
import Proyects from '@/components/proyects'
import SectionPlayground from '@/components/section-playground'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home () {
  const [visibleIntro, setVisibleIntro] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setVisibleIntro(false)
    }, timeIntroInS * 1000)
  }, [])
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-between '>
        <Intro visibleIntro={visibleIntro} />
        {!visibleIntro && (
          <>
            <Navbar />
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
              className='relative min-h-screen md:h-screen p-5 xl:p-0 w-full overflow-hidden'
              style={{
                maskImage:
                  'linear-gradient(transparent 0%, black 5%, black 95%, transparent 100%)'
              }}
            >
              <Blur className='md:!left-[80vw] !-z-20' />
              <div className='grid md:grid-cols-2 gap-8 items-center max-w-[1140px] mx-auto h-full'>
                <article
                  className='flex flex-col justify-center md:justify-start md:items-start items-center'
                  id='home'
                >
                  <div className='flex flex-row gap-8 items-center justify-center md:justify-start'>
                    <object
                      data='/codicod-imagotype-animated.svg'
                      type='image/svg+xml'
                      className='w-32 aspect-[1/1] -mx-10'
                    />
                    <p className='font-semibold'> | De idea a software</p>
                  </div>
                  <h1 className='text-3xl md:text-5xl font-semibold'>
                    Diego Sotomayor
                  </h1>
                  <p className='mt-2 opacity-70 lg:w-[500px] text-center md:text-start'>
                    Soy un desarrollador y emprendedor que busca transformar
                    nuevas ideas a productos digitales.
                  </p>
                  <div className='flex gap-2 text-secondary font-medium text-sm mt-2 '>
                    <Link
                      href='#about'
                      className='flex gap-1 items-center hover:text-primary'
                    >
                      Experiencia{' '}
                      <motion.div
                        animate={{
                          rotate: ['0deg', '-45deg', '0deg'],
                          transition: {
                            delay: 0.3,
                            duration: 0.75,
                            repeat: Infinity,
                            repeatDelay: 0.5
                          }
                        }}
                      >
                        <ArrowUpRight className='w-4' />
                      </motion.div>
                    </Link>
                    <Link
                      href='#about'
                      className='flex gap-1 items-center hover:text-primary'
                    >
                      Propósito{' '}
                      <motion.div
                        animate={{
                          rotate: ['0deg', '-45deg', '0deg'],
                          transition: {
                            delay: 0.3,
                            duration: 0.75,
                            repeat: Infinity,
                            repeatDelay: 0.5
                          }
                        }}
                      >
                        <ArrowUpRight className='w-4' />
                      </motion.div>
                    </Link>
                    <Link
                      href='#about'
                      className='flex gap-1 items-center hover:text-primary'
                    >
                      Skills{' '}
                      <motion.div
                        animate={{
                          rotate: ['0deg', '-45deg', '0deg'],
                          transition: {
                            delay: 0.3,
                            duration: 0.75,
                            repeat: Infinity,
                            repeatDelay: 0.5
                          }
                        }}
                      >
                        <ArrowUpRight className='w-4' />
                      </motion.div>
                    </Link>
                  </div>
                  <div className='mt-6 flex flex-col md:flex-row gap-4 items-center'>
                    <Link href='#contact'>
                      <ButtonDegrade text='Contáctame' icon='↗️' />
                    </Link>
                    <div className=' flex flex-row gap-2'>
                      <Link
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.linkedin.com/in/diego-sotomayor-rios-473ba819a/'
                      >
                        <Linkedin className='hover:text-primary cursor-pointer' />
                      </Link>
                      <Link
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/Diegosotomayor1'
                      >
                        <GithubIcon className='hover:text-primary cursor-pointer' />
                      </Link>
                      <Link
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.facebook.com/Diego123479'
                      >
                        <Facebook className='hover:text-primary cursor-pointer' />
                      </Link>
                    </div>
                  </div>
                </article>
                <article className='relative flex flex-col items-center justify-center overflow-hidden h-full'>
                  <motion.div
                    className='relative'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
                  >
                    <Image
                      src='/diego.jpg'
                      className='rounded-lg object-cover h-[330px] md:h-[450px] w-[300px] md:w-[400px] md:my-20'
                      style={{
                        maskImage: 'radial-gradient(black 62%, transparent 72%)'
                      }}
                      priority
                      alt='Diego'
                      width={400}
                      height={500}
                    />
                    <div className='absolute bottom-14 right-0 flex flex-col items-end w-fit'>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{
                          scale: 1,
                          transition: { duration: 0.5, delay: 0.5 }
                        }}
                      >
                        <ButtonDegrade
                          text='CTO de Pcentrix'
                          icon='| Hola 🖐️!'
                          className='w-fit'
                        />
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0.7, opacity: 0 }}
                        whileInView={{
                          scale: 1,
                          opacity: 1,
                          transition: { duration: 0.2, delay: 1 }
                        }}
                      >
                        <ButtonDegrade
                          text='Desarrollador Full Stack '
                          className='w-fit text-sm !bg-black text-white'
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </article>
              </div>
            </motion.section>
            <section
              className='relative min-h-screen flex items-center justify-center overflow-hidden w-full'
              style={{
                maskImage:
                  'linear-gradient(transparent 0%, black 5%, black 95%, transparent 100%)'
              }}
              id='about'
            >
              <Blur className='!-left-[60vh] ' />
              <div className='grid md:grid-cols-2 gap-8 max-w-[1140px] mx-auto p-5 xl:p-0 mt-10 md:mt-0 pb-10 md:pb-0'>
                <motion.article
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h2 className='text-3xl font-semibold text-secondary'>
                    Sobre mí
                  </h2>
                  <hr className='w-[100px] mt-2 mb-5 h-1 bg-primary' />
                  <ul className='flex flex-col gap-4 md:text-balance mt-2 text-sm text-gray-800 leading-6'>
                    <li>
                      Soy un desarrollador apasionado por mejorar las
                      experiencias de usuario, innovador de corazón y
                      autodidacta.
                    </li>

                    <li>
                      Comencé con WordPress, enfocándome en SEO y usabilidad.
                      Luego, descubrí JavaScript y lo utilicé para nuevas
                      funcionalidades, como un CRM. Posteriormente, me aventuré
                      con Node.js y Vue.js.
                    </li>

                    <li>
                      En 2021, fundé una empresa de computadoras convertida en
                      taller técnico. Mejoré la experiencia del cliente con
                      cotizaciones y diagnósticos automáticos, e implementé un
                      seguimiento en tiempo real.
                    </li>

                    <li>
                      Participamos en un concurso financiado por Proinnovate
                      para tercerizar el servicio técnico y automatizar el
                      recojo, entrega y reparación pero tuvimos que pivotear a
                      un software para técnicos.
                    </li>

                    <li>
                      Actualmente, busco proyectos con gran potencial de
                      crecimiento en el cual pueda aportar a construir un gran
                      producto digital.
                    </li>
                  </ul>
                </motion.article>
                <article className='flex flex-col relative'>
                  <motion.h3
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5 }
                    }}
                    initial={{ opacity: 0, x: 200 }}
                    className='font-semibold flex items-end justify-end bg-secondary text-sm p-2 px-5 text-white rounded-2xl  '
                  >
                    Experiencia
                  </motion.h3>
                  <div className='grid gap-12 mt-10'>
                    {itemsExperiences().map(item => (
                      <ItemExperience key={item.company} {...item} />
                    ))}
                  </div>
                </article>
              </div>
            </section>
            <div
              className='w-full overflow-hidden relative'
              style={{
                maskImage:
                  'linear-gradient(transparent 0%, black 5%, black 95%, transparent 100%)'
              }}
            >
              <Blur className='!-z-50 opacity-10' />
              <section
                className='relative z-20 flex flex-col items-start justify-center p-5 md:p-0 md:w-[1140px] min-h-screen mt-32 md:mt-0 mx-auto '
                id='projects'
              >
                <div className='mb-5'>
                  <h2 className='text-3xl font-semibold text-secondary'>
                    Mis últimos proyectos
                  </h2>
                  <hr className='w-[100px] mt-2 mb-5 h-1 bg-primary' />
                  <p className='text-gray-800 lg:w-[800px] text-sm'>
                    Recientemente, he trabajado en proyectos comerciales dentro
                    de una startup, donde he sido testigo de procesos dinámicos
                    de cambio y evolución. Estas experiencias me han permitido
                    contribuir activamente en la creación de soluciones
                    innovadoras y escalables.
                  </p>
                </div>
                <Proyects />
                <Link
                  href='https://github.com/Diegosotomayor1'
                  className='mt-10 mx-auto'
                >
                  <Button className='bg-primary'>
                    <GithubIcon className='mr-2' />
                    Ver todos mis proyectos
                  </Button>
                </Link>
              </section>
            </div>
            <SectionPlayground />
            <Footer />
          </>
        )}
      </main>
    </>
  )
}
