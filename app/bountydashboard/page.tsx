import NavBounties from "@/components/bounties/NavBounties";
import BountyDashboard from "@/components/profile/BountyDashboard";
import React from "react";

const page = () => {
  return (
    <>
      {" "}
      <NavBounties />
      <BountyDashboard />
    </>
  );
};

export default page;
