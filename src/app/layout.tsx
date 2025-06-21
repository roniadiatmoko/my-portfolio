import '../styles/globals.css'
import { ReactNode } from 'react'
import Navbar from './components/Navbar'
import Link from 'next/link'

export const metadata = {
  title: 'Roni Adiatmoko',
  description: 'My Portfolio | Next JS 15 | React 19'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className="dark">
      <body className="transition-colors duration-300 bg-white text-black dark:bg-zinc-900 dark:text-white">
        {/* Background grid untuk Light Mode */}
        <div
          className="absolute inset-0 z-0 opacity-10 dark:hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='39' height='39' fill='none' stroke='%237C3AED' stroke-dasharray='4 4'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Background grid untuk Dark Mode */}
        <div
          className="absolute inset-0 z-0 opacity-10 hidden dark:block"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='39' height='39' fill='none' stroke='%23C084FC' stroke-dasharray='4 4'/%3E%3C/svg%3E")`,
          }}
        />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}