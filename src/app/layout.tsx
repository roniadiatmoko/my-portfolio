import '../styles/globals.css'
import {ReactNode} from 'react'
import Navbar from './components/Navbar'
import Link from 'next/link'

export const metadata = {
  title: 'Roni Adiatmoko',
  description: 'My Portfolio | Next JS 15 | React 19'
}

export default function RootLayout({children}: {children: ReactNode}){
  return (
    <html lang="id" className="dark">
      <body className="transition-colors duration-300 bg-white text-black dark:bg-zinc-900 dark:text-white">
          <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}