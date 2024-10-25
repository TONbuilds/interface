"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const SponsorLogin = () => {
  return (
    <>
      <div className={`w-full flex justify-center bg-white`}>
        <div className="w-[60%] h-screen flex justify-start items-center">
          <Image
            src="/welcome.svg"
            width="252"
            height="300"
            className="w-full h-screen overflow-hidden absolute right-[28%] rounded-r-[6rem]"
            alt="welcome img"
          />
        </div>

        <div className="w-[40%] text-white flex flex-col justify-center gap-4 my-10 z-50">
          <p className="text-5xl font-extrabold text-[#1E1E1E]">Hello Again!</p>
          <p className="text-[#1E1E1E]">Welcome Back</p>
          <div className="ml-2 flex flex-col gap-4">
            <div className="flex flex-col w-[50%]">
              <input
                type="email"
                id="mail"
                placeholder="Email Address"
                className="rounded-full px-6 py-3 border border-gray-500 outline-1 text-[#1E1E1E]"
              />
            </div>

            <div className="flex flex-col w-[50%]">
              <input
                type="password"
                id="pass"
                placeholder="Password"
                className="rounded-full px-6 py-3 border border-gray-500 outline-1 text-[#1E1E1E]"
              />
            </div>

            <Link href="/dashboard/sponsor">
              <button className="bg-[#1E1E1E] px-6 py-4 mt-2 text-white rounded-full w-[50%]">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorLogin;
