import Link from "next/link";
import React from "react";
// import { BankNote031 } from "../../icons/BankNote031";
// import { Bell021 } from "../../icons/Bell021";
// import { Cube021 } from "../../icons/Cube021";
// import { Cube04 } from "../../icons/Cube04";
// import { LogoDesktop } from "../../icons/LogoDesktop";
// import { Star05 } from "../../icons/Star05";
// import { Trophy011 } from "../../icons/Trophy011";

export const AppLandingPage = (): JSX.Element => {
    return (
        <div className="bg-white flex justify-center w-full">
            <div className="bg-white w-[90%]">
                <div className="relative h-[5887px] left-[-61px]">
                    <div className="absolute w-[327px] h-[237px] top-[3339px] left-[258px]">
                        <div className="relative h-[237px] ">
                            <div className="absolute w-[299px] h-[158px] top-[79px] left-0 bg-slate-600 rounded-[149.57px/78.91px] blur-[15px]" />

                            <div className="absolute w-[293px] h-[158px] top-0 left-[34px] bg-[#0ACD6C] rounded-[146.48px/78.91px] blur-[20px]" />
                        </div>
                    </div>

                    <div className="absolute w-[393px] h-[285px] top-[2484px] left-[301px] rotate-[39.87deg]">
                        <div className="relative h-[285px]">
                            <div className="absolute w-[360px] h-[190px] top-[95px] left-0 bg-slate-600 rounded-[179.76px/94.84px] blur-[25px]" />

                            <div className="w-[352px] h-[190px] left-[41px] rounded-[176.04px/94.84px] blur-[30px] absolute top-0 bg-[#0ACD6C]" />
                        </div>
                    </div>

                    <div className="absolute w-[327px] h-[237px] top-[1807px] left-[877px]">
                        <div className="relative h-[237px]">
                            <div className="absolute w-[299px] h-[258px] top-[89px] left-0 bg-slate-600 rounded-[149.57px/78.91px] blur-[25px]" />

                            <div className="absolute w-[353px] h-[258px] top-0 left-[34px] bg-[#0ACD6C] rounded-[146.48px/78.91px] blur-[30px]" />
                        </div>
                    </div>

                    <div className="absolute w-[327px] h-[237px] top-[4690px] left-[75px]">
                        <div className="relative h-[237px]">
                            <div className="absolute w-[399px] h-[158px] top-[79px] left-0 bg-slate-600 rounded-[149.57px/78.91px] blur-[30px]" />

                            <div className="absolute w-[393px] h-[158px] top-0 left-[24px] bg-[#0ACD6C] rounded-[146.48px/78.91px] blur-[20px]" />
                        </div>
                    </div>

                    <img
                        // height={100}
                        // width={100}
                        className="absolute w-[689px] h-[651px] top-[957px] left-[103px]"
                        alt="gradient"
                        src="https://c.animaapp.com/fqXdYPef/img/group-35930.png"
                    />

                    <div className="absolute top-[114px] w-full">
                        <div className="relative">
                            <div className="relative flex justify-center">
                                <div className="absolute w-full h-[87px] flex justify-center top-[566px] bg-black">
                                    <div className="absolute top-0 left-[267px]">
                                        <div className="absolute top-[25px]">
                                            <div className="relative rounded-[15.68px]">
                                                <svg
                                                    className="!absolute !w-4 !h-4 !top-2 !left-2 !rotate-[0.12deg]"
                                                    fill="none"
                                                    height="17"
                                                    viewBox="0 0 17 17"
                                                    width="17"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.69086 6.74974L8.05706 6.75309C7.51567 6.7542 7.07768 7.19398 7.07879 7.73538C7.0799 8.27677 7.51968 8.71476 8.06108 8.71365L8.7146 8.71231C9.25599 8.7112 9.69578 9.14919 9.69689 9.69058C9.698 10.232 9.26001 10.6718 8.71862 10.6729L7.08482 10.6762M8.38248 6.0989L8.38382 6.75242M8.39186 10.6735L8.3932 11.3271M12.309 8.70494L12.3155 8.70493M4.46672 8.72101L4.47325 8.721M1.84755 6.243L1.85773 11.2097C1.85923 11.9418 1.85998 12.3078 2.00301 12.5871C2.12883 12.8327 2.32919 13.0323 2.57538 13.1571C2.85526 13.299 3.22127 13.2982 3.95328 13.2967L12.8412 13.2785C13.5732 13.277 13.9392 13.2763 14.2185 13.1332C14.4641 13.0074 14.6637 12.8071 14.7885 12.5609C14.9304 12.281 14.9296 11.915 14.9281 11.183L14.9179 6.21621C14.9164 5.4842 14.9157 5.11819 14.7727 4.83889C14.6469 4.59321 14.4465 4.39367 14.2003 4.26887C13.9204 4.12698 13.5544 4.12773 12.8224 4.12923L3.93453 4.14745C3.20251 4.14895 2.83651 4.1497 2.55721 4.29273C2.31153 4.41854 2.11199 4.61891 1.98718 4.8651C1.8453 5.14498 1.84605 5.51099 1.84755 6.243ZM12.6357 8.70427C12.6361 8.88474 12.4901 9.03133 12.3096 9.0317C12.1292 9.03207 11.9826 8.88608 11.9822 8.70561C11.9818 8.52515 12.1278 8.37855 12.3083 8.37818C12.4888 8.37781 12.6353 8.52381 12.6357 8.70427ZM4.79348 8.72035C4.79385 8.90081 4.64785 9.04741 4.46739 9.04777C4.28692 9.04814 4.14033 8.90215 4.13996 8.72168C4.13959 8.54122 4.28558 8.39462 4.46605 8.39425C4.64651 8.39389 4.79311 8.53988 4.79348 8.72035Z"
                                                        stroke="#0ACD6C"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.30704"
                                                    />
                                                </svg>
                                                {/* <BankNote031 className="" /> */}
                                                <div className="absolute w-[31px] h-[31px] top-0 left-0 rounded-[15.68px] border-[0.65px] border-solid border-[#0ACD6C]" />
                                            </div>
                                        </div>

                                        <div className="absolute w-[172px] h-[37px] top-[20px] left-[42px]">
                                            <div className="relative w-[168px] h-[37px]">
                                                <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-[11.8px] tracking-[0] leading-[18.3px] whitespace-nowrap">
                                                    Finance
                                                </div>

                                                <div className="absolute top-[18px] left-0 [font-family:'Inter',Helvetica] font-medium text-white text-[11.8px] tracking-[0] leading-[18.3px] whitespace-nowrap">
                                                    Most Popular Accounting App
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute w-[216px] h-[37px] top-[25px] left-[10px]">
                                        <div className="absolute w-[31px] h-[31px] top-[3px] left-0">
                                            <div className="relative h-[31px] rounded-[15.68px]">
                                                {/* <Trophy011 className="!absolute !w-4 !h-4 !top-2 !left-2 !rotate-[0.12deg]" /> */}
                                                <svg
                                                    className="!absolute !w-4 !h-4 !top-2 !left-2 !rotate-[0.12deg]"
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
                                                <div className="absolute w-[31px] h-[31px] top-0 left-0 rounded-[15.68px] border-[0.65px] border-solid border-[#0ACD6C]" />
                                            </div>
                                        </div>

                                        <div className="absolute w-[178px] h-[37px] top-0 left-[42px]">
                                            <div className="relative w-[174px] h-[37px]">
                                                <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-[11.8px] tracking-[0] leading-[18.3px] whitespace-nowrap">
                                                    Achievements
                                                </div>

                                                <p className="absolute top-[18px] left-0 [font-family:'Inter',Helvetica] font-medium text-white text-[11.8px] tracking-[0] leading-[18.3px] whitespace-nowrap">
                                                    Best Finance App On Playstore
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <img
                                        className="absolute w-[21px] h-[35px] top-[25px] left-[231px] rotate-[0.12deg]"
                                        alt="Line"
                                        src="https://c.animaapp.com/fqXdYPef/img/line-1.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="absolute w-[457px] h-[717px] top-[131px] left-[976px]">
                        <div className="relative w-[397px] h-[214px] top-[418px] bg-[#0ACD6C] rounded-[198.71px/107.05px] rotate-[150.00deg] blur-[55px]" />
                    </div> */}

                    <div className="absolute w-[317px] h-[230px] top-[152px] left-[402px]">
                        <div className="relative h-[230px]">
                            <div className="absolute w-[290px] h-[153px] top-[77px] left-0 bg-slate-600 rounded-[145px/76.5px] blur-[20px]" />

                            <div className="w-[284px] h-[153px] left-[33px] rounded-[142px/76.5px] blur-[30px] absolute top-0 bg-[#0ACD6C]" />
                        </div>
                    </div>

                    <div className="absolute w-full h-[508px] top-[4777px] flex justify-center bg-black rounded-lg">
                        <div className="absolute w-[90%] h-[755px] top-[156px] left-[-328px]">
                            <div className="absolute w-[719px] h-[719px] top-9 left-0">
                                <div className="relative h-[719px]">
                                    <div className="absolute w-[380px] h-[547px] top-[118px] left-[138px] rounded-[190px/273.5px] border border-solid border-white -rotate-45" />

                                    <div className="absolute w-[380px] h-[547px] top-[86px] left-[170px] rounded-[190px/273.5px] border border-solid border-white -rotate-45" />

                                    <div className="absolute w-[380px] h-[547px] top-[54px] left-[202px] rounded-[190px/273.5px] border border-solid border-white -rotate-45" />
                                </div>
                            </div>

                            <div className="absolute w-[536px] h-[196px] top-0 left-[405px]">
                                <div className="relative w-[540px] h-[196px]">
                                    <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[48px] whitespace-nowrap">
                                        Ready To Get Started?
                                    </div>

                                    <p className="absolute w-[536px] top-16 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0] leading-7">
                                        Post Your First Listing Or Explore Our Network Of Ton
                                        Professionals Today!
                                    </p>

                                    <div className="absolute w-52 h-[60px] top-[136px] left-0 bg-white rounded">
                                        <div className="relative w-[100px] h-7 top-4 left-[22px]">
                                            <div className="w-[102px] relative h-7">
                                                <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                                                    Get Started
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <img
                                className="absolute w-[45px] h-[45px] top-[195px] left-[750px]"
                                alt="Star"
                                src="https://c.animaapp.com/fqXdYPef/img/star-6.svg"
                            />
                        </div>

                        <div className="absolute w-[719px] h-[719px] top-[-248px] left-[730px]">
                            <div className="absolute w-[719px] h-[719px] top-0 left-0">
                                <div className="relative h-[719px]">
                                    <div className="absolute w-[380px] h-[547px] top-[118px] left-[138px] rounded-[190px/273.5px] border border-solid border-white -rotate-45" />

                                    <div className="absolute w-[380px] h-[547px] top-[86px] left-[170px] rounded-[190px/273.5px] border border-solid border-white -rotate-45" />

                                    <div className="absolute w-[380px] h-[547px] top-[54px] left-[202px] rounded-[190px/273.5px] border border-solid border-white -rotate-45" />
                                </div>
                            </div>

                            <div className="absolute w-[307px] h-[223px] top-[419px] left-[38px] rotate-[39.87deg]">
                                <div className="relative h-[223px]">
                                    <div className="absolute w-[281px] h-[148px] top-[75px] left-0 bg-slate-600 rounded-[140.33px/74.04px] blur-[103.15px]" />

                                    <div className="w-[275px] h-[148px] left-8 rounded-[137.43px/74.04px] blur-[103.15px] absolute top-0 bg-[#0ACD6C]" />
                                </div>
                            </div>
                        </div>

                        <img
                            className="absolute w-[61px] h-[58px] top-[34px] left-[651px]"
                            alt="Star"
                            src="https://c.animaapp.com/fqXdYPef/img/star-7.svg"
                        />
                    </div>

                    <p className="absolute w-[896px] top-[214px] left-[236px] [font-family:'Inter',Helvetica] font-bold text-black text-[64px] tracking-[0] leading-[64px]">
                        Where Ton Teams Go To Get Things Done
                    </p>

                    <p className="absolute w-[638px] top-[366px] left-[236px] opacity-50 [font-family:'Inter',Helvetica] font-normal text-black text-lg tracking-[0] leading-7">
                        The Premier Hub For Projects On Ton. Connect With Skilled
                        Professionals And Bring Your Vision To Life Using Ton Wallet.
                    </p>

                    <div className="absolute w-[373px] h-[60px] top-[447px] left-[236px]">
                        <div className="absolute w-[180px] h-[60px] top-0 left-0 bg-black rounded">
                            <div className="w-[136px] top-4 left-[23px] relative h-7">
                                <Link href="/become-sponsor/sponsor-form">
                                    <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap cursor-pointer">
                                        Get Started
                                    </div>
                                </Link>

                                <img
                                    className="absolute w-6 h-[7px] top-2.5 left-[110px] object-cover"
                                    alt="Vector"
                                    src="https://c.animaapp.com/fqXdYPef/img/vector-1.svg"
                                />
                            </div>
                        </div>

                        <div className="absolute w-[155px] h-[29px] top-[15px] left-[220px]">
                            <div className="absolute w-[29px] h-[29px] top-0 left-0 rounded-[14.5px] border border-solid border-black">
                                <img
                                    className="absolute w-[9px] h-[11px] top-2 left-2.5"
                                    alt="Vector"
                                    src="https://c.animaapp.com/fqXdYPef/img/vector-2.svg"
                                />
                            </div>

                            <div className="absolute top-0 left-[43px] [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                                Watch Video
                            </div>
                        </div>
                    </div>

                    <img
                        className="absolute w-[45px] h-[45px] top-[129px] left-[117px]"
                        alt="Star"
                        src="https://c.animaapp.com/fqXdYPef/img/star-8.svg"
                    />

                    <img
                        className="absolute w-[45px] h-[45px] top-[582px] left-[352px]"
                        alt="Star"
                        src="https://c.animaapp.com/fqXdYPef/img/star-8.svg"
                    />

                    <div className="absolute w-full h-[821px] top-[2982px] ">
                        <div className="relative h-[821px]">
                            <div className="absolute w-[459px] h-32 top-0 left-[413px]">
                                <p className="absolute w-[455px] top-8 left-0 [font-family:'Inter',Helvetica] font-bold text-black text-5xl text-center tracking-[0] leading-[48px]">
                                    What Our Users Say About Us?
                                </p>

                                <div className="absolute top-0 left-[153px] [font-family:'Inter',Helvetica] font-medium text-black text-lg text-center tracking-[2.88px] leading-7 whitespace-nowrap">
                                    TESTIMONIAL
                                </div>
                            </div>

                            <div className="absolute w-full h-[713px] top-[108px] left-0">
                                <div className="absolute w-[448px] h-[392px] top-[145px] left-[743px]">
                                    <p className="absolute w-[442px] top-[124px] left-0 opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7">
                                        {" "}
                                        Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit
                                        Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem
                                        Sapien, Suspendisse Aliquam.”
                                    </p>

                                    <p className="absolute w-[442px] top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-black text-[28px] tracking-[0] leading-7">
                                        “the Most Efficient Platform For Ton Projects I’ve Used!
                                        Everything Is Intuitive, And Payments Are Seamless.”
                                    </p>

                                    <div className="absolute w-48 h-10 top-[300px] left-0">
                                        <img
                                            className="absolute w-10 h-10 top-0 left-0"
                                            alt="Group"
                                            src="https://c.animaapp.com/fqXdYPef/img/group-28@2x.png"
                                        />

                                        <div className="absolute w-36 h-[30px] top-[5px] left-12 opacity-50">
                                            <img
                                                className="absolute w-[30px] h-[30px] top-0 left-0"
                                                alt="Group"
                                                src="https://c.animaapp.com/fqXdYPef/img/group-27@2x.png"
                                            />

                                            <img
                                                className="absolute w-[30px] h-[30px] top-0 left-[38px]"
                                                alt="Group"
                                                src="https://c.animaapp.com/fqXdYPef/img/group-29@2x.png"
                                            />

                                            <img
                                                className="absolute w-[30px] h-[30px] top-0 left-[76px]"
                                                alt="Group"
                                                src="https://c.animaapp.com/fqXdYPef/img/group-30@2x.png"
                                            />

                                            <img
                                                className="absolute w-[30px] h-[30px] top-0 left-[114px]"
                                                alt="Group"
                                                src="https://c.animaapp.com/fqXdYPef/img/group-31@2x.png"
                                            />
                                        </div>
                                    </div>

                                    <div className="absolute top-[364px] left-0 [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                                        Nick Jonas
                                    </div>
                                </div>

                                <div className="absolute w-[713px] h-[713px] top-0 left-0">
                                    <div className="relative h-[713px]">
                                        <div className="absolute w-[713px] h-[713px] top-0 left-0">
                                            <div className="relative h-[713px]">
                                                <div className="w-[377px] h-[542px] top-[117px] left-[137px] rounded-[188.29px/271.03px] border-[1.12px] border-solid absolute border-black -rotate-45" />

                                                <div className="w-[377px] h-[542px] top-[85px] left-[168px] rounded-[188.29px/271.03px] border-[1.12px] border-solid absolute border-black -rotate-45" />

                                                <div className="w-[377px] h-[542px] left-[200px] rounded-[188.29px/271.03px] border-[1.12px] border-solid absolute top-[54px] border-black -rotate-45" />
                                            </div>
                                        </div>

                                        <div className="absolute w-[439px] h-[417px] top-[139px] left-[126px]">
                                            <div className="relative w-[669px] h-[646px] top-[-61px] left-[-61px]">
                                                <img
                                                    className="absolute w-[443px] h-[443px] top-[120px] left-[122px] object-cover"
                                                    alt="Ellipse"
                                                    src="https://c.animaapp.com/fqXdYPef/img/ellipse-41@2x.png"
                                                />

                                                <img
                                                    className="absolute w-[339px] h-[339px] top-0 left-[329px] object-cover"
                                                    alt="Ellipse"
                                                    src="https://c.animaapp.com/fqXdYPef/img/ellipse-42@2x.png"
                                                />

                                                <img
                                                    className="absolute w-[306px] h-[306px] top-[340px] left-[346px] object-cover"
                                                    alt="Ellipse"
                                                    src="https://c.animaapp.com/fqXdYPef/img/ellipse-43@2x.png"
                                                />

                                                <img
                                                    className="absolute w-[317px] h-[317px] top-0 left-[3px] object-cover"
                                                    alt="Ellipse"
                                                    src="https://c.animaapp.com/fqXdYPef/img/ellipse-44@2x.png"
                                                />

                                                <img
                                                    className="absolute w-[323px] h-[323px] top-[318px] left-0 object-cover"
                                                    alt="Ellipse"
                                                    src="https://c.animaapp.com/fqXdYPef/img/ellipse-45@2x.png"
                                                />

                                                <div className="absolute w-20 h-20 top-[248px] left-[356px] bg-[#0ACD6C] rounded-[39.89px]" />

                                                <img
                                                    className="absolute w-[35px] h-[27px] top-[273px] left-[379px]"
                                                    alt="Image"
                                                    src="https://c.animaapp.com/fqXdYPef/img/-.svg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute w-[90%] h-[4026px] top-[943px]">
                        <div className="absolute h-[1998px] top-0 left-0">
                            <img
                                className="absolute w-[61px] h-[58px] top-[717px]"
                                alt="Star"
                                src="https://c.animaapp.com/fqXdYPef/img/star-8-1.svg"
                            />

                            <img
                                className="absolute w-[61px] h-[58px] top-[1919px]"
                                alt="Star"
                                src="https://c.animaapp.com/fqXdYPef/img/star-8-1.svg"
                            />

                            <img
                                className="absolute w-[45px] h-[45px] top-[140px]"
                                alt="Star"
                                src="https://c.animaapp.com/fqXdYPef/img/star-2.svg"
                            />

                            <img
                                className="absolute w-[45px] h-[45px] top-[1299px]"
                                alt="Star"
                                src="https://c.animaapp.com/fqXdYPef/img/star-6-1.svg"
                            />

                            <div className="absolute w-full h-[719px] top-0 left-0">
                                <div className="relative h-[719px]">
                                    <div className="absolute h-[464px] top-32 left-[584px]">
                                        <div className="absolute w-[226px] h-20 top-0 left-0">
                                            <div className="absolute top-8 left-0 [font-family:'Inter',Helvetica] font-bold text-black text-5xl tracking-[0] leading-[48px] whitespace-nowrap">
                                                Tonbuild
                                            </div>

                                            <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-theme text-lg tracking-[2.88px] leading-7 whitespace-nowrap">
                                                FEATURES
                                            </div>
                                        </div>

                                        <div className="absolute w-[674px] h-24 top-28 left-0">
                                            <div className="absolute w-[212px] h-7 top-0 left-0">
                                                <div className="absolute top-0 left-8 [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                                                    Streamlined Listings
                                                </div>

                                                {/* <Star05
                                                    className="!absolute !w-6 !h-6 !top-0.5 !left-0"
                                                    color="#0ACD6C"
                                                /> */}
                                                <svg
                                                    className="!absolute !w-6 !h-6 !top-0.5 !left-0"
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
                                            </div>

                                            <p className="absolute w-[672px] top-10 left-0 opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7">
                                                Create And Publish Listings For Bounties Or Full
                                                Projects With Ease. Engage With The Best Talent Ton Has
                                                To Offer, All From A Single Platform.
                                            </p>
                                        </div>

                                        <div className="absolute w-[674px] h-24 top-60 left-0">
                                            <div className="absolute w-[261px] h-7 top-0 left-0">
                                                <div className="absolute top-0 left-8 [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                                                    Efficient Payments In Ton
                                                </div>

                                                {/* <Cube021
                                                    className="!absolute !w-6 !h-6 !top-0.5 !left-0"
                                                    color="#0ACD6C"
                                                /> */}
                                                <svg
                                                    className="!absolute !w-6 !h-6 !top-0.5 !left-0"
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
                                            </div>

                                            <p className="absolute w-[672px] top-10 left-0 opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7">
                                                Securely Manage Payments With Ton Wallet. Funds Are Held
                                                In Escrow And Released Upon Task Completion, Ensuring
                                                Peace Of Mind For Both Parties.
                                            </p>
                                        </div>

                                        <div className="absolute w-[640px] h-24 top-[368px] left-0">
                                            <div className="absolute w-[247px] h-7 top-0 left-0">
                                                <div className="absolute top-0 left-8 [font-family:'Inter',Helvetica] font-semibold text-black text-lg tracking-[0] leading-7 whitespace-nowrap">
                                                    Personalized Dashboard
                                                </div>

                                                {/* <Cube04
                                                    className="!absolute !w-6 !h-6 !top-0.5 !left-0"
                                                    color="#0ACD6C"
                                                /> */}
                                                <svg
                                                    className="!absolute !w-6 !h-6 !top-0.5 !left-0"
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
                                            </div>

                                            <p className="absolute w-[638px] top-10 left-0 opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7">
                                                A Powerful Dashboard To Monitor Your Bounties And
                                                Projects, Keep Track Of Applications, And Communicate
                                                With Professionals Seamlessly.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="absolute w-[719px] h-[719px] top-0 left-0">
                                        <div className="h-[719px]">
                                            <div className="relative w-[719px] h-[719px]">
                                                <div className="w-[380px] h-[547px] top-[118px] left-[78px] rounded-[190px/273.5px] border border-solid absolute border-black -rotate-45" />

                                                <div className="w-[380px] h-[547px] top-[86px] left-[110px] rounded-[190px/273.5px] border border-solid absolute border-black -rotate-45" />

                                                <div className="w-[380px] h-[547px] left-[142px] rounded-[190px/273.5px] border border-solid absolute top-[54px] border-black -rotate-45" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute w-full h-[719px] top-[639px] left-[69px]">
                                <div className="relative h-[719px]">
                                    <div className="absolute w-[559px] h-[267px] top-[198px] left-0">
                                        <div className="absolute w-[563px] h-20 top-0 left-0">
                                            <div className="absolute top-8 left-0 [font-family:'Inter',Helvetica] font-bold text-black text-5xl tracking-[0] leading-[48px] whitespace-nowrap">
                                                Why Choose Tonbuild?
                                            </div>

                                            <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-theme text-lg tracking-[2.88px] leading-7 whitespace-nowrap">
                                                ADVATNAGES
                                            </div>
                                        </div>

                                        <div className="absolute w-[537px] h-[155px] top-28 left-0">
                                            <p className="absolute w-[535px] top-[71px] left-0 opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7">
                                                Stay Updated With Real-time Notifications On Project
                                                Milestones, Application Submissions, And Payment
                                                Statuses, So You Never Miss A Beat.
                                            </p>

                                            <div className="absolute w-[328px] h-12 top-0 left-0">
                                                <div className="absolute top-2.5 left-[63px] [font-family:'Inter',Helvetica] font-semibold text-black text-[28px] tracking-[0] leading-7 whitespace-nowrap">
                                                    Smart Notifications
                                                </div>

                                                <div className="absolute w-12 h-12 top-0 left-0 bg-[#0ACD6C] rounded-3xl">
                                                    {/* <Bell021 className="!absolute !w-6 !h-6 !top-3 !left-3" /> */}
                                                    <svg
                                                        className="!absolute !w-6 !h-6 !top-3 !left-3"
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
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute w-[719px] h-[719px] top-0 left-[520px]">
                                        <div className="h-[719px]">
                                            <div className="relative w-[719px] h-[719px]">
                                                <div className="w-[380px] h-[547px] top-[118px] left-[138px] rounded-[190px/273.5px] border border-solid absolute border-black -rotate-45" />

                                                <div className="w-[380px] h-[547px] top-[86px] left-[170px] rounded-[190px/273.5px] border border-solid absolute border-black -rotate-45" />

                                                <div className="w-[380px] h-[547px] left-[202px] rounded-[190px/273.5px] border border-solid absolute top-[54px] border-black -rotate-45" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute w-[90%] h-[719px] top-[1279px] left-0.5">
                                <div className="h-[719px]">
                                    <div className="relative w-full h-[719px]">
                                        <div className="absolute w-[562px] h-[155px] top-[254px] left-[682px]">
                                            <div className="relative w-[564px] h-[155px]">
                                                <p className="absolute w-[562px] top-[71px] left-0 opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg tracking-[0] leading-7">
                                                    Tailor Your Listings To Suit Your Project Needs. Add
                                                    Specifics, Set Milestones, And Make Your Project
                                                    Requirements Clear To Attract The Best Talent.
                                                </p>

                                                <div className="absolute w-[435px] h-12 top-0 left-0">
                                                    <div className="absolute top-2.5 left-[63px] [font-family:'Inter',Helvetica] font-semibold text-black text-[28px] tracking-[0] leading-7 whitespace-nowrap">
                                                        Fully Customizable Listings
                                                    </div>

                                                    <div className="absolute w-12 h-12 top-0 left-0 bg-[#0ACD6C] rounded-3xl">
                                                        {/* <Star05
                                                        className="!absolute !w-6 !h-6 !top-3 !left-3"
                                                        color="white"
                                                    /> */}
                                                        <svg
                                                            className="!absolute !w-6 !h-6 !top-3 !left-3"
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
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute w-[719px] h-[719px] top-0 left-0">
                                            <div className="h-[719px]">
                                                <div className="relative w-[719px] h-[719px]">
                                                    <div className="w-[380px] h-[547px] top-[118px] left-[138px] rounded-[190px/273.5px] border border-solid absolute border-black -rotate-45" />

                                                    <div className="w-[380px] h-[547px] top-[86px] left-[170px] rounded-[190px/273.5px] border border-solid absolute border-black -rotate-45" />

                                                    <div className="w-[380px] h-[547px] left-[202px] rounded-[190px/273.5px] border border-solid absolute top-[54px] border-black -rotate-45" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img
                            className="absolute w-[61px] h-[58px] top-[2999px] left-[735px]"
                            alt="Star"
                            src="https://c.animaapp.com/fqXdYPef/img/star-8-1.svg"
                        />

                        <img
                            className="absolute w-[61px] h-[58px] top-[3747px]"
                            alt="Star"
                            src="https://c.animaapp.com/fqXdYPef/img/star-8-1.svg"
                        />

                        <img
                            className="absolute w-[45px] h-[45px] top-[2772px] left-3"
                            alt="Star"
                            src="https://c.animaapp.com/fqXdYPef/img/star-10.svg"
                        />

                        <img
                            className="absolute w-[45px] h-[45px] top-[3970px] left-3"
                            alt="Star"
                            src="https://c.animaapp.com/fqXdYPef/img/star-10.svg"
                        />
                    </div>

                    <div className="absolute w-[90%] h-[751px] top-[3871px] left-[100px]">
                        <div className="absolute w-[501px] h-32 top-0 left-0">
                            <div className="absolute w-[497px] top-8 left-0 [font-family:'Inter',Helvetica] font-bold text-black text-5xl tracking-[0] leading-[48px]">
                                Frequently Asked Questions
                            </div>

                            <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-theme text-lg tracking-[2.88px] leading-7 whitespace-nowrap">
                                FAQ
                            </div>
                        </div>

                        <div className="absolute h-[583px] top-[168px] left-0">
                            <div className="absolute w-[535px] h-[181px] top-0 left-[555px] bg-white rounded-lg">
                                <div className="relative w-[478px] h-[120px] top-[31px] left-[31px]">
                                    <p className="absolute w-[466px] top-16 left-0 opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg text-justify tracking-[0] leading-7">
                                        “arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                                        Ultricies. In Ultrices Malesuada Elit Mauris.
                                    </p>

                                    <div className="absolute w-[474px] top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-black text-[28px] tracking-[0] leading-7">
                                        How Is Payment Managed?
                                    </div>
                                </div>
                            </div>

                            <div className="absolute w-[535px] h-[181px] top-[201px] left-[555px] bg-[#0ACD6C] rounded-lg">
                                <div className="relative w-[478px] h-[120px] top-[31px] left-[31px]">
                                    <p className="absolute w-[466px] top-16 left-0 [font-family:'Inter',Helvetica] font-medium text-white text-lg text-justify tracking-[0] leading-7">
                                        “arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                                        Ultricies. In Ultrices Malesuada Elit Mauris.
                                    </p>

                                    <p className="absolute w-[474px] top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-[28px] tracking-[0] leading-7">
                                        Can I Customize My Listings?
                                    </p>
                                </div>
                            </div>

                            <div className="absolute w-[535px] h-[181px] top-[402px] left-[555px] bg-white rounded-lg">
                                <div className="relative w-[478px] h-[120px] top-[31px] left-[31px]">
                                    <p className="absolute w-[466px] top-16 left-0 opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg text-justify tracking-[0] leading-7">
                                        “arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                                        Ultricies. In Ultrices Malesuada Elit Mauris.
                                    </p>

                                    <p className="text-black absolute w-[474px] top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-[28px] tracking-[0] leading-7">
                                        Can I Customize My Listings?
                                    </p>
                                </div>
                            </div>

                            <div className="absolute w-[535px] h-[181px] top-0 left-0 bg-[#0ACD6C] rounded-lg">
                                <div className="relative w-[478px] h-[120px] top-[31px] left-[31px]">
                                    <p className="absolute w-[466px] top-16 left-0 [font-family:'Inter',Helvetica] font-medium text-white text-lg text-justify tracking-[0] leading-7">
                                        “arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                                        Ultricies. In Ultrices Malesuada Elit Mauris.
                                    </p>

                                    <p className="absolute w-[474px] top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-[28px] tracking-[0] leading-7">
                                        How Do I Get Started On The Platform?
                                    </p>
                                </div>
                            </div>

                            <div className="absolute w-[535px] h-[181px] top-[201px] left-0 bg-white rounded-lg">
                                <div className="relative w-[478px] h-[120px] top-[31px] left-[31px]">
                                    <p className="absolute w-[466px] top-16 left-0 opacity-50 [font-family:'Inter',Helvetica] font-medium text-black text-lg text-justify tracking-[0] leading-7">
                                        “arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                                        Ultricies. In Ultrices Malesuada Elit Mauris.
                                    </p>

                                    <p className="text-black absolute w-[474px] top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-[28px] tracking-[0] leading-7">
                                        Can I Customize My Listings?
                                    </p>
                                </div>
                            </div>

                            <div className="absolute w-[535px] h-[181px] top-[402px] left-0 bg-[#0ACD6C] rounded-lg">
                                <div className="relative w-[478px] h-[120px] top-[31px] left-[31px]">
                                    <p className="absolute w-[466px] top-16 left-0 [font-family:'Inter',Helvetica] font-medium text-white text-lg text-justify tracking-[0] leading-7">
                                        “arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                                        Ultricies. In Ultrices Malesuada Elit Mauris.
                                    </p>

                                    <p className="text-white absolute w-[474px] top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-[28px] tracking-[0] leading-7">
                                        Can I Customize My Listings?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute w-[90%] h-[406px] top-[5440px] left-[96px]">
                        <div className="absolute h-[104px] top-[302px] left-0 border-t [border-top-style:solid] border-transparent [border-image:linear-gradient(to_bottom,rgba(22,22,22,0),rgb(105.19,105.19,105.19)_51.56%,rgba(22,22,22,0)_100%)_1]">
                            <p className="absolute top-[38px] left-[369px] [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                Copyright 2022 Uifry.com All Rights Reserved
                            </p>
                        </div>

                        <div className="absolute w-[129px] h-[168px] top-0 left-[558px]">
                            <div className="absolute top-[58px] left-0 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                Take Tour
                            </div>

                            <div className="absolute top-[100px] left-0 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                Live Chat
                            </div>

                            <div className="absolute top-[142px] left-0 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                Reveiws
                            </div>

                            <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[42px] whitespace-nowrap">
                                Product
                            </div>
                        </div>

                        <div className="absolute w-[115px] h-[168px] top-0 left-[385px]">
                            <div className="absolute top-[58px] left-0 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                Terms Of Use
                            </div>

                            <div className="absolute top-[100px] left-0 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                Privacy Policy
                            </div>

                            <div className="absolute top-[142px] left-0 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                Cookie Policy
                            </div>

                            <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[42px] whitespace-nowrap">
                                Legal
                            </div>
                        </div>

                        <div className="absolute w-[91px] h-[210px] top-0 left-[239px]">
                            <div className="absolute top-[58px] left-0.5 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                Home
                            </div>

                            <div className="absolute top-[100px] left-0.5 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                About Us
                            </div>

                            <div className="absolute top-[142px] left-0.5 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                Bookings
                            </div>

                            <div className="absolute top-[184px] left-0.5 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                Blog
                            </div>

                            <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-black text-[32px] text-center tracking-[0] leading-[42px] whitespace-nowrap">
                                Links
                            </div>
                        </div>

                        <div className="absolute w-[178px] h-[108px] top-2.5 left-0">
                            <div className="absolute w-[11px] h-[5px] top-0 left-[108px]">
                                <div className="absolute w-[9px] top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-neutral-800 text-[4.2px] tracking-[0] leading-[normal]">
                                    TM
                                </div>
                            </div>

                            <div className="absolute w-[173px] h-[26px] top-10 left-0">
                                <div className="absolute top-0 left-8 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                    Help@frybix.com
                                </div>

                                <img
                                    className="absolute w-6 h-6 top-px left-0"
                                    alt="Frame"
                                    src="https://c.animaapp.com/fqXdYPef/img/frame.svg"
                                />
                            </div>

                            <div className="absolute w-[180px] h-[26px] top-[82px] left-0">
                                <p className="absolute top-0 left-8 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                    +1 234 456 678 89
                                </p>

                                <img
                                    className="absolute w-6 h-6 top-px left-0"
                                    alt="Frame"
                                    src="https://c.animaapp.com/fqXdYPef/img/frame-1.svg"
                                />
                            </div>
                        </div>

                        <div className="absolute w-[344px] h-[181px] top-0 left-[751px]">
                            <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[42px] whitespace-nowrap">
                                Newsletter
                            </div>

                            <div className="absolute top-[58px] left-0 [font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                Stay Up To Date
                            </div>

                            <div className="absolute w-[342px] h-[81px] top-[100px] left-0">
                                <div className="relative w-[340px] h-[81px] bg-white rounded shadow-s">
                                    <div className="absolute top-7 left-6 [font-family:'Inter',Helvetica] font-medium text-[#81838a] text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                        Your email
                                    </div>

                                    <div className="absolute w-[162px] h-[61px] top-2.5 left-[170px]">
                                        <div className="relative w-40 h-[61px] bg-black rounded">
                                            <div className="absolute top-[18px] left-10 [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[26px] whitespace-nowrap">
                                                Subscribe
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    );
};