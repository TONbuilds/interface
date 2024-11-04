import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full flex justify-center items-center pb-16">
      <div className="flex flex-col gap-16 w-[88%]">
        <div className="flex items-center gap-10">
          <p className="bg-[#8833FF] text-4xl px-2 py-1 rounded-lg font-medium">
            Testimonials
          </p>
          <p className="text-lg w-[36.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>
        </div>
        <div className="w-full">
          <Image
            width={100}
            height={100}
            src="/TestimonialsBlock.svg"
            alt="testimonials"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
