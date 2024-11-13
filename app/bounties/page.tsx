import CustomSearch from "@/components/bounties/CustomSearch";
import NavBounties from "@/components/bounties/NavBounties";
import NewBounties from "@/components/bounties/NewBounties";
import RecentEarnings from "@/components/bounties/RecentEarnings";
import StatsBanner from "@/components/bounties/StatsBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBounties />
      <StatsBanner />
      <CustomSearch />
      <RecentEarnings />
      <NewBounties company="A.D. New Ventures" />
    </div>
  );
};

export default page;
