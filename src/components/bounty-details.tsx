import Image from "next/image";
import React from "react";
import { DataProp } from "../../dummy-data";
import { FaRegBell } from "react-icons/fa";

export const BountyDetails = ({ getData }: any) => {
  return (
    <div>
      <div className="bg-basewhite font-semibold gap-2 flex flex-col sm:flex-row sm:items-center px-4 sm:px-8 md:px-16  pt-40 pb-10 justify-between">
        <div className="flex flex-col gap-2 max-w-lg">
          <p className="text-lg text-baseblack">{getData.title}</p>
          <p className="text-xl sm:text-3xl text-baseblack">{getData.task}</p>
        </div>
        <div className="flex flex-col sm:text-end gap-2">
          <p className="text-[#999999] text-xs font-semibold  text-nowrap">
            PRIZE REWARD
          </p>
          <div className="flex gap-2 ">
            <Image
              src={getData.reward_image}
              alt="icon"
              height={20}
              width={20}
            />
            <p className="text-lg font-semibold text-baseblack text-nowrap">
              {getData.reward}
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-basebgblack  py-16 px-4 sm:px-8 md:px-16 flex gap-2 flex-col md:flex-row  ">
        <div className=" flex flex-col gap-3 ">
          <p className="text-basewhite text-lg">About Listing and Space</p>
          <p className="text-basebrown">
            Is making content your speciality? Well here&lsquo;s a Bounty for
            you! We&lsquo;re looking for individuals who are able to share
            educational content about what&lsquo;s happening in the ever growing
            Solana Ecosystem
          </p>
          <p className="text-basewhite text-lg">Scope</p>
          <p className="text-basebrown">
            Is making content your speciality? Well here&lsquo;s a Bounty for
            you! We&lsquo;re looking for individuals who are able to share
            educMission: Make a 1min educational video that talks about
            what&lsquo;s currently happening in the Solana Ecosystem that would
            be informative to @SuperteamMY followersational content about
            what&lsquo;s happening in the ever growing Solana Ecosystem
          </p>
          <p className="text-basewhite text-lg">About Listing and Space</p>
          <p className="text-basebrown">
            Is making content your speciality? Well here&lsquo;s a Bounty for
            you! We&lsquo;re looking for individuals who are able to share
            educational content about what&lsquo;s happening in the ever growing
            Solana Ecosystem
          </p>
          <p className="text-basewhite text-lg">About Listing and Space</p>
          <p className="text-basebrown">
            Is making content your speciality? Well here&lsquo;s a Bounty for
            you! We&lsquo;re looking for individuals who are able to share
            educational content about what&lsquo;s happening in the ever growing
            Solana Ecosystem
          </p>
          <p className="text-basewhite text-lg">About Listing and Space</p>
          <p className="text-basebrown">
            Is making content your speciality? Well here&lsquo;s a Bounty for
            you! We&lsquo;re looking for individuals who are able to share
            educational content about what&lsquo;s happening in the ever growing
            Solana Ecosystem
          </p>
        </div>
        <div className="w-full grid grid-flow-row gap-4 p-3 sm:p-6 rounded-lg shadow-md bg-baseblack h-fit">
          <div className=" flex gap-2 items-center justify-between">
            {" "}
            <p className="text-sm xs:text-base text-basebrown text-nowrap">
              Grand Prize
            </p>
            <div className="flex items-center  justify-between gap-1">
              <div className="w-5 h-5">
                <Image
                  src={getData.reward_image}
                  alt="icon"
                  height={20}
                  width={20}
                />
              </div>
              <p className="text-sm xs:text-lg text-basewhite text-nowrap">
                3&#44;500 USDT
              </p>
            </div>
          </div>
          <div className="bg-basebrown p-[0.3px]"></div>
          <div className="flex gap-2 items-center justify-between">
            <p className="text-basebrown text-sm xs:text-base">First Prize</p>
            <div className="flex items-center  justify-between gap-1">
              <div className="w-5 h-5">
                <Image
                  src={getData.reward_image}
                  alt="icon"
                  height={20}
                  width={20}
                />
              </div>
              <p className="text-sm xs:text-lg text-basewhite text-nowrap">
                1&#44;500 USDT
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <p className="text-basebrown text-sm xs:text-base">Second Prize</p>
            <div className="flex items-center  justify-between gap-1">
              <div className="w-5 h-5">
                <Image
                  src={getData.reward_image}
                  alt="icon"
                  height={20}
                  width={20}
                />
              </div>
              <p className="text-sm xs:text-lg text-basewhite text-nowrap">
                1&#44;000 USDT
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <p className="text-basebrown text-sm xs:text-base">Third Prize</p>
            <div className="flex items-center  justify-between gap-1">
              <div className="w-5 h-5">
                <Image
                  src={getData.reward_image}
                  alt="icon"
                  height={20}
                  width={20}
                />
              </div>
              <p className="text-sm xs:text-lg text-basewhite text-nowrap">
                500 USDT
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <p className="text-basebrown text-sm xs:text-base">Participation</p>
            <div className="flex items-center  justify-between gap-1">
              <div className="w-5 h-5">
                <Image
                  src={getData.reward_image}
                  alt="icon"
                  height={20}
                  width={20}
                />
              </div>
              <p className="text-sm xs:text-lg text-basewhite text-nowrap">
                5 USDT
              </p>
            </div>
          </div>
          <div className="bg-basebrown p-[0.3px]"></div>
          <div className="flex justify-between">
            <p className="text-basebrown text-sm xs:text-lg">Due in</p>
            <p className="text-basebrown text-sm xs:text-lg">
              {getData.ends_in} days
            </p>
          </div>
          <div className="flex gap-1 items-center justify-between mt-2 text-basewhite">
            <button className="flex gap-1 items-center justify-between ">
              <FaRegBell /> <span>Interested</span>
            </button>
            <button className="bg-baseblue rounded-3xl p-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
