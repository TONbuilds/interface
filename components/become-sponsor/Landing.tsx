import React from 'react'
import SponsorHero from './SponsorHero'
import Image from 'next/image'
import AboutBanner from './AboutBanner'
import SponsorFeatures from './SponsorFeatures'
import WhyChoose from './WhyChoose'
import SponsorFooter from './SponsorFooter'
import SponsorFAQ from './SponsorFAQ'

const Landing = () => {
    return (
        <div className='flex flex-col gap-8 justify-center items-center my-12 w-full'>
            <div className='flex justify-start w-[93%]'>
                <Image height={50} width={50} src="/Star.svg" alt='star' className='' />
            </div>
            <SponsorHero />
            <AboutBanner />
            <div className='absolute top-[780px] flex justify-start w-[93%]'>
                <Image height={40} width={40} src="/Star.svg" alt='star' className='' />
            </div>
            <SponsorFeatures />
            <div className='absolute top-[1350px] flex justify-end w-[93%]'>
                <Image height={40} width={40} src="/Star.svg" alt='star' className='' />
            </div>
            <div className='flex w-full justify-end'>
                <WhyChoose />
            </div>
            <SponsorFAQ />
            <SponsorFooter />
        </div>
    )
}

export default Landing
