import Link from 'next/link'
import React from 'react'

const GetStartedCard = () => {
    return (
        <div className='flex w-[80%] mb-32'>
            <div className="absolute top-[1px] flex w-[85%] justify-end">
                <div className="relative w-[397px] h-[214px] top-[358px] bg-[#0ACD6C] rounded-[397px] rotate-[150.00deg] blur-[51px]" />
            </div>
            <div className="absolute w-[317px] h-[230px] top-[4100px] left-0 z-[-1]">
                <div className="relative h-[230px]">
                    <div className="absolute w-[290px] h-[153px] top-[77px] left-0 bg-slate-600 rounded-[145px/76.5px] blur-[20px]" />

                    <div className="w-[284px] h-[153px] left-[33px] rounded-[142px/76.5px] blur-[30px] absolute top-0 bg-[#0ACD6C]" />
                </div>
            </div>
            <div className="w-full h-[508px] flex justify-center bg-black rounded-lg p-6">
                <div className="w-[90%] flex items-center">
                    <div className="absolute w-[719px] left-[-150px]">
                        <div className="relative">
                            <div className="absolute w-[380px] h-[547px] top-[118px] left-[138px] rounded-[190px/273.5px] border border-solid border-white -rotate-45" />

                            <div className="absolute w-[380px] h-[547px] top-[86px] left-[170px] rounded-[190px/273.5px] border border-solid border-white -rotate-45" />

                            <div className="absolute w-[380px] h-[547px] top-[54px] left-[202px] rounded-[190px/273.5px] border border-solid border-white -rotate-45" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="[font-family:'Inter',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[48px] whitespace-nowrap">
                            Ready To Get Started?
                        </div>

                        <p className="w-[536px] [font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0] leading-7 mb-0">
                            Post Your First Listing Or Explore Our Network Of Ton
                            Professionals Today!
                        </p>

                        <Link href="/become-sponsor/sponsor-form">
                            <button className="w-[202px] h-14 bg-white rounded-lg flex justify-center items-center">
                                <div className="[font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                                    Get Started
                                </div>
                            </button>
                        </Link>
                    </div>


                    <img
                        className="absolute w-[45px] h-[45px] top-[4525px] left-[550px]"
                        alt="Star"
                        src="https://c.animaapp.com/fqXdYPef/img/star-6.svg"
                    />

                </div>

                <div className="absolute w-[719px] h-[719px]">
                    {/* <div className="absolute w-[719px] h-[719px]">
                        <div className="relative h-[719px] left-[400px]">
                            <div className="absolute w-[380px] h-[547px] top-[118px] left-[138px] rounded-[190px/273.5px] border border-solid border-white -rotate-45" />

                            <div className="absolute w-[380px] h-[547px] top-[86px] left-[170px] rounded-[190px/273.5px] border border-solid border-white -rotate-45" />

                            <div className="absolute w-[380px] h-[547px] top-[54px] left-[202px] rounded-[190px/273.5px] border border-solid border-white -rotate-45" />
                        </div>
                    </div> */}

                    <div className="absolute left-[645px] rotate-[39.87deg] mt-20">
                        <div className="">
                            <div className="absolute w-[321px] h-[178px] top-[75px] left-8 bg-slate-600 rounded-[140.33px/74.04px] blur-[50px]" />
                            <div className="w-[345px] h-[198px] left-0 rounded-[137.43px/74.04px] blur-[45px] absolute bg-[#0ACD6C]" />

                        </div>
                    </div>
                </div>

                <img
                    className="absolute w-[61px] h-[58px] top-[4194px] left-[801px]"
                    alt="Star"
                    src="https://c.animaapp.com/fqXdYPef/img/star-7.svg"
                />
            </div>
        </div>
    )
}

export default GetStartedCard
