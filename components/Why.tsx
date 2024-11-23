import React from "react";

const Why = () => {
  return (
    <div className="w-full flex justify-center items-center pb-8 sm:pb-16">
      <div className="flex flex-col gap-8 sm:gap-16 w-[88%]">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
          <p className="bg-gradient-to-b from-[#318949] to-[#22CC77] text-[#F3F3F3] text-3xl sm:text-4xl px-2 py-1 rounded-lg font-medium">
            Why Us?
          </p>
          <p className="text-lg text-center sm:text-start sm:w-[36.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full px-6 py-8 sm:px-[60px] sm:py-[70px] bg-[#191A23] rounded-3xl gap-8 sm:gap-16">
          <div className="flex flex-col items-start gap-5 border-b-2 sm:border-b-0 pb-8 sm:pb-0">
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
            <button className="text-transparent bg-clip-text bg-gradient-to-b from-[#318949] to-[#22CC77] text-xl">Learn More</button>
          </div>

          <div className="flex flex-col items-start gap-5 border-b-2 sm:border-b-0 pb-8 sm:pb-0">
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
            <button className="text-transparent bg-clip-text bg-gradient-to-b from-[#318949] to-[#22CC77] text-xl">Learn More</button>
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
            <button className="text-transparent bg-clip-text bg-gradient-to-b from-[#318949] to-[#22CC77] text-xl">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
