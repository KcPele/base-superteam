import React from "react";
import Link from "next/link";

export const Homepage = () => {
  return (
    <div className="bg-[url('/images/homepage-hero.png')] bg-fixed bg-cover bg-center bg-no-repeat gap-2 flex  flex-col h-screen px-4 sm:px-8 md:px-16 ">
      <div className=" flex-1 flex items-end ">
        <h1 className="pointer-events-none text-3xl sm:text-5xl lg:text-7xl whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Earn&#44; Create and Innovate
        </h1>
      </div>
      <div className="flex-1 ">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-basewhite">
          For Creators and Builders
        </h1>
        <div className="grid mt-6 gap-5 max-w-lg text-basewhite">
          <p>
            We integrate courses&#44; bounty listings&#44; creative hubs&#44;
            and on-chain activities into a seamless experience&#44; allowing you
            to engage with the Base ecosystem like never before.
          </p>

          <Link href={"/bounty"}>
            <p className="bg-baseblue rounded-3xl w-fit p-3 text-xs">
              Get Started
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
