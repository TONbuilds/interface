import Image from 'next/image'
import React from 'react'

const AboutBanner = () => {
    return (
        <div className='w-full bg-black p-4'>
            <div>
                <div className='flex items-center gap-4'>
                    <div className="flex items-center gap-2">
                        <div className="border border-[#0ACD6C] p-2 rounded-full">
                            <Image height={20} width={20} src="/trophy.svg" alt='star' className='stroke-[#0ACD6C]' />
                        </div>

                        <div className="">
                            <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[11.8px] tracking-[0] leading-[18.3px] whitespace-nowrap">
                                Achievements
                            </div>

                            <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[11.8px] tracking-[0] leading-[18.3px] whitespace-nowrap mb-0">
                                Best Finance App On Playstore
                            </p>
                        </div>
                    </div>
                    <Image height={20} width={20} src="/line.svg" alt='star' className='' />
                    <div className="flex items-center gap-2">
                        <div className="border border-[#0ACD6C] p-2 rounded-full">
                            <Image height={20} width={20} src="/bank-note.svg" alt='star' className='stroke-[#0ACD6C]' />
                        </div>

                        <div className="">
                            <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[11.8px] tracking-[0] leading-[18.3px] whitespace-nowrap">
                                Finance
                            </div>

                            <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[11.8px] tracking-[0] leading-[18.3px] whitespace-nowrap mb-0">
                                Most Popular Accounting App
                            </p>
                        </div>
                    </div>
                </div>

                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default AboutBanner
