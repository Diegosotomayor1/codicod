import { Linkedin } from 'lucide-react'
import { Globe } from 'lucide-react'
export const itemsExperiences = () => [
  {
    company: 'Pcentrix',
    jobPosition: 'Founder & CTO',
    description:
      'Fui lider de un proyecto ERP y de un chatbot para la automatizacion en talleres de reparación.',
    dateRange: '12/2021- Ahora',
    image: '/pcentrix_logo.svg',
    demoLinks: [
      {
        icon: <Globe className='w-4 h-4' />,
        url: 'https://pcentrix.pe',
        name: 'Pcentrix web'
      },
      {
        icon: <Linkedin className='w-4 h-4' />,
        url: 'https://www.linkedin.com/company/pcentrix/',
        name: 'Pcentrix'
      }
    ],
    technologies: [
      'Full Stack T3 Stack',
      'Chatbot AI WSP',
      'Infraestructura Backblaze'
    ]
  },
  {
    company: 'Chaman Agency',
    jobPosition: 'Freelancer Wordpress Developer',
    description:
      'Hice varios proyectos para diferentes empresas que me ayudaron a crecer en el mundo del seguimiento de software.',
    dateRange: '2020 - 2021',
    image: '/chaman_logo.svg',
    demoLinks: [
      {
        icon: <Globe className='w-4 h-4' />,
        url: 'https://chaman.pe/',
        name: 'Chaman web'
      },
      {
        icon: <Linkedin className='w-4 h-4' />,
        url: 'https://www.linkedin.com/company/cham%C3%A1n-agencia/',
        name: 'Chaman Agency'
      }
    ],
    technologies: ['Wordpress', 'PHP', 'Integración de proveedor en e-commerce']
  }
]

export const projects = [
  {
    name: 'Proyecto Saas para técnicos',
    imageInitial: '/pcentrix_logo_portfolio.jpg',
    imageHover: '/overlay_saas.png',
    description: 'Sitio web de la empresa Pcentrix'
  },
  {
    name: 'Proyecto de chatbot',
    imageInitial: '/nova_portfolio.jpg',
    imageHover: '/overlay_nova.png',
    description: 'Chatbot de la empresa Pcentrix'
  },
  {
    name: 'Terapia IA',
    imageInitial: '/terapia-logo.jpg',
    imageHover: '/terapia.png',
    description: 'Terapeuta Bot'
  }
]
