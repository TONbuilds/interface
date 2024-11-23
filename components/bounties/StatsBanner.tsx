import React from "react";
import { ChevronRight, Star, Sparkles } from 'lucide-react';


const StatsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#CCCCB2] to-[#757519] py-24">
      <div className="max-w-6xl mx-auto px-4">
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
