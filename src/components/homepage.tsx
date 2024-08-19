import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Homepage = () => {
  return (
    <div className="bg-[url('/images/homepage-hero.png')] bg-cover pt-80 lg:pt-[260px] h-screen px-4 md:px-10 lg:px-32">
      <div className="grid gap-12 my-16 md:my-10 lg:my-20">
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-4xl md:text-6xl lg:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Earn&#44; Create and Innovate
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-basewhite">
          For Creators and Builders
        </h1>
      </div>
      <div className="grid gap-5 max-w-lg text-basewhite">
        <p className="font-light">
          We integrate courses&#44; bounty listings&#44; creative hubs&#44; and
          on-chain activities into a seamless experience&#44; allowing you to
          engage with the Base ecosystem like never before.
        </p>

        <div className="flex gap-3">
          <Link href={"/bounty"}>
            <p className="page-transition page-tra group bg-baseblue hover:bg-transparent border border-baseblue hover:text-baseblue rounded-full w-44 hover:justify-between px-4 py-2 text-xs flex">
              For Bounty Owners{" "}
              <span>
                <MdKeyboardArrowRight className="page-transition text-lg" />{" "}
              </span>
            </p>
          </Link>
          <Link href={"/bounty"}>
            <p className="page-transition group bg-transparent hover:bg-baseblue hover:text-basewhite border border-baseblue rounded-full w-36 hover:justify-between px-4 py-2 text-baseblue text-xs flex">
              For Talents{" "}
              <span>
                <MdKeyboardArrowRight className="text-lg" />{" "}
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
