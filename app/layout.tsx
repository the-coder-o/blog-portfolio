'use client'

import './globals.css'

import Script from 'next/script'

import { cn } from '@/lib/utils'
import { Provider } from 'react-redux'

import { Inter } from 'next/font/google'

import { Toaster } from 'sonner'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Header } from '@/components/ui/header/Header'
import { ThemeProvider } from '@/components/provider/theme-provider'
import { store } from '@/store/store'

const font = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://us.umami.is/script.js" data-website-id={process.env.UMAMI_API_WEB_KEY} />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MEK7ECJKW3" />
      <Script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', process.env.GOOGLE_ANALYTICS_KEY);
          `}
      </Script>
      <body className={cn(font.className, 'bg-[#FCFCFC] dark:bg-[#111111]')}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <Provider store={store}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey={'my-blog'}>
            <Header />
            {children}
            <Toaster />
          </ThemeProvider>
        </Provider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
