import '../styles/globals.css'
import {ReactNode} from 'react'
import ThemeToggle from './components/ThemeToggle'
import Navbar from './components/Navbar'
import Link from 'next/link'

export const metadata = {
  title: 'Roni Adiatmoko',
  description: 'My Portfolio | Next JS 15 | React 19'
}

export default function RootLayout({children}: {children: ReactNode}){
  return (
    <html lang="id" className="dark">
      <body className='transition-colors duration-300 bg-white text-black dark:bg-zinc-900 dark:text-white'>
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 z-50 bg-transparent backdrop-blur-md">
          <h1 className="text-lg font-bold"><Link href="/">Portofolio</Link></h1>
          <Navbar />
          <ThemeToggle />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}