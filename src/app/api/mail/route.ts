import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
import { messageHTML } from './mailMessage'

export async function POST (req: Request) {
  try {
    const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'diegodev1217@outlook.com',
        pass: process.env.MAIL_PASSWORD
      }
    })

    const mailOptions = {
      from: 'diegodev1217@outlook.com',
      to: 'diesor53@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: messageHTML(name, email, message)
    }

    await transporter.sendMail(mailOptions)
    mailOptions.to = email
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Error sending email' },
      { status: 500 }
    )
  }
}
