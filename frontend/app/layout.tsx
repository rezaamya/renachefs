import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainHeader from "@/components/header/main-header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ReNa Chefs',
  description: 'A Full-Stack exercise by RezaAmya@gmail.com using Next.js, GraphQL, SocketIO, NestJS, RabbitMQ, Docker, Microservice Architecture (Saga Orchestration)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader></MainHeader>
        {children}
      </body>
    </html>
  )
}
