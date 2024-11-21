import Image from 'next/image'
import React from 'react'

const WhyChoose = () => {
    return (
        <div className='flex w-[90%] justify-end'>
            <div className="absolute w-[317px] h-[230px] top-[1430px] left-[872px] z-[-1]">
                <div className="relative h-[230px]">
                    <div className="absolute w-[290px] h-[153px] top-[77px] left-0 bg-slate-600 rounded-[145px/76.5px] blur-[20px]" />

                    <div className="w-[284px] h-[153px] left-[33px] rounded-[142px/76.5px] blur-[30px] absolute top-0 bg-[#0ACD6C]" />
                </div>
            </div>
            <div className='flex w-full items-center justify-between gap-6'>
                <div className="flex flex-col gap-6">
                    <div className="">
                        <div className="[font-family:'Inter',Helvetica] font-medium text-[#0ACD6C] text-lg tracking-[2.88px] leading-7 whitespace-nowrap">
                            ADVATNAGES
                        </div>
                        <div className="[font-family:'Inter',Helvetica] font-bold text-black text-5xl tracking-[0] leading-[48px] whitespace-nowrap">
                            Why Choose Tonbuild?
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-[#0ACD6C] rounded-3xl flex justify-center items-center">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.9998 21.488H9.99977M17.9998 8.48804C17.9998 6.89674 17.3676 5.37061 16.2424 4.2454C15.1172 3.12018 13.5911 2.48804 11.9998 2.48804C10.4085 2.48804 8.88235 3.12018 7.75713 4.2454C6.63192 5.37061 5.99977 6.89674 5.99977 8.48804C5.99977 11.5782 5.22024 13.694 4.34944 15.0934C3.6149 16.2739 3.24763 16.8641 3.2611 17.0288C3.27601 17.2111 3.31463 17.2806 3.46155 17.3896C3.59423 17.488 4.19237 17.488 5.38863 17.488H18.6109C19.8072 17.488 20.4053 17.488 20.538 17.3896C20.6849 17.2806 20.7235 17.2111 20.7384 17.0288C20.7519 16.8641 20.3846 16.2739 19.6501 15.0935C18.7793 13.694 17.9998 11.5782 17.9998 8.48804Z"
                                        stroke="white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </div>
                            <p className="[font-family:'Inter',Helvetica] font-semibold text-black text-[28px] tracking-[0] leading-7 whitespace-nowrap mb-0">
                                Smart Notifications
                            </p>
                        </div>

                        <p className="w-[535px] opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7">
                            Stay Updated With Real-time Notifications On Project
                            Milestones, Application Submissions, And Payment
                            Statuses, So You Never Miss A Beat.
                        </p>
                    </div>
                </div>

                <div>
                    <Image height={600} width={600} src="/rings.svg" alt='ring' />
                </div>
            </div>
        </div>
    )
}

export default WhyChoose
