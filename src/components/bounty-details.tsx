import Image from "next/image";
import React from "react";
import { DataProp } from "../../dummy-data";
import { FaRegBell } from "react-icons/fa";

export const BountyDetails = ({ getData }: any) => {
  return (
    <div>
      <div className="bg-basewhite font-semibold flex px-28 pt-40 pb-10 justify-between">
        <div className="flex flex-col gap-2 max-w-lg">
          <p className="text-lg text-baseblack">{getData.title}</p>
          <p className="text-3xl text-baseblack">{getData.task}</p>
        </div>
        <div className="flex flex-col h-fit my-auto justify-end gap-2">
          <p className="text-[#999999] text-xs font-semibold text-end">
            PRIZE REWARD
          </p>
          <div className="flex gap-2 justify-end">
            <Image
              src={getData.reward_image}
              alt="icon"
              height={20}
              width={20}
            />
            <p className="text-lg font-semibold text-baseblack">
              {getData.reward}
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-3 py-16 px-28">
        <div className="col-span-2 p-2 flex flex-col gap-3">
          <p
            className="text-
          basewhite text-lg"
          >
            About Listing and Space
          </p>
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
        <div className="col-span-1 flex flex-col p-8 gap-6 rounded-lg shadow-md bg-baseblack h-fit">
          <div className="grid grid-cols-2">
            {" "}
            <p className="text-basebrown">Grand Prize</p>
            <div className="flex ps-5 justify-between gap-1">
              <Image
                src={getData.reward_image}
                alt="icon"
                height={20}
                width={20}
              />
              <p className="text-lg">3,500 USDT</p>
            </div>
          </div>
          <div className="bg-basebrown p-[0.3px]"></div>
          <div className="grid grid-cols-2">
            <p className="text-basebrown">First Prize</p>
            <div className="flex ps-5 justify-between gap-1">
              <Image
                src={getData.reward_image}
                alt="icon"
                height={20}
                width={20}
              />
              <p className="text-lg">1,500 USDT</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-basebrown">Second Prize</p>
            <div className="flex ps-5 justify-between gap-1">
              <Image
                src={getData.reward_image}
                alt="icon"
                height={20}
                width={20}
              />
              <p className="text-lg">1,000 USDT</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-basebrown">Third Prize</p>
            <div className="flex ps-5 justify-between gap-1">
              <Image
                src={getData.reward_image}
                alt="icon"
                height={20}
                width={20}
              />
              <p className="text-lg">500 USDT</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <p className="text-basebrown">Participation</p>
            <div className="flex ps-5 justify-between gap-1">
              <Image
                src={getData.reward_image}
                alt="icon"
                height={20}
                width={20}
              />
              <p className="text-lg">5 USDT</p>
            </div>
          </div>
          <div className="bg-basebrown p-[0.3px]"></div>
          <div className="flex justify-between">
            <p className="text-basebrown text-lg">Due in</p>
            <p className="text-basebrown text-lg">{getData.ends_in} days</p>
          </div>
          <div className="grid grid-cols-2 mt-2">
            <button className="flex gap-1 items-center justify-center">
              <FaRegBell /> <span>Interested</span>
            </button>
            <button className="bg-baseblue rounded-3xl p-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
