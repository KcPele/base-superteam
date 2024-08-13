import React from "react";
import { SearchBounty } from "./search-bounty";
import ShimmerButton from "./magicui/shimmer-button";

export const HeroSection = () => {
  return (
    <div className="bg-[url('/images/hero-image.png')]  bg-cover bg-center bg-no-repeat h-screen  gap-2 flex  flex-col px-4 sm:px-8 md:px-16 ">
      <div className=" flex-1 flex items-end justify-center">
        <div className="pb-10">
          <h1 className="text-4xl xs:text-[46.78px]  text-center   font-bold text-baseblack">
            The Home of Bounties
          </h1>
        </div>
      </div>
      <div className="flex-1 text-center">
        <p className="text-[20px] max-w-[448.57px]  mx-auto text-basewhite">
          Where projects and talents come together to build, inspire, and
          innovate.
        </p>
        <div className="flex gap-3 flex-col xs:flex-row justify-center">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-xs font-medium leading-none p-2 tracking-tight text-basewhite">
              For Bounty Owners
            </span>
          </ShimmerButton>
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-xs font-medium leading-none p-2 tracking-tight text-basewhite">
              For Talents
            </span>
          </ShimmerButton>
        </div>
        <SearchBounty />
      </div>
    </div>
  );
};
