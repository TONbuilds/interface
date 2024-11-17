"use client";
import React, { useEffect, useState } from "react";
import { useBounties } from "@/hooks/useBounties";
import CardBounty from "../cards/CardBounty";
import { Spin } from "antd";

const NewBounties = () => {
  const { handleFetchBounties, bounties, status, error } = useBounties();
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const fetchBountiesData = async () => {
      try {
        await handleFetchBounties();
        setIsFetched(true);
      } catch (err) {
        console.error("Error fetching bounties:", err);
      }
    };
    if (!isFetched) {
      fetchBountiesData();
    }
  }, [status, handleFetchBounties]);

  return (
    <div className="w-full flex justify-center items-center pb-8 mt-10">
      <div className="flex flex-col w-[90%] gap-6 bg-[#FFFFFF] p-4 rounded-md">
        {status === "loading" && (
          <div className="w-full flex justify-center items-center">
            {" "}
            <Spin size="large" />
          </div>
        )}
        {status === "failed" && <p>Error: {error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          {" "}
          {status === "succeeded" &&
            bounties.map((bounty) => (
              <CardBounty
                key={bounty._id}
                event={bounty.title}
                company={bounty.userId._id}
                id={bounty._id}
                days={Math.max(
                  0,
                  Math.ceil(
                    (new Date(bounty.endDate).getTime() - Date.now()) /
                      (1000 * 60 * 60 * 24)
                  )
                )}
                img={bounty.logo || "/default-bounty.png"}
                amount={`${bounty.bounty}k`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewBounties;
