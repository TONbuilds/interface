"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [Toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!Toggle);
  };

  return (
    <div className="w-full flex justify-center items-center py-0">
      <div className="flex justify-between items-center w-[90%]">
        <Link href="/">
          <Image src="/tonBuild.svg" alt="Logo" width={50} height={50} />
        </Link>

        <div className="hidden sm:flex justify-end items-center gap-8 text-lg">
          <p className="mb-0">Services</p>
          <p className="mb-0 flex shrink-0">Use Cases</p>
          <p className="mb-0">Pricing</p>
          <p className="mb-0">Blog</p>
          <Link href="/bounties">
            <button className="flex justify-center items-center text-white py-3 px-5 bg-[#191A23] text-lg font-normal text-center rounded-xl transform hover:scale-110 transition-transform duration-200 ease-out">
              Launch App
            </button>
          </Link>
        </div>

        {Toggle ? (
          <Image
            height={50}
            width={50}
            src="/hamburger.png"
            alt=""
            className="z-0 sm:hidden"
            onClick={handleClick}
          />
        ) : (
          <Image
            height={50}
            width={50}
            src="/close.png"
            alt=""
            className="z-0 sm:hidden"
            onClick={handleClick}
          />
        )}

        <div className={`delay-300 sm:hidden flex h-screen bg-black/90 w-full pt-10 fixed top-[80px] text-white flex-col items-center gap-8 text-lg ${Toggle ? "right-[100%]" : "left-[100%]}"
          }`}>
          <p className="mb-0">Services</p>
          <p className="mb-0 flex shrink-0">Use Cases</p>
          <p className="mb-0">Pricing</p>
          <p className="mb-0">Blog</p>
          <Link href="/bounties">
            <button className="flex text-white border border-white rounded-xl px-6 py-4 text-base shrink-0">
              Launch App
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
