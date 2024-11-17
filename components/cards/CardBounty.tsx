import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CardBounty = ({
  event,
  id,
  days,
  img,
  amount,
}: {
  event: string;
  company: string;
  days: number;
  img: any;
  amount: string;
  id: string;
}) => {
  const router = useRouter();
  const handleCardClick = (id: string) => {
    router.push(`/bounties/${id}`);
  };
  return (
    <div
      className="w-full sm:w-1/2 lg:w-[100%] xl:w-[100%] p-4"
      onClick={() => handleCardClick(id)}
      style={{ cursor: "pointer" }}
    >
      {" "}
      <div className="flex flex-col gap-4 border border-[#E0E0E0] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Title and Company Logo */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-[80%]">
            <p className="text-[#2D3748] font-semibold text-2xl">{event}</p>
          </div>
          <div className="flex justify-center items-center w-16 h-16">
            <Image
              src={img}
              height={60}
              width={60}
              alt="company logo"
              className="object-cover rounded-full shadow-md"
            />
          </div>
        </div>

        {/* End Date and Bounty Section */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col">
            <p className="text-[#718096] font-medium text-sm mb-0">
              Ends in {days}d
            </p>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Image
              src="/ton_symbol.svg"
              height={20}
              width={20}
              alt="ton symbol"
            />
            <p className="text-[#475569] text-xl font-medium mb-0">
              {amount} TON
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBounty;
