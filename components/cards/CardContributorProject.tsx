import React from "react";
import CardContributor from "./CardContributor";

const CardContributorProject = ({ project }: { project: string }) => {
  return (
    <div className="flex justify-center items-center w-[22%] text-black">
      <div className="bg-white box-background w-full flex flex-col justify-center items-center rounded-3xl p-4 gap-6">
        <p className="text-[#27104E] text-2xl font-bold">{project}</p>

        <div className="flex flex-col gap-4 justify-center items-center w-[95%]">
          <CardContributor img="/contributor-banner.jpeg" name="Rahul" skill="Blockchain Dev" />
          <CardContributor img="/contributor-banner.jpeg" name="Yugank" skill="Blockchain Dev" />
          <CardContributor img="/contributor-banner.jpeg" name="Ansh" skill="Blockchain Dev" />
        </div>

        <button className="bg-[#DDACF5] text-[#64379F] px-6 py-2 rounded-full font-semibold">
          See all
        </button>
      </div>
    </div>
  );
};

export default CardContributorProject;
