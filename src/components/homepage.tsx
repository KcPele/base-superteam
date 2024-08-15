import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Homepage = () => {
  return (
    <div className="bg-[url('/images/homepage-hero.png')] bg-cover pt-[260px] h-screen px-36">
      <div className="grid gap-12 my-16">
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Earn&#44; Create and Innovate
        </h1>
        <h1 className="text-7xl font-bold text-basewhite">
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
            <p className="group bg-baseblue hover:bg-transparent border border-baseblue hover:text-baseblue rounded-3xl w-44 hover:justify-between p-3 text-xs flex">
              For Bounty Owners{" "}
              <span>
                <MdKeyboardArrowRight className="text-lg" />{" "}
              </span>
            </p>
          </Link>
          <Link href={"/bounty"}>
            <p className="group bg-transparent hover:bg-baseblue hover:text-basewhite border border-baseblue rounded-3xl w-44 hover:justify-between p-3 text-baseblue text-xs flex">
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
