import React from "react";

const Why = () => {
  return (
    <div className="w-full flex justify-center items-center pb-16">
      <div className="flex flex-col gap-16 w-[88%]">
        <div className="flex items-center gap-10">
          <p className="bg-[#8833FF] text-4xl px-2 py-1 rounded-lg font-medium">
            Why Us?
          </p>
          <p className="text-lg w-[36.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>
        </div>

        <div className="flex w-full px-[60px] py-[70px] bg-[#191A23] rounded-3xl gap-16">
          <div className="flex flex-col items-start gap-5">
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
            <button className="text-[#8833FF] text-xl">Learn More</button>
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
            <button className="text-[#8833FF] text-xl">Learn More</button>
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
            <button className="text-[#8833FF] text-xl">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
