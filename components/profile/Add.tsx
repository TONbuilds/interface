"use client";
import React, { useState } from "react";

const Add = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <button
        onClick={togglePopup}
        className="bg-gradient-to-b from-[#318949] to-[#22CC77] py-2 rounded-lg text-white w-full"
      >
        Add
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-[4px] z-10">
          <div className="pop-background border border-[#D7DEDD] bg-[#FAF9F9] rounded-2xl flex flex-col w-[50%] shadow-lg p-8 overflow-y-auto h-[90vh]">
            <h2 className="text-3xl font-bold mb-4">Add Project</h2>
            <div className="h-[1px] bg-black/[0.4] w-full"></div>
            <div className="flex flex-col items-center gap-3 mt-4 w-full">
              <div className="flex flex-col justify-center gap-1 w-[60%]">
                <label className="text-[#333333] text-lg font-semibold">
                  Project Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="outline-none border border-[#D7DEDD] rounded-lg px-6 py-[6px]"
                />
              </div>
              <div className="flex flex-col justify-center gap-1 w-[60%]">
                <label className="text-[#333333] text-lg font-semibold">
                  Project Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="desc"
                  className="outline-none border border-[#D7DEDD] rounded-lg px-6 py-[6px]"
                />
              </div>
              <div className="flex flex-col justify-center gap-1 w-[60%]">
                <label className="text-[#333333] text-lg font-semibold">
                  Skills Used
                </label>
                <input
                  type="text"
                  name="skills"
                  id="skills"
                  className="outline-none border border-[#D7DEDD] rounded-lg px-6 py-[6px]"
                />
              </div>
              <div className="flex flex-col justify-center gap-1 w-[60%]">
                <label className="text-[#333333] text-lg font-semibold">
                  Date of Completion
                </label>
                <input
                  type="date"
                  name="doc"
                  id="doc"
                  className="outline-none border border-[#D7DEDD] rounded-lg px-6 py-[6px]"
                />
              </div>
              <div className="flex flex-col justify-center gap-1 w-[60%]">
                <label className="text-[#333333] text-lg font-semibold">
                  Project Link
                </label>
                <input
                  type="url"
                  name="link"
                  id="link"
                  className="outline-none border border-[#D7DEDD] rounded-lg px-6 py-[6px]"
                />
              </div>
              <div className="flex flex-col justify-center gap-1 w-[60%]">
                <label className="text-[#333333] text-lg font-semibold">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="outline-none border border-[#D7DEDD] rounded-lg px-6 py-[6px]"
                />
              </div>
            </div>

            <div className="w-full mt-20">
              <button className="bg-gradient-to-b from-[#318949] to-[#22CC77] py-2 rounded-lg text-white w-full">
                Submit
              </button>
            </div>
            {/* <div className="flex justify-center items-center w-full bg-black bg-opacity-70 mt-6">
              <button
                onClick={togglePopup}
                className="mt-6 subscribe-button text-white font-bold py-2 px-4 rounded"
              >
                Close Popup
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Add;
