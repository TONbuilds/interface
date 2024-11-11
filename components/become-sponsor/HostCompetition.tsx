"use client";
import Image from "next/image";
import React, { useState } from "react";

const HostCompetition = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full">
      <button
        onClick={togglePopup}
        className="bg-gradient-to-b from-[#318949] to-[#22CC77] py-2 rounded-lg text-white w-full"
      >
        Create Sponsor
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-[4px] z-10">
          <div className="pop-background border border-[#D7DEDD] bg-[#FAF9F9] rounded-2xl flex flex-col w-[30%] shadow-lg">
            <Image
              src="/bounty_illustration.svg"
              height={100}
              width={100}
              alt="bounty"
              className="w-full h-[200px] bg-[#F5F3FF] rounded-2xl py-4"
            />
            <div className="w-full p-8 flex flex-col gap-8">
              <p className="text-[#1A202C] text-xl font-medium">Host a Work Competition</p>
              <p className="text-[#64748B] font-medium">
                All participants complete your scope of work, and the best
                submission(s) are rewarded. Get multiple options to choose from.
              </p>
              <button className="bg-gradient-to-b from-[#318949] to-[#22CC77] py-2 rounded-lg text-white w-full">
                Create a Bounty
              </button>
            </div>
            {/* <div className="flex justify-center items-center w-full bg-black bg-opacity-70 mt-6">
          <button
            onClick={togglePopup}
            className="mt-6 subscribe-button text-white font-bold py-2 px-4 rounded"
          >
            Close Popup
          </button>
        </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default HostCompetition;
