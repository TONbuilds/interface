import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center py-0">
      <div className="flex justify-between items-center w-[90%]">
        <Link href="/">
          <Image src="/tonBuild.svg" alt="Logo" width={50} height={50} />
        </Link>{" "}
        <div className="flex justify-center items-center gap-8 text-lg">
          <p>About Us</p>
          <p>Services</p>
          <p>Use Cases</p>
          <p>Pricing</p>
          <p>Blog</p>
          <Link href="/bounties">
            <button className="flex border border-[#000000] rounded-xl px-6 py-4 text-base">
              Launch App
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
