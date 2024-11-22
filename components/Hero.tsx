import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full pb-6 sm:pb-20">
      <div className="flex flex-col items-center gap-4 sm:gap-8 w-[90%] sm:w-[60%]">
        <h1 className="text-5xl sm:text-6xl text-center font-semibold sm:font-medium">Find Your Next Crypto Gig or Contributor</h1>
        <p className="text-xl text-center font-normal">Discover decentralized opportunities in the crypto space</p>
        <Link href="/bounties">
          <button className="flex justify-center items-center text-white py-5 px-8 bg-[#191A23] text-xl font-normal text-center rounded-2xl">
            Earn
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
