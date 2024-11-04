import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full flex justify-center items-center pb-16">
      <div className="flex flex-col gap-16 w-[88%]">
        <div className="flex items-center gap-10">
          <p className="bg-[#8833FF] text-4xl px-2 py-1 rounded-lg font-medium">
            Contact Us
          </p>
          <p className="text-lg w-[36.5rem]">
            Connect with Us: Lets Discuss Your Digital Marketing Needs
          </p>
        </div>

        <div className="w-full flex flex-col px-24 py-20 bg-[#F3F3F3] rounded-3xl gap-6">
          <div className="flex flex-col gap-1 w-[55%]">
            <label className="text-black">Name</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Name"
              className="border border-black px-8 py-4 rounded-xl outline-none"
            />
          </div>

          <div className="flex flex-col gap-1 w-[55%]">
            <label className="text-black">Email*</label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Email"
              className="border border-black px-8 py-4 rounded-xl outline-none"
            />
          </div>

          <div className="flex flex-col gap-1 w-[55%]">
            <label className="text-black">Message*</label>
            <textarea
              name=""
              id="message"
              placeholder="Message"
              className="border border-black px-8 py-4 rounded-xl outline-none"
            ></textarea>
          </div>
          <button className="w-[55%] px-8 py-5 bg-[#191A23] rounded-xl text-white">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
