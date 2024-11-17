import React from "react";

const StatsBanner = () => {
  return (
    <div className="w-full h-[40vh] sm:h-[50vh] flex justify-center items-center bg-gradient-to-r from-[#22CC77] via-[#22CC77] to-[#318949] py-8 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-opacity-30"
        style={{ backgroundImage: "url(https://your-image-link.jpg)" }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-50"></div>

      <div className="flex flex-col items-center justify-center z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
          Discover Exciting Bounties & Earn Rewards
        </h1>

        <p className="text-lg sm:text-xl text-white mb-6">
          Take part in the latest bounties and contribute to amazing projects.
          Your effort, your reward. Join now and start earning!
        </p>

        <button className="bg-[#318949] text-white px-8 py-3 text-xl rounded-lg shadow-lg hover:bg-[#22CC77] transform hover:scale-105 transition-all duration-300">
          Start Earning Now
        </button>
      </div>
    </div>
  );
};

export default StatsBanner;
