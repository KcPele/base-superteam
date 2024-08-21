import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Bounties = ({ data }: any) => {
  const dynamicHref = `/bounty/${data.title}`;

  return (
    <Link href={dynamicHref}>
      <div className="bounty-details  mb-5 w-full border border-[#19154d] rounded-lg grid gap-2 xs:grid-cols-3">
        <div className="col-span-2 grid gap-2">
          <p className="font-semibold text-xs">{data.title}</p>
          <p className="font-bold text-sm md:text-lg">{data.task}</p>
          <p className="text-basebrown text-xs">Due in {data.ends_in} days</p>
        </div>
        <div className="col-span-1 grid h-fit my-auto xs:text-end gap-2">
          <p className="text-basebrown text-xs font-semibold">PRIZE REWARD</p>
          <div className="flex gap-1 justify-end">
            <Image src={data.reward_image} alt="icon" height={20} width={20} className="h-4 w-4 md:h-5 md:w-5" />
            <p className="text-xs md:text-lg font-semibold">{data.reward}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
