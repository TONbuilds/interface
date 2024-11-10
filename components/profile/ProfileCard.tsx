import Image from "next/image";
import React from "react";

const ProfileCard = ({
  img,
  name,
  username,
  wallet,
}: {
  img: any;
  name: string;
  username: string;
  wallet: string;
}) => {
  return (
    <div className="w-[50%] bg-white mt-3 rounded-2xl p-6 flex flex-col gap-3">
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
      <div></div>
    </div>
  );
};

export default ProfileCard;
