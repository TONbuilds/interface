import NavBounties from "@/components/bounties/NavBounties";
import NewBounties from "@/components/bounties/NewBounties";
import StatsBanner from "@/components/bounties/StatsBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBounties />
      <StatsBanner />
      <NewBounties />
    </div>
  );
};

export default page;
