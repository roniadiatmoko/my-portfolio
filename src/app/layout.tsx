import '../styles/globals.css'
import {ReactNode} from 'react'
import ThemeToggle from './components/ThemeToggle'
import Link from 'next/link'

export const metadata = {
  title: 'Roni Adiatmoko',
  description: 'My Portfolio | Next JS 15 | React 19'
}

export default function RootLayout({children}: {children: ReactNode}){
  return (
    <html lang="id">
      <body className='transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white'>
        <header className="flex justify-between items-center p-4">
          <h1 className="text-lg font-bold"><Link href="/">Portofolio</Link></h1>
          <ThemeToggle />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}