"use client";
import React, { useRef, useState, ReactNode } from "react";
import Auth from "@/components/auth/Auth";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { App as AntdApp } from "antd";

const NavBounties = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const { message } = AntdApp.useApp();

  const [Toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!Toggle);
  };

  const handleButtonClick = () => {
    if (token) {
      router.push("/become-sponsor");
    } else {
      <Auth trigger={true} />;
      message.error("Please login to become a sponsor");
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-2">
      <div className="flex justify-between items-center w-[92%]">
        <Link href="/">
          <Image src="/tonBuild.svg" alt="Logo" width={50} height={50} />
        </Link>

        <SlideTabs />

        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={handleButtonClick}
            className="px-4 py-1.5 bg-[#0AD372] text-white font-medium border border-[#0AD372] rounded-xl font-16"
          >
            Become Sponsor
          </button>

          <Auth trigger={false} />
        </div>

        {Toggle ? (
          <Image
            height={40}
            width={40}
            src="/hamburger.png"
            alt=""
            className="z-0 sm:hidden"
            onClick={handleClick}
          />
        ) : (
          <Image
            height={40}
            width={40}
            src="/close.png"
            alt=""
            className="z-0 sm:hidden"
            onClick={handleClick}
          />
        )}

        <div className={`delay-300 sm:hidden flex h-screen bg-black/90 w-full pt-8 fixed top-[70px] text-white flex-col items-center gap-6 text-lg ${Toggle ? "right-[100%]" : "left-[100%]}"
          }`}>
          <Link href="/" className="text-white">Home</Link>
          <Link href="/bounties" className="text-white">Bounty</Link>
          <Link href="/#contact-us" className="text-white">Contact Us</Link>
          <Link href="/" className="text-white">Blogs</Link>
          <Link href="/" className="text-white">Community</Link>
          <div className="sm:hidden flex flex-col items-center gap-6">
            <button
              onClick={handleButtonClick}
              className="px-4 py-1.5 bg-[#0AD372] text-white font-medium border border-[#0AD372] rounded-xl font-16"
            >
              Become Sponsor
            </button>

            <Auth trigger={false} />
          </div>
        </div>

      </div>
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto hidden sm:flex w-fit rounded-full border-2 border-black text-white p-1 mt-2"
    >
      <Link href="/">
        <Tab setPosition={setPosition}>Home</Tab>
      </Link>
      <Link href="/bounties">
        <Tab setPosition={setPosition}>Bounty</Tab>
      </Link>
      <Link href="/#contact-us">
        <Tab setPosition={setPosition}>Contact Us</Tab>
      </Link>
      <Link href="/#contact-us">
        <Tab setPosition={setPosition}>Blogs</Tab>
      </Link>
      <Link href="/#contact-us">
        <Tab setPosition={setPosition}>Community</Tab>
      </Link>
      <Cursor position={position} />
    </ul>
  );
};
interface TabProps {
  children: ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >;
}

const Tab = ({ children, setPosition }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-[#0AD372] md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
export default NavBounties;
