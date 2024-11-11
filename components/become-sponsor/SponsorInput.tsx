import React from "react";
import HostCompetition from "./HostCompetition";

const SponsorInput = () => {
  return (
    <div className="flex justify-center w-[50%]">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[#2D3748] text-2xl font-medium">
            Welcome to XYZ
          </h2>
          <p className="text-[#A0AEC0] text-xl font-medium">
            Lets start with some basic information about your company
          </p>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <h3 className="text-xl text-[#475569] font-medium">About You</h3>
          <div className="flex items-center justify-center">
            <div className="flex flex-col w-[50%] gap-1">
              <label className="text-[#64748B] font-medium">First Name</label>
              <input
                type="text"
                name="first"
                id="first"
                className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
              />
            </div>
            <div className="flex flex-col w-[50%] gap-1">
              <label className="text-[#64748B] font-medium">Last Name</label>
              <input
                type="text"
                name="last"
                id="last"
                className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#64748B] font-medium">Username</label>
            <input
              type="text"
              name="username"
              id="usename"
              className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
            />
          </div>
          <div>
            <label className="text-[#64748B] font-medium flex flex-col gap-1 cursor-pointer">
              <p>Profile Picture</p>
              <div className="flex flex-col items-center p-6 border rounded-lg">
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input type="file" name="file_upload" className="hidden" />
            </label>
          </div>
          <div className="flex w-full h-[1px] bg-[#94A3B8]"></div>
          <div className="flex flex-col gap-6 w-full">
            <h3 className="text-xl text-[#475569] font-medium">
              About Your Company
            </h3>
            <div className="flex items-center justify-center">
              <div className="flex flex-col w-[50%] gap-1">
                <label className="text-[#64748B] font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company_name"
                  id="company_username"
                  className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
                />
              </div>
              <div className="flex flex-col w-[50%] gap-1">
                <label className="text-[#64748B] font-medium">
                  Company Username
                </label>
                <input
                  type="text"
                  name="company_username"
                  id="company_username"
                  className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col w-[50%] gap-1">
                <label className="text-[#64748B] font-medium">
                  Company URL
                </label>
                <input
                  type="url"
                  name="company_url"
                  id="url"
                  className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
                />
              </div>
              <div className="flex flex-col w-[50%] gap-1">
                <label className="text-[#64748B] font-medium">
                  Company Twitter
                </label>
                <input
                  type="text"
                  name="company_twitter"
                  id="company_twitter"
                  className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#64748B] font-medium">Entity Name</label>
              <input
                type="text"
                name="entity"
                id="entity"
                className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
              />
            </div>
            <div>
              <label className="text-[#64748B] font-medium flex flex-col gap-1 cursor-pointer">
                <p>Company Logo</p>
                <div className="flex flex-col items-center p-6 border rounded-lg">
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input type="file" name="file_upload" className="hidden" />
              </label>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#64748B] font-medium">Industry</label>
              <input
                type="text"
                name="industry"
                id="industry"
                className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#64748B] font-medium">
                Company Short Bio
              </label>
              <input
                type="text"
                name="industry"
                id="industry"
                placeholder="What does your company do?"
                className="outline-none border border-[#D7DEDD] rounded-lg px-4 py-[6px]"
              />
            </div>
          </div>
        </div>
        <HostCompetition />
      </div>
    </div>
  );
};

export default SponsorInput;
