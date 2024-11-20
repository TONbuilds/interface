import React from "react";
import { ChevronRight, Star, Sparkles } from 'lucide-react';


const StatsBanner = () => {
  return (
    // <div className="w-full h-[40vh] sm:h-[60vh] lg:h-[50vh] flex justify-center items-center bg-gradient-to-r from-[#CCCCB2] to-[#757519] py-8 relative overflow-hidden px-4 sm:px-4">
    //   <div
    //     className="absolute inset-0 bg-cover bg-center bg-opacity-30"
    //     style={{ backgroundImage: "url(https://your-image-link.jpg)" }}
    //   ></div>

    //   <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-50"></div>

    //   <div className="flex flex-col items-center justify-center z-10 text-center">
    //     <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
    //       Discover Exciting Bounties & Earn Rewards
    //     </h1>

    //     <p className="text-base sm:text-lg md:text-xl text-white mb-6 px-4 sm:px-8">
    //       Take part in the latest bounties and contribute to amazing projects.
    //       Your effort, your reward. Join now and start earning!
    //     </p>

    //     <button className="bg-[#757519] text-white px-6 py-3 text-lg sm:px-8 sm:py-4 sm:text-xl rounded-lg shadow-lg hover:bg-[#22CC77] transform hover:scale-105 transition-all duration-300">
    //       Start Earning Now
    //     </button>
    //   </div>
    // </div>

    <div className="relative overflow-hidden bg-gradient-to-r from-[#CCCCB2] to-[#757519] py-24">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        {/* <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#757519] rounded-full blur-xl"></div> */}
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Main content */}
        <div className="space-y-8 text-center">
          <div className="flex items-center justify-center gap-2 text-white/90">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Welcome to the Future of Bounties</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Discover Exciting Bounties 
            <span className="block mt-2">&amp; Earn Rewards</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            Take part in the latest bounties and contribute to amazing projects. 
            Your effort, your reward. Join now and start earning!
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="inline-flex items-center px-8 py-4 bg-white text-[#757519] rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all group">
              Start Earning Now
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="inline-flex items-center px-8 py-4 bg-[#DFDCC0] text-[#757519] hover:bg-[#D4CFAE] rounded-lg font-semibold transition-all">
              <Star className="mr-2 w-4 h-4" />
              View Bounties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
