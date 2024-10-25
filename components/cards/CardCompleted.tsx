import React from "react";

const CardCompleted = ({
  date,
  task,
  category,
  progress,
  days_left,
}: {
  date: string;
  task: string;
  category: string;
  progress: number;
  days_left: number;
}) => {
  return (
    <div className="flex justify-center items-center w-[22%] text-black">
      <div className="bg-white box-background w-full flex flex-col justify-center rounded-3xl p-4 gap-6">
        <p className="text-[#D9D9D9] text-lg font-semibold">{date}</p>
        <div className="w-[95%] flex justify-center">
          <div className="flex flex-col gap-3 w-[98%] ">
            <h2 className="text-[#27104E] text-2xl font-bold">{task}</h2>
            <p className="text-[#27104E] text-lg">{category}</p>
            <div className="bg-[#32D583] w-full h-[0.5rem] rounded-full"></div>
            <div className="flex justify-between text-lg text-[#27104E]">
              <p>Progress</p>
              <p>{progress}%</p>
            </div>
          </div>
        </div>
        <div className="h-[4px] rounded-full bg-[#D9D9D980]/50"></div>
        <div className="flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <div>
              <div className="w-[2rem] h-[2rem] bg-black/20 rounded-full absolute"></div>
              <div className="w-[2rem] h-[2rem] bg-black/20 rounded-full relative left-4  "></div>
            </div>
            <div className="w-[2rem] h-[2rem] bg-[#7580E8] rounded-full text-white flex justify-center items-center text-2xl">
              +
            </div>
          </div>
          <div className="bg-[#DCDFF9] px-3 py-1 rounded-full text-[#7580E8] font-semibold">
            {days_left} days left
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCompleted;
