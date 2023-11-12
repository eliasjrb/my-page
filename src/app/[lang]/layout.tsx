import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { i18n } from '@/config/i18n.config'

const inter = Roboto({weight:"500" , subsets: ['vietnamese'] })

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({lang}));
  return languages;
}

export const metadata: Metadata = {
  title: 'Elias Braga',
  description: 'Desenvolvedor web full-stack',
  keywords: ['Elias Braga', 'C#', 'javacript' , 'desenvolvedor', 'front-end', 'front end', 'full-stack', 'full stack', 'progamador'],
  openGraph: {
    // images: [`${process.env.URL}/img/eliasbraga.jpg`]
    images: [`https://eliasbraga.com/img/eliasbraga.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
}

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { lang: string} }) {
  return (
    <html lang={params.lang} id="tema" className='dark scroll-smooth'>
      <body className={`${inter.className} bg-gray-100 text-gray-700 dark:bg-sky-950 dark:text-gray-200`}>
        {children}
      </body>
    </html>
  )
}
