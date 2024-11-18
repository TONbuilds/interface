"use client";
import React from "react";
import Auth from "@/components/auth/Auth";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NavBounties = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const handleButtonClick = () => {
    if (token) {
      router.push("/become-sponsor");
    } else {
      <Auth trigger={true} />;
      alert("Please login to become a sponsor");
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-2">
      <div className="flex justify-between items-center w-[92%]">
        <Link href="/">
          <Image src="/tonBuild.svg" alt="Logo" width={50} height={50} />
        </Link>
        <div className="flex items-center gap-12 navbar-link-wrapper">
          <Link href="/">Home</Link>
          <Link href="/bounties">Bounties</Link>
          <Link href="/#contact-us">Contact Us</Link>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleButtonClick}
            className="px-4 py-1.5 bg-[#0AD372] text-white font-medium border border-[#0AD372] rounded-xl font-16"
          >
            Become Sponsor
          </button>
          {/* <Link href="/profile">
            <button className="px-4 py-2 text-lg font-bold text-[#0AD372] border rounded-xl">
              Profile
            </button>
          </Link> */}
          <Auth trigger={false} />
        </div>
      </div>
    </div>
  );
};

export default NavBounties;
