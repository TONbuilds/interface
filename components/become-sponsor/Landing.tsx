import React from 'react'
import SponsorHero from './SponsorHero'
import Image from 'next/image'
import AboutBanner from './AboutBanner'
import SponsorFeatures from './SponsorFeatures'
import WhyChoose from './WhyChoose'
import SponsorFooter from './SponsorFooter'
import SponsorFAQ from './SponsorFAQ'
import GetStartedCard from './GetStartedCard'
import CustomListing from './CustomListing'
import SponsorTestimonials from './SponsorTestimonials'

const Landing = () => {
    return (
        <div className='flex flex-col justify-center items-center my-12 w-full'>
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
            <div className='flex justify-center w-[93%]'>
                <Image height={50} width={50} src="/Star.svg" alt='star' className='' />
            </div>
            <CustomListing />
            <SponsorTestimonials />
            <SponsorFAQ />
            <div className='flex justify-end w-[90%] mb-8'>
                <Image height={50} width={50} src="/Star.svg" alt='star' className='' />
            </div>
            <div className='absolute top-[4380px] flex justify-start w-[93%]'>
                <Image height={50} width={50} src="/Star.svg" alt='star' className='' />
            </div>
            <GetStartedCard />
            <SponsorFooter />
        </div>
    )
}

export default Landing
