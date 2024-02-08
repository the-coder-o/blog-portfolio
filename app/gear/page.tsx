import { Metadata } from 'next'

import GearMain from '@/app/gear/components/gear-main'
import GeneralGearsComponent from '@/app/gear/components/general-gears-component'

export const metadata: Metadata = {
  title: 'Gear | Abdul Basit',
  description: 'My toolbox. This is gear I actually own and recommend.',
}

const GearPage = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        {/*//Facebook Meta Tags */}
        <meta property="og:url" content="https://a-bd.vercel.app/gears" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My toolbox and i recommend you." />
        <meta property="og:description" content="My toolbox. This is gear I actually own and recommend." />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322"
        />
        {/*// Twitter Meta Tags*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="a-bd.vercel.app" />
        <meta property="twitter:url" content="https://a-bd.vercel.app/gears" />
        <meta name="twitter:title" content="My toolbox and i recommend you." />
        <meta name="twitter:description" content="My toolbox. This is gear I actually own and recommend." />
        <meta name="twitter:image" content="https://a-bd.vercel.appLink preview image URL" />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/documents/0a0926f1-2adc-4cc9-b2ce-82458eea1368.jpg?token=Sth5htvy1OqzIhZfzP5iJ6pPzhbTJEAIMpsqvP5Xj0g&height=640&width=640&expires=33243406322"
        />
      </head>
      <div className={'container pb-28'}>
        <div className={'flex flex-col gap-16 md:gap-24'}>
          <GearMain />
          <GeneralGearsComponent />
        </div>
      </div>
    </>
  )
}

export default GearPage
