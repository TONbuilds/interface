"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import ContributorLogin from "./ContributorLogin";

const ContributorSignin = () => {
  const [choose, setChoose] = useState(true);
  return (
    <>
      <div
        className={`w-full justify-center bg-white ${
          choose ? "flex" : "hidden"
        } `}
      >
        <div className="w-[60%] h-[100vh] top-[0%] sticky flex justify-start items-center">
          <Image
            src="/welcome.svg"
            width="252"
            height="300"
            className="w-[85%] rounded-r-[6rem]"
            alt="welcome img"
          />
        </div>

        <div className="w-[40%] text-white flex flex-col justify-center items-center gap-12 my-10">
          <div className="flex flex-col gap-4 w-full">
            <p className="text-5xl font-extrabold text-[#1E1E1E]">Hello!</p>
            <p className="text-[#1E1E1E]">Sign Up to Get Started</p>
            <div className="flex flex-col gap-4 ml-10">
              <div className="flex flex-col w-[70%]">
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="rounded-full px-6 py-3 border border-gray-500 text-[#1E1E1E]"
                />
              </div>

              <div className="flex flex-col w-[70%]">
                <input
                  type="text"
                  id="skills"
                  placeholder="Skills"
                  className="rounded-full px-6 py-3 border border-gray-500 text-[#1E1E1E]"
                />
              </div>

              <div className="flex flex-col w-[70%]">
                <input
                  type="url"
                  id="portfolio-url"
                  placeholder="Portfolio Link"
                  className="rounded-full px-6 py-3 border border-gray-500 outline-1 text-[#1E1E1E]"
                />
              </div>

              <div className="flex flex-col w-[70%]">
                <input
                  type="email"
                  id="mail"
                  placeholder="Email Address"
                  className="rounded-full px-6 py-3 border border-gray-500 outline-1 text-[#1E1E1E]"
                />
              </div>

              <div className="flex flex-col w-[70%]">
                <input
                  type="password"
                  id="pass"
                  placeholder="Password"
                  className="rounded-full px-6 py-3 border border-gray-500 outline-1 text-[#1E1E1E]"
                />
              </div>

              <button
                className="bg-[#1E1E1E] px-6 py-4 mt-2 text-white rounded-full w-[70%]"
                onClick={() => {
                  setChoose(false);
                }}
              >
                Register
              </button>
            </div>
          </div>

          <p className="flex w-[30%] text-gray-500 text-4xl">- OR -</p>

          <div className="flex w-[95%] justify-between items-center">
            <button className="text-gray-600 text-xl font-medium px-6 py-3 border border-gray-500 rounded-xl">
              Sign Up With Google
            </button>
            <button className="text-gray-600 text-xl font-medium px-6 py-3 border border-gray-500 rounded-xl">
              Sign Up With GitHub
            </button>
          </div>
        </div>
      </div>
      {choose ? "" : <ContributorLogin />}
    </>
  );
};

export default ContributorSignin;
