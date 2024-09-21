'use client'

import './globals.css'

import Script from 'next/script'

import clsx from 'clsx'
import { Provider } from 'react-redux'

import { store } from '@/redux/store/store'

import { Inter } from 'next/font/google'

import { Toaster } from 'sonner'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Header } from '@/components/ui/header/Header'
import { ThemeProvider } from '@/components/provider/theme-provider'

const font = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script async src="https://us.umami.is/script.js" data-website-id="94cc47c5-56f6-4b2c-b05b-881b076a25de" />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MEK7ECJKW3" />
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Abdul Basit Blog's" />
        <meta property="og:url" content="https://a-bd.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="I write code and make interesting videos." />
        <meta property="og:description" content="Generated by abdul basit interesting blogs,projects,smile and others... 2023" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="www.a-bd.me" />
        <meta property="twitter:url" content="https://a-bd.me/" />
        <meta name="twitter:title" content="I write code and make interesting videos." />
        <meta name="twitter:description" content="Generated by abdul basit interesting blogs,projects,smile and others... 2023" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322" />
        <link rel="canonical" href="https://a-bd.me/" />
      </head>
      <body className={clsx(font.className, 'antialiased bg-white dark:bg-[#111111] text-primary width-full')}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Provider store={store}>
            <Header />
            {children}
            <Toaster />
          </Provider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
