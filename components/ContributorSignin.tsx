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

        <div className="w-[40%] text-white flex flex-col gap-4 my-10">
          <p className="text-3xl font-semibold">Welcome</p>
          <p>Are you a Contributor or a Sponsor</p>
          <div className="ml-2 flex flex-col gap-4">
            <div className="flex flex-col w-[70%]">
              <button className="bg-[#1E1E1E] rounded-xl p-2 outline-none">
                Contributor
              </button>
            </div>

            <div className="flex flex-col w-[70%]">
              <button className="bg-[#1E1E1E] rounded-xl p-2 outline-none">
                Sponsor
              </button>
            </div>

            <div className="flex flex-col w-[70%]">
              <label className="mb-2">Website Link</label>
              <input
                type="url"
                id="event-name"
                placeholder="Link"
                className="bg-[#27292D] rounded-xl p-2 outline-none"
              />
            </div>

            <div className="flex flex-col w-[70%]">
              <label className="mb-2">Address (Optional)</label>
              <input
                type="text"
                id="event-name"
                placeholder="Address"
                className="bg-[#27292D] rounded-xl p-2 outline-none"
              />
            </div>

            <div className="flex flex-col w-[70%]">
              <label className="mb-2">
                Business Registration Code (Optional)
              </label>
              <input
                type="text"
                id="event-name"
                placeholder="Code"
                className="bg-[#27292D] rounded-xl p-2 outline-none"
              />
            </div>
            <button
              className="bg-[#00B24F] px-4 py-2 text-[0.8rem] text-white rounded-2xl md:rounded-lg w-[30%]"
              onClick={() => {
                setChoose(false);
              }}
            >
              Save Details
            </button>
          </div>
        </div>
      </div>
      {choose ? "" : <ContributorLogin />}
    </>
  );
};

export default ContributorSignin;
