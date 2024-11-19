import React from 'react'
import SponsorHero from './SponsorHero'
import Image from 'next/image'
import AboutBanner from './AboutBanner'
import SponsorFeatures from './SponsorFeatures'

const Landing = () => {
    return (
        <div className='flex flex-col gap-6 justify-center items-center my-12 w-full'>
            <div className='flex justify-start w-[93%]'>
                <Image height={50} width={50} src="/Star.svg" alt='star' className='' />
            </div>
            <SponsorHero />
            <AboutBanner />
            <SponsorFeatures />
        </div>
    )
}

export default Landing
