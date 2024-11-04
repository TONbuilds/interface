import React from "react";

const NavItems = ({
  section_name,
  isActive,
}: {
  section_name: string;
  page_name: string;
  isActive: boolean;
}) => {
  return (
    <div
      className={`items-center py-2 px-4 gap-2 flex text-sm rounded-lg font-medium ${
        isActive
          ? "bg-[#5577FF] text-white border border-transparent"
          : " text-[#82808F] border border-gray-500"
      } `}
    >
      <p className="">{`${section_name}`}</p>
    </div>
  );
};

export default NavItems;
