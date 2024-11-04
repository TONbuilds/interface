"use client";
import React, { useState } from "react";
import ContributorNavbar from "@/components/contributor/ContributorNavbar";
import CurrentTasks from "@/components/contributor/CurrentTasks";
import CompletedTasks from "@/components/contributor/CompletedTasks";
import UpcomingTasks from "@/components/contributor/UpcomingTasks";
import CardContributorProject from "@/components/cards/CardContributorProject";

function ContributorDashboard({ name }: { name: string }) {
  const [activePage, setActivePage] = useState("CurrentTasks");
  return (
    <Layout>
      <div className="w-[85%]">
        <RenderPage />
      </div>
    </Layout>
  );

  function RenderPage() {
    if (activePage == "CurrentTasks") {
      return <CurrentTasks />;
    }
    if (activePage == "CompletedTasks") {
      return <CompletedTasks />;
    }
    if (activePage == "UpcomingTasks") {
      return <UpcomingTasks />;
    }
  }

  function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div
        className="w-full flex items-center flex-col gap-8 bg-white min-h-screen py-16 bg-cover"
        style={{ backgroundImage: "url('/grid.png')" }}
      >
        <div
          className="w-full h-full bg-cover bg-center rounded-lg flex justify-center items-center p-4"
          style={{ backgroundImage: "url('/contributor-banner.jpeg')" }}
        >
          <div className="flex justify-between items-center w-[90%] py-8">
            <div className="flex justify-center items-center gap-6">
              <div className="bg-white/35 h-[5rem] w-[5rem] rounded-full"></div>
              <div className="flex flex-col gap-3">
                <p className="text-2xl font-semibold text-white">
                  {name} Contributor User
                </p>
                <p className="text-sm font-medium text-black bg-[#5577FF]/40 w-fit py-1 px-2 rounded-2xl">
                  Contributor
                </p>
                <p className="text-white">
                  Welcome back! Here is your personalized Dashboard.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <button className="bg-black text-white px-4 py-2 rounded-lg">
                Update Profile
              </button>
              <button className="bg-white text-gray-500 px-4 py-2 rounded-lg">
                View Leaderboard
              </button>
            </div>
          </div>
        </div>

        <div className="w-[95%] mt-8 flex flex-col gap-8">
          <div className="text-[#56555C] text-5xl font-medium">
            <p>Tasks</p>
          </div>
          <ContributorNavbar
            setActivePage={setActivePage}
            activePage={activePage}
          />
        </div>
        {children}

        <div className="w-[95%] mt-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[#56555C] text-4xl">Profile Summary</p>
            <div className="flex h-[2px] bg-gray-400 rounded-full"></div>
          </div>
        </div>
        <div className="w-[95%]">
          <div className="flex flex-wrap justify-center gap-8">
            <CardContributorProject project="Design Projects" />
            <CardContributorProject project="Web Projects" />
            <CardContributorProject project="App Projects" />
          </div>
        </div>

        <div className="w-[95%] mt-8 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-[#56555C] text-4xl">Top Contributors</p>
            <div className="flex h-[2px] bg-gray-400 rounded-full"></div>
          </div>
        </div>
        <div className="w-[85%]">
          <div className="flex flex-wrap justify-start gap-8">
            <CardContributorProject project="Design Projects" />
            <CardContributorProject project="Web Projects" />
            <CardContributorProject project="App Projects" />
            <CardContributorProject project="Content Projects" />
          </div>
        </div>
      </div>
    );
  }
}

export default ContributorDashboard;
