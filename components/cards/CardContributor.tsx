import Image from "next/image";
import React from "react";

const CardContributor = ({
  img,
  name,
  skill,
}: {
  img: string;
  name: string;
  skill: string;
}) => {
  return (
    <div className="flex justify-center items-center w-full text-black">
      <div className="bg-[#FCFBFF] box-background w-full flex flex-col justify-center items-center rounded-2xl p-2 gap-6">
        <div className="flex items-center w-full gap-2">
          <Image width={100} height={100} src={img} alt={name} className="w-[3rem] h-[3rem] rounded-full" />
          <div className="flex flex-col gap-1">
            <p className="text-[#27104E] text-xl font-semibold">{name}</p>
            <p className="text-[#27104E80]">{skill}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContributor;
