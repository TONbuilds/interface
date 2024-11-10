import ProfileCard from "@/components/profile/ProfileCard";
import React from "react";

const page = () => {
  return (
    <div className="mt-14">
      <div className="flex absolute bg-gradient-to-tr from-[#7BFBCD] via-[#7BFBCD] to-[#507EE1] h-[170px] w-full"></div>
      <div className="relative w-full flex justify-center items-center">
        <ProfileCard
          img="/profile.svg"
          name="Yugank Bansal"
          username="yugank01"
          wallet="UQC-......lDMd"
          earned={0}
          submissions={0}
          won={0}
        />
      </div>
    </div>
  );
};

export default page;
