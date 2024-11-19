import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SponsorHero = () => {
    return (
        <div className='flex flex-col gap-16 w-[80%] justify-center items-center'>
            <div className='flex flex-col gap-6 w-full items-start'>
                <p className="w-[896px] font-bold text-black text-[4rem] tracking-[0] leading-[64px] mb-0">
                    Where TON Teams Go To Get Things Done
                </p>

                <p className='w-[638px] opacity-50 font-normal text-black text-lg tracking-[0] leading-7'>The premier hub for projects on TON. Connect with skilled professionals and bring your vision to life using TON Wallet.</p>

                <div className="w-[373px] flex items-center gap-10">
                    <div className="w-[180px] h-[60px] top-0 left-0 bg-black rounded">
                        <div className="w-[136px] top-4 left-[23px] relative h-7 flex justify-center items-center gap-3">
                            <Link href="/become-sponsor/sponsor-form">
                                <div className="[font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap cursor-pointer">
                                    Get Started
                                </div>
                            </Link>
                            <Image height={30} width={30} src="/arrow.svg" alt='go' className='w-6 h-[8px] object-cover' />
                        </div>
                    </div>

                    <div className="w-[155px] h-[29px] flex justify-center items-center gap-3">
                        <div className="w-[29px] h-[29px] rounded-[14.5px] border border-solid border-black flex justify-center items-center">
                            <Image height={30} width={30} src="/vid.svg" alt='demo' className='w-[9px] h-[11px]' />
                        </div>

                        <div className="font-medium text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                            Watch Video
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-start w-[78%]'>
                <Image height={50} width={50} src="/Star.svg" alt='star' className='' />
            </div>
        </div >
    )
}

export default SponsorHero
