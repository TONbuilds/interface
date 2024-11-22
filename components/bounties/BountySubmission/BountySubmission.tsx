import React from "react";
import s from "./BountySubmission.module.scss";
import Image from "next/image";
import TimeCounter from "@/components/utils/TimeCounter";
import SubmissionModal from "@/components/antdForm/SubmissionModal";

const rewards = [
  { amount: "11k", currency: "USDC", position: "1st" },
  { amount: "8000", currency: "USDC", position: "2nd" },
  { amount: "6000", currency: "USDC", position: "3rd" },
  { amount: "5000", currency: "USDC", position: "4th" },
  { amount: "4000", currency: "USDC", position: "5th" },
  { amount: "2000", currency: "USDC", position: "6th-8th" },
];

interface BountySubmissionProps {
  postId: string;
}

const BountySubmission: React.FC<BountySubmissionProps> = ({ postId }) => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <div className={s.left}>
          <div className={s.first}>
            <Image src="/suitcase.svg" alt="" width={23} height={22} />
            <p>10</p>
          </div>
          <div className={s.second}>
            <p>Submissions</p>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.first}>
            <Image src="/clock.svg" alt="" width={23} height={23} />
            {/* <p>8d:6h:34m</p> */}
            <TimeCounter targetDate="2024-12-31T23:59:59" />
          </div>
          <div className={s.second}>
            <p>Remaining</p>
          </div>
        </div>
      </div>
      <div className={s.btnWrapper}>
        <SubmissionModal postId={postId} />
      </div>
      <div className={s.prizeDistribution}>
        <div className={s.total}>
          <Image src="/dollar.png" alt="" width={32} height={32} />
          <p>
            40k <span className="usdc">USDC</span>
            <span>Total Prizes</span>
          </p>
        </div>
        <div className={`reward-positions ${s.positions}`}>
          {rewards.map((reward, index) => (
            <div className={s.wrapper} key={index}>
              <div className={s.circle}></div>
              <div className={s.content}>
                {reward.amount} <span className="usdc">{reward.currency}</span>{" "}
                <span> {reward.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BountySubmission;
