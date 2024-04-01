import axios from 'axios'
import {
  Facebook,
  GithubIcon,
  Linkedin,
  Mail,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { headers } from 'next/headers'

export default function Footer () {
  const handleSubmit = async (formData: FormData) => {
    try {
      const name = formData.get('name') as string
      const email = formData.get('email') as string
      const message = formData.get('message') as string
      console.log(name, email, message)
      const response = await axios.post('/api/mail', {
        name,
        email,
        message
      })
      console.log(response.data.message)
      alert('Mensaje enviado correctamente')
    } catch (error) {
      console.error(error)
      alert('Error al enviar el mensaje')
    }
  }

  return (
    <div className='w-full py-6 my-32' id='contact'>
      <div className='container grid max-w-[2xl] md:grid-cols-2 gap-8 px-4'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold'>Contáctame</h1>
          <p>
            Ponte en contacto conmigo para agendar una reunion, consulta o
            cotización.
          </p>
          <div className='mt-10'>
            <p className=' flex gap-2 items-center'>
              <MessageCircle /> +51 966580300
            </p>
          </div>
          <p className='text-secondary font-medium'>
            Tambien me puedes encontrar en mis redes
          </p>
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
        <form action={handleSubmit}>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='name'>Nombre</Label>
              <Input id='name' name='name' placeholder='Jhon Doe' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                placeholder='example@example.com'
                type='email'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='message'>Mensaje</Label>
              <Textarea
                className='min-h-[100px]'
                id='message'
                name='message'
                placeholder='Estoy interesado en sus servicios como programador ...'
              />
            </div>
            <Button className='text-white'>
              <Mail className='mr-2' /> Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
