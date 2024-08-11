import React from "react";
import Link from "next/link";
import Image from "next/image";
import Tt from "../../public/icons/usdc.svg";
import dummyData, { DataProp } from "../../dummy-data";

export const BountySection = () => {
  return (
    <div className="mb-32 mx-auto gap-2 text-sm w-[700.71px]">
      <div className="tags p-8">
        <h3 className="my-5 text-[#999999] font-semibold">TAGS</h3>
        <ul className="flex gap-2">
          <li className="py-2 px-4 rounded-3xl border border-[#999999]">
            <Link href={""}>Design </Link>
          </li>
          <li className="py-2 px-4 rounded-3xl border border-[#999999]">
            <Link href={""}>Frontend </Link>
          </li>
          <li className="py-2 px-4 rounded-3xl border border-[#999999]">
            <Link href={""}>Backend </Link>
          </li>
          <li className="py-2 px-4 rounded-3xl border border-[#999999]">
            <Link href={""}>Writing </Link>
          </li>
          <li className="py-2 px-4 rounded-3xl border border-[#999999]">
            <Link href={""}>Manager </Link>
          </li>
          <li className="py-2 px-4 rounded-3xl border border-[#999999]">
            <Link href={""}>Auditor </Link>
          </li>
          <li className="py-2 px-4 rounded-3xl border border-[#999999]">
            <Link href={""}>Logos </Link>
          </li>
        </ul>
      </div>
      <Link href={"/"} className="bounty flex flex-col gap-5">
        {dummyData.map((data: DataProp, index) => {
          return (
            <div
              key={index}
              className="bounty-details p-6 w-full border border-[#19154d] rounded-lg grid grid-cols-3"
            >
              <div className="col-span-2 grid gap-2">
                <p className="font-semibold text-xs">{data.title}</p>
                <p className="font-bold text-lg ">{data.task}</p>
                <p className="text-[#999999] text-xs">
                  Due in {data.ends_in} days
                </p>
              </div>
              <div className="col-span-1 grid h-fit my-auto text-end gap-2">
                <p className="text-[#999999] text-xs font-semibold">
                  PRIZE REWARD
                </p>
                <div className="flex gap-1 justify-end">
                  <Image
                    src={data.reward_image}
                    alt="icon"
                    height={20}
                    width={20}
                  />
                  <p className="text-lg font-semibold">{data.reward}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Link>
    </div>
  );
};
