import Image from "next/image";
import React from "react";
import Add from "./Add";

const ProfileCard = ({
  img,
  name,
  username,
  wallet,
  earned,
  submissions,
  won,
}: {
  img: any;
  name: string;
  username: string;
  wallet: string;
  earned: number;
  submissions: number;
  won: number;
}) => {
  return (
    <div className="w-[50%] bg-white mt-3 rounded-2xl p-6 flex flex-col gap-3 pb-32">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <Image src={img} height={70} width={70} alt="profile" />
          <div>
            <p className="font-semibold text-xl">{name}</p>
            <p className="font-medium text-[#64748B]">@{username}</p>
          </div>
        </div>
        <div className="flex flex-col w-[30%] items-center gap-3">
          <button className="bg-[#EDF2F7] py-2 w-full rounded-[10px]">
            <span className="text-transparent font-bold text-lg bg-clip-text bg-gradient-to-b from-[#318949] to-[#2C7]">
              Edit Profile
            </span>
          </button>
          <button className="py-2 w-full rounded-[10px] border border-[#94A3B8] text-lg font-semibold text-[#64748B]">
            Share
          </button>
        </div>
      </div>

      <p className="text-[#64748B]">
        Ton Wallet: <span className="text-black">{wallet}</span>
      </p>

      <div className="h-[1px] bg-black/[0.4]"></div>

      <div className="flex justify-between gap-8 w-full">
        <div className="flex flex-col gap-3 w-[45%]">
          <h2 className="text-[#0F172A] text-lg font-semibold">Details</h2>
          <div className="flex flex-col gap-2">
            <p className="text-[#94A3B8]">
              Looking for
              <span className="text-[#64748B] font-semibold">
                {" "}
                Freelance opportunities
              </span>
            </p>
            <p className="text-[#94A3B8]">
              Works at{" "}
              <span className="text-[#64748B] font-semibold">Student</span>
            </p>
            <p className="text-[#94A3B8]">
              Based in{" "}
              <span className="text-[#64748B] font-semibold">India</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[45%]">
          <h2 className="text-[#0F172A] text-lg font-semibold">Skills</h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-[2px]">
              <p className="text-xs text-[#94A3B8]">FRONTEND</p>
              <p className="w-[65px] text-center px-[12px] py-[4px] rounded-md text-xs text-[#64739C] font-semibold bg-[#EDF2F7]">
                React
              </p>
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="text-xs text-[#94A3B8]">BLOCKCHAIN</p>
              <p className="w-[70px] text-center px-[12px] py-[4px] rounded-md text-xs text-[#64739C] font-semibold bg-[#EDF2F7]">
                Solidity
              </p>
            </div>
            <div className="flex flex-col gap-[3px]">
              <p className="text-xs text-[#94A3B8]">DESIGN</p>
              <p className="w-[100px] text-center px-[12px] py-[4px] rounded-md text-xs text-[#64739C] font-semibold bg-[#EDF2F7]">
                UI/UX Design
              </p>
              <div className="flex gap-6">
                <p className="text-center px-[12px] py-[4px] rounded-md text-xs text-[#64739C] font-semibold bg-[#EDF2F7]">
                  Graphic Design
                </p>
                <p className="text-center px-[12px] py-[4px] rounded-md text-xs text-[#64739C] font-semibold bg-[#EDF2F7]">
                  Illustration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-black/[0.4]"></div>

      <div className="flex justify-between gap-8 w-full">
        <div className="flex gap-2 w-[45%]">
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Github</p>
          <p>Website</p>
        </div>
        <div className="flex gap-4 w-[45%]">
          <div>
            <p>${earned}</p>
            <p>Earned</p>
          </div>
          <div>
            <p>{submissions}</p>
            <p>Submissions</p>
          </div>
          <div>
            <p>{won}</p>
            <p>Won</p>
          </div>
        </div>
      </div>

      <p>Proof of work</p>

      <div className="h-[1px] bg-black/[0.4]"></div>

      <div className="flex flex-col justify-center items-center gap-6 mt-16 w-full">
        <Image src="/profile-add.svg" height={130} width={130} alt="empty" />
        <p className="w-[170px] text-center text-xs">
          ADD SOME PROOF OF WORK TO BUILD YOUR PROFILE
        </p>
        <div className="w-[30%] flex flex-col gap-6">
          <Add />
          <button className="py-2 rounded-lg border border-[#94A3B8]">
            Browse Bounties
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
