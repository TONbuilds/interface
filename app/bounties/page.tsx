import NavBounties from "@/components/bounties/NavBounties";
import NewBounties from "@/components/bounties/NewBounties";
import StatsBanner from "@/components/bounties/StatsBanner";
import React from "react";

const page = () => {
  return (
    <div className="bg-gradient-to-r from-[#CCCCB2] to-[#757519]">
      <NavBounties />
      <StatsBanner />
      <NewBounties />
    </div>
  );
};

export default page;
