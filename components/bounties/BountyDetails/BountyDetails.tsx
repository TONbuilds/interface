"use client";
import React, { useEffect } from "react";
import s from "./BountyDetails.module.scss";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Spin } from "antd";

import BountySubmission from "../BountySubmission/BountySubmission";
import calculateDaysDifference from "@/components/utils/DayCalculation";
import { useBounties } from "@/hooks/useBounties";

interface BountyDetailsProps {
  postId: string;
}

const BountyDetails = ({ postId }: BountyDetailsProps) => {
  const { handleFetchBountyDetails, selectedBounty, status, error } =
    useBounties();

  useEffect(() => {
    const fetchSingleBountyData = async () => {
      try {
        await handleFetchBountyDetails(postId);
      } catch (err) {
        console.error("Error fetching single bounty:", err);
      }
    };

    if (!selectedBounty || selectedBounty._id !== postId) {
      fetchSingleBountyData();
    }
  }, [postId, handleFetchBountyDetails, selectedBounty]);

  const prize = selectedBounty?.bounty.prize
    ? (selectedBounty.bounty.prize / 1000).toString()
    : "";

  if (error) return <div>Error loading data</div>;
  if (status === "loading") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div className={s.root}>
      <div className={s.top}>
        <div className={s.left}>
          <div className={s.title}>
            {" "}
            {selectedBounty?.bounty.title || "Bounty Details"}
          </div>
          <div className={s.subTitle}>SOON</div>
          <div className={s.des}>
            <div className={s.bounty}>
              <Image src="/grayStar.svg" alt="" width={10} height={10} />
              <p>Bounty</p>
            </div>
            <div className={s.end}>
              <p>
                Ends in{" "}
                {calculateDaysDifference(selectedBounty?.bounty.endDate || "")}d
              </p>
            </div>
            <div className={s.message}>
              <Image src="/message.svg" alt="" width={10} height={10} />
              <p>27</p>
            </div>
            {/* <div className={s.featured}>
              <Image src="/green.svg" alt="" width={10} height={10} />
              <p>FEATURED</p>
            </div> */}
          </div>
          <div className={s.ton}>
            <Image src="/ton_symbol.svg" alt="" width={16} height={16} />
            <p>
              {prize}k <span>TON</span>
            </p>
          </div>
        </div>
        <div className={s.right}>
          <Image
            src={selectedBounty?.company.logo || "/defaultLogo.png"}
            alt=""
            width={64}
            height={64}
          />
        </div>
      </div>
      <div className={s.skills}>
        <h2 className={s.title}>SKILLS NEEDED</h2>
        <div className={s.desc}>
          <p>Frontend</p>
          <p>Backend</p>
          <p>BlockChain</p>
          <p>Mobile</p>
          <p>Design</p>
        </div>
      </div>
      <div className={s.nav}>
        <div className={s.prize}>
          <p>Prizes</p>
        </div>
        <div className={s.details}>
          <p>Details</p>
        </div>
      </div>
      <div className={s.wrapper}>
        <div className={s.left}>
          <BountySubmission
            postId={postId}
            endDate={selectedBounty?.bounty.endDate || ""}
            prize={selectedBounty?.bounty.prize || NaN}
          />
        </div>
        <div className={`markdown ${s.right}`}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {selectedBounty?.bounty.description || "markdownContent"}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BountyDetails;
