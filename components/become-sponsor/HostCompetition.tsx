"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HostCompetitionProps {
  isOpen: boolean;
  togglePopup: () => void;
}

const HostCompetition: React.FC<HostCompetitionProps> = ({
  isOpen,
  togglePopup,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-[4px] z-10">
      <div className="pop-background border border-[#D7DEDD] bg-[#FAF9F9] rounded-2xl flex flex-col w-[30%] shadow-lg">
        <div className="flex w-full justify-end p-2">
          <button
            onClick={togglePopup}
            className="text-white bg-gradient-to-b from-[#318949] to-[#22CC77] w-[10%] font-bold py-2 px-4 rounded-full flex justify-center items-center"
          >
            X
          </button>
        </div>
        <Image
          src="/bounty_illustration.svg"
          height={100}
          width={100}
          alt="bounty"
          className="w-full h-[200px] bg-[#F5F3FF] rounded-2xl py-4"
        />
        <div className="w-full p-8 flex flex-col gap-8">
          <p className="text-[#1A202C] text-xl font-medium">
            Host a Work Competition
          </p>
          <p className="text-[#64748B] font-medium">
            All participants complete your scope of work, and the best
            submission(s) are rewarded. Get multiple options to choose from.
          </p>
          <Link href="/create-listing">
            <button className="bg-gradient-to-b from-[#318949] to-[#22CC77] py-2 rounded-lg text-white w-full">
              Create a Bounty
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HostCompetition;
