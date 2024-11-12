import Image from "next/image";
import React from "react";

const StatsBanner = () => {
  return (
    <div className="w-full absolute flex justify-center items-center bg-gradient-to-r from-[#22CC77] via-[#22CC77] to-[#318949] py-8">
      <div className="flex items-center justify-between w-[85%] gap-6">
        <div className="flex flex-col h-[190px] pl-8 justify-center bg-[#D2FBD0] border-[3px] flex-shrink-0 rounded-md w-[28%]">
          <div className="flex items-center gap-1">
            <Image src="/trophy.svg" height={22} width={22} alt="active" />
            <p className="text-[#095302B2] text-2xl font-bold">
              Active Bounties
            </p>
          </div>
          <p className="text-[#095302] text-8xl font-bold">450+</p>
        </div>

        <div className="h-[190px] bg-[#D2FBD0] border-[3px] flex-shrink-0 rounded-md w-[48%]">
          <div className="py-3 px-6">
            <p className="text-[#095302B2] text-sm font-bold">
              Submission Stats
            </p>
          </div>
          <div className="w-full h-[1px] bg-[#1E1E1E80]"></div>
          <div className="flex items-center gap-4 px-8 py-3 w-full">
            <div className="flex flex-col gap-1 w-[25%]">
              <div className="flex items-center gap-1">
                <Image src="/trophy.svg" height={25} width={25} alt="active" />
                <p className="text-2xl text-[#095302B2] font-bold">Total</p>
              </div>
              <p className="text-[#095302] text-5xl font-bold">100+</p>
            </div>
            <div className="flex flex-col gap-1 w-[60%]">
              <div className="flex justify-between items-center gap-3">
                <div className="flex h-[6px] w-[76%] rounded-l-xl justify-start bg-[#E53E3E]"></div>
                <p>76</p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <div className="flex h-[6px] w-[44%] rounded-l-xl justify-start bg-[#8833FF]"></div>
                <p>44</p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <div className="flex h-[6px] w-[66%] rounded-l-xl justify-start bg-[#1A202C]"></div>
                <p>66</p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <div className="flex h-[6px] w-[96%] rounded-l-xl justify-start bg-[#0098EA]"></div>
                <p>96</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[190px] w-[20%] flex flex-col justify-between gap-6">
          <div className="bg-[#D2FBD0] border-[3px] flex-shrink-0 rounded-md h-[83px] px-4 py-2">
            <p className="text-[#095302B2] font-bold">Total Value</p>
            <p className="text-[#095302] text-4xl font-bold">$124.5k</p>
          </div>
          <div className="bg-[#D2FBD0] border-[3px] flex-shrink-0 rounded-md h-[83px] px-4 py-2">
            <p className="text-[#095302B2] font-bold">Avg. Response Time</p>
            <p className="text-[#095302] text-4xl font-bold">2.4 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
