import React from "react";
import MessageCarousel from "./bounties/TestimonialsContent";

const Testimonials = () => {
  return (
    <div className="w-full flex justify-center items-center pb-8 sm:pb-16">
      <div className="flex flex-col gap-8 sm:gap-16 w-[88%]">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
          <p className="bg-gradient-to-b from-[#318949] to-[#22CC77] text-[#F3F3F3] text-3xl sm:text-4xl px-2 py-1 rounded-lg font-medium">
            Testimonials
          </p>
          <p className="text-lg text-center sm:text-start sm:w-[36.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>
        </div>
        <div className="w-full">
          <MessageCarousel />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
