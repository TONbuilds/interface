import Link from "next/link";
import React from "react";

const NavBounties = () => {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <div className="flex justify-between items-center w-[92%]">
        <div>Logo</div>
        <div className="flex items-center gap-12">
          <p>Bounties</p>
          <p>Projects</p>
          <p>Contact</p>
          <p>About Us</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/become-sponsor">
            <button className="px-4 py-2 bg-[#0AD372] text-white font-medium border border-[#0AD372] rounded-xl">
              Become Sponsor
            </button>
          </Link>
          <Link href="/profile">
            <button className="px-4 py-2 text-lg font-bold text-[#0AD372] border rounded-xl">
              Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBounties;
