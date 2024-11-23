import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CardBounty = ({
  title,
  description,
  id,
  endDate,
  img,
  amount,
}: {
  title: string;
  description: string;
  company: string;
  endDate: string;
  img: any;
  amount: string;
  id: string;
}) => {
  const router = useRouter();
  const handleCardClick = (id: string) => {
    router.push(`/bounties/${id}`);
  };
  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  return (
    <div
      className="w-full sm:w-1/2 lg:w-[100%] xl:w-[100%] p-4"
      onClick={() => handleCardClick(id)}
      style={{ cursor: "pointer" }}
    >
      {" "}
      <div className="flex flex-col gap-4 border border-[#E0E0E0] bg-[#FFFFFF] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-center">
          <div className="flex items-center w-[100%] justify-between">
            <p className="text-[#2D3748] font-semibold text-2xl mb-0">
              {title}
            </p>
            <div className="flex justify-center items-center w-16 h-16">
              <Image
                src={img}
                height={70}
                width={70}
                alt="company logo"
                className="object-cover rounded-full shadow-md"
              />
            </div>
          </div>
        </div>
        <p className="text-sm text-[#718096] mt-2 break-words truncate-text">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {description}
          </ReactMarkdown>
        </p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col">
            <p className="text-[#718096] font-medium text-sm mb-0">
              End Date: {formatDate(endDate)}
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
