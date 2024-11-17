import NavBounties from "@/components/bounties/NavBounties";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/profile/ProfileCard";
import React from "react";

const page = () => {
  return (
    <div className="">
      <NavBounties />
      <div className="flex absolute bg-gradient-to-tr from-[#7BFBCD] via-[#7BFBCD] to-[#507EE1] h-[170px] w-full"></div>
      <div className="relative w-full flex justify-center items-center">
        <ProfileCard />
      </div>
    </div>
  );
};

export default page;
