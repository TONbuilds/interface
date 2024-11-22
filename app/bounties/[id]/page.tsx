"use client";
import NavBounties from "@/components/bounties/NavBounties";
import React from "react";
import { usePathname } from "next/navigation";
import BountyDetails from "@/components/bounties/BountyDetails/BountyDetails";

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
