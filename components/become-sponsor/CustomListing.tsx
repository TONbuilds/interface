import Image from 'next/image'
import React from 'react'

const CustomListing = () => {
    return (
        <div className='flex w-[95%] flex-col'>
            <div className="absolute w-[393px] h-[285px] top-[2050px] left-[151px] rotate-[-139.87deg] z-[-1]">
                <div className="absolute w-[360px] h-[190px] top-[95px] left-0 bg-slate-600 rounded-[179.76px/94.84px] blur-[25px]" />

                <div className="w-[352px] h-[190px] left-[41px] rounded-[176.04px/94.84px] blur-[30px] absolute top-0 bg-[#0ACD6C]" />
            </div>
            <div className='flex items-center gap-6'>
                <div>
                    <Image height={600} width={600} src="/rings.svg" alt='ring' />
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 bg-[#0ACD6C] rounded-3xl flex justify-center items-center">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z"
                                    stroke="white"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>
                        <div className="[font-family:'Inter',Helvetica] font-semibold text-black text-[28px] tracking-[0] leading-7 whitespace-nowrap">
                            Fully Customizable Listings
                        </div>
                    </div>

                    <p className="w-[562px] opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7 mb-0">
                        Tailor Your Listings To Suit Your Project Needs. Add
                        Specifics, Set Milestones, And Make Your Project
                        Requirements Clear To Attract The Best Talent.
                    </p>
                </div>
            </div>
            <div className='w-[84%] flex justify-end'>
                <Image height={50} width={50} src="/Star.svg" alt='star' className='' />
            </div>
        </div>
    )
}

export default CustomListing
