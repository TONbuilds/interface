import NavBounties from "@/components/bounties/NavBounties";
import NewBounties from "@/components/bounties/NewBounties";
import StatsBanner from "@/components/bounties/StatsBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBounties />
      <div className="bg-gradient-to-r from-[#CCCCB2] to-[#757519]">
        <StatsBanner />
        <NewBounties />
      </div>
    </div>
  );
};

export default page;
