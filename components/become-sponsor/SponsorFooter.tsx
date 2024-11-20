import React from 'react'

const SponsorFooter = () => {
    return (
        <div className='flex flex-col gap-16 w-[80%] justify-center items-center'>
            <div className="w-full flex flex-col gap-8 items-center">
                <div className='w-full flex items-center gap-24 pb-16'>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <img
                                className="w-6 h-6"
                                alt="Frame"
                                src="https://c.animaapp.com/fqXdYPef/img/frame.svg"
                            />
                            <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                Help@frybix.com
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                className="w-6 h-6"
                                alt="Frame"
                                src="https://c.animaapp.com/fqXdYPef/img/frame-1.svg"
                            />
                            <p className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap mb-0">
                                +1 234 456 678 89
                            </p>
                        </div>
                    </div>

                    <div className='flex w-full justify-between'>
                        <div className="flex flex-col gap-3">
                            <div className="[font-family:'Inter',Helvetica] font-medium text-black text-[32px] text-center tracking-[0] leading-[42px] whitespace-nowrap">
                                Links
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                    Home
                                </div>
                                <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                    About Us
                                </div>
                                <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                    Bookings
                                </div>
                                <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                    Blog
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="[font-family:'Inter',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[42px] whitespace-nowrap">
                                Legal
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                    Terms Of Use
                                </div>
                                <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                    Privacy Policy
                                </div>
                                <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                    Cookie Policy
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="[font-family:'Inter',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[42px] whitespace-nowrap">
                                Product
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                    Take Tour
                                </div>
                                <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                    Live Chat
                                </div>
                                <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                    Reveiws
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 w-[35%]">
                            <div className="[font-family:'Inter',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[42px] whitespace-nowrap">
                                Newsletter
                            </div>

                            <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                Stay Up To Date
                            </div>

                            <div className="flex items-center w-full justify-between">
                                <input type="email" name="" id="" placeholder='Your Email' className='outline-none text-[#81838a] font-medium text-base w-[48%]' />
                                <button className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[26px] whitespace-nowrap py-5 bg-black rounded w-[48%]">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[2px] w-full bg-gradient-to-b from-[#16161600] via-[#696969] to-[#16161600]'></div>

                <p className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                    Copyright 2024 bug-bounty.com All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default SponsorFooter
