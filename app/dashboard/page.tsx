import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-white">
        <div className="w-[60%] h-screen flex justify-start items-center">
          <Image
            src="/welcome.svg"
            width="252"
            height="300"
            className="w-full h-screen overflow-hidden absolute right-[28%] rounded-r-[6rem]"
            alt="welcome img"
          />
        </div>

        <div className="w-[40%] text-white flex flex-col justify-center gap-4 my-10 z-50">
          <p className="text-5xl font-extrabold text-[#1E1E1E]">Welcome</p>
          <p className="text-[#1E1E1E]">Are you a Contributor or a Sponsor?</p>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col w-[50%] cursor-pointer">
              <Link className="w-full" href="/contributorSetup">
                <button className="bg-[#1E1E1E] rounded-full text-lg py-3 w-full">
                  Contributor
                </button>
              </Link>
            </div>

            <div className="flex flex-col w-[50%] cursor-pointer">
              <Link href="/sponsorSetup" className="flex w-full">
                <button className="bg-[#1E1E1E] rounded-full text-lg py-3 w-full">
                  Sponsor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
