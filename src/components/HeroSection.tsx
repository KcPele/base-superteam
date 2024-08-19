import React from "react";
import { SearchBounty } from "./bounty-component/SearchBounty";
import ShinyButton from "./magicui/shiny-button";
import ShimmerButton from "./magicui/shimmer-button";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="bg-[url('/images/hero-image.png')] bg-cover text-center pt-[150px]">
      <h1 className="text-3xl md:text-4xl lg:text-[46.78px] font-bold text-baseblack px-2">
        The Home of Bounties
      </h1>
      <div className="bg-[url('/images/hero-image-2.png')] grid gap-10 px-2 bg-cover bg-blend-multiply bg-baseblack text-basewhite">
        <p className="font-semibold md:text-[20px] md:w-[448.57px] mx-auto">
          Where projects and talents come together to build, inspire, and
          innovate.
        </p>
        <div className="flex justify-center gap-3">
          <Link href={"/create-project"}>
            <p className="page-transition bg-transparent border border-white rounded-full w-44 justify-center hover:justify-between px-4 py-2 text-xs flex">
              For Bounty Owners{" "}
              <span>
                <MdKeyboardArrowRight className="page-transition text-lg" />{" "}
              </span>
            </p>
          </Link>
          <Link href={"/bounty"}>
            <p className="page-transition bg-transparent border border-white rounded-full w-44 justify-center hover:justify-between px-4 py-2 text-xs flex">
              For Talents{" "}
              <span>
                <MdKeyboardArrowRight className="page-transition text-lg" />{" "}
              </span>
            </p>
          </Link>
        </div>
        <SearchBounty />
      </div>
    </div>
  );
};
