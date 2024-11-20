import Image from 'next/image'
import React from 'react'

const SponsorFeatures = () => {
    return (
        <div className='flex w-[95%]'>
            <div className='flex items-center gap-6'>
                <div>
                    <Image height={600} width={600} src="/rings.svg" alt='ring' />
                </div>

                <div className="flex flex-col gap-8">
                    <div className="">
                        <div className="[font-family:'Inter',Helvetica] font-medium text-[#0ACD6C] text-lg tracking-[2.88px] leading-7 whitespace-nowrap">
                            FEATURES
                        </div>
                        <div className="[font-family:'Inter',Helvetica] font-bold text-black text-5xl tracking-[0] leading-[48px] whitespace-nowrap">
                            Tonbuild
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
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
                                    stroke="#0ACD6C"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                            <div className="[font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                                Streamlined Listings
                            </div>
                        </div>

                        <p className="w-[672px] opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7 mb-0">
                            Create And Publish Listings For Bounties Or Full
                            Projects With Ease. Engage With The Best Talent Ton Has
                            To Offer, All From A Single Platform.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2.5V12M12 12L20.5 7.27771M12 12L3.5 7.27771M12 12V21.5M20.5 16.7222L12.777 12.4317C12.4934 12.2741 12.3516 12.1953 12.2015 12.1645C12.0685 12.1371 11.9315 12.1371 11.7986 12.1645C11.6484 12.1953 11.5066 12.2741 11.223 12.4317L3.5 16.7222M21 16.0586V7.94145C21 7.5988 21 7.42748 20.9495 7.27468C20.9049 7.13951 20.8318 7.01542 20.7354 6.91073C20.6263 6.7924 20.4766 6.7092 20.177 6.54279L12.777 2.43168C12.4934 2.27412 12.3516 2.19535 12.2015 2.16446C12.0685 2.13713 11.9315 2.13713 11.7986 2.16446C11.6484 2.19535 11.5066 2.27413 11.223 2.43168L3.82297 6.5428C3.52345 6.7092 3.37369 6.7924 3.26463 6.91074C3.16816 7.01543 3.09515 7.13951 3.05048 7.27468C3 7.42748 3 7.5988 3 7.94145V16.0586C3 16.4012 3 16.5725 3.05048 16.7253C3.09515 16.8605 3.16816 16.9846 3.26463 17.0893C3.37369 17.2076 3.52345 17.2908 3.82297 17.4572L11.223 21.5683C11.5066 21.7259 11.6484 21.8047 11.7986 21.8355C11.9315 21.8629 12.0685 21.8629 12.2015 21.8355C12.3516 21.8047 12.4934 21.7259 12.777 21.5683L20.177 17.4572C20.4766 17.2908 20.6263 17.2076 20.7354 17.0893C20.8318 16.9846 20.9049 16.8605 20.9495 16.7253C21 16.5725 21 16.4012 21 16.0586Z"
                                    stroke="#0ACD6C"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                            <div className="[font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                                Efficient Payments In Ton
                            </div>
                        </div>

                        <p className="w-[672px] opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7 mb-0">
                            Securely Manage Payments With Ton Wallet. Funds Are Held
                            In Escrow And Released Upon Task Completion, Ensuring
                            Peace Of Mind For Both Parties.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20.5 16H8M8 16V3.5M8 16L3.5 20.5M3.5 8H16M16 8V20.5M16 8L20.5 3.5M21 15.3373V3.8C21 3.51997 21 3.37996 20.9455 3.273C20.8976 3.17892 20.8211 3.10243 20.727 3.0545C20.62 3 20.48 3 20.2 3H8.66274C8.41815 3 8.29586 3 8.18077 3.02763C8.07873 3.05213 7.98119 3.09253 7.89172 3.14736C7.7908 3.2092 7.70432 3.29568 7.53137 3.46863L3.46863 7.53137C3.29568 7.70432 3.2092 7.7908 3.14736 7.89172C3.09253 7.98119 3.05213 8.07873 3.02763 8.18077C3 8.29586 3 8.41815 3 8.66274V20.2C3 20.48 3 20.62 3.0545 20.727C3.10243 20.8211 3.17892 20.8976 3.273 20.9455C3.37996 21 3.51997 21 3.8 21H15.3373C15.5818 21 15.7041 21 15.8192 20.9724C15.9213 20.9479 16.0188 20.9075 16.1083 20.8526C16.2092 20.7908 16.2957 20.7043 16.4686 20.5314L20.5314 16.4686C20.7043 16.2957 20.7908 16.2092 20.8526 16.1083C20.9075 16.0188 20.9479 15.9213 20.9724 15.8192C21 15.7041 21 15.5818 21 15.3373Z"
                                    stroke="#0ACD6C"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                            <div className="[font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                                Personalized Dashboard
                            </div>
                        </div>

                        <p className="w-[638px] opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7 mb-0">
                            A Powerful Dashboard To Monitor Your Bounties And
                            Projects, Keep Track Of Applications, And Communicate
                            With Professionals Seamlessly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SponsorFeatures
