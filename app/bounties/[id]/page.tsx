"use client";
import NavBounties from "@/components/bounties/NavBounties";
import StatsBanner from "@/components/bounties/StatsBanner";
import React from "react";
import BountyDetails from "@/components/bounties/BountyDetails";
import { usePathname } from "next/navigation";

const Page = () => {
  const path = usePathname();
  const postId = path.split("/")[2];
  return (
    <div>
      <NavBounties />
      {/* <StatsBanner /> */}
      <BountyDetails postId={postId} />
    </div>
  );
};

export default Page;
