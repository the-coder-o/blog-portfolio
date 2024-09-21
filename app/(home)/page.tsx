import React from 'react'

import { Metadata } from 'next'

import Cards from '@/app/(home)/components/bento/card'

import PinnedProjects from './pinned-projects'
import HomeMain from '@/app/(home)/components/home-main'
import HomeLatestPosts from '@/app/(home)/components/home-latest-posts'

export const metadata: Metadata = {
  title: 'Home | Abdul Basit',
  description: 'Generated by abdul basit interesting blogs,projects,smile and others... 2023',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/public/logo.png?v=4'],
    shortcut: ['/public/logo.png'],
  },
  alternates: {
    canonical: 'http://www.a-bd.me/',
  },
}

export default function Home() {
  return (
    <main className="container pb-[180px]">
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W7FF9K85" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      <div className="pt-[5rem] max-md:pt-[8rem] flex flex-col gap-10">
        <div className={'flex flex-col gap-8'}>
          <div>
            <HomeMain />
          </div>
        </div>
        <Cards />
      </div>
      <PinnedProjects />
      <HomeLatestPosts />
    </main>
  )
}
