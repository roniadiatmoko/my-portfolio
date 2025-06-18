import '../styles/globals.css'
import {ReactNode} from 'react'

export const metadata = {
  title: 'Roni Adiatmoko',
  description: 'My Portfolio | Next JS 15 | React 19'
}

export default function RootLayout({children}: {children: ReactNode}){
  return (
    <html lang="id">
      <body className='bg-white text-gray-900'>
        {children}
      </body>
    </html>
  )
}