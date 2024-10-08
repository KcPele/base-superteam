import React from "react";
import Link from "next/link";
import Image from "next/image";
import Tt from "../../public/icons/usdc.svg";
import dummyData, { DataProp } from "../../../dummy-data";
import { Bounties } from "./Bounties";

export const BountySection = () => {
  const tags = [
    { name: "Design", link: "" },
    { name: "Frontend", link: "" },
    { name: "Backend", link: "" },
    { name: "Writing", link: "" },
    { name: "Manager", link: "" },
    { name: "Auditor", link: "" },
    { name: "Logos", link: "" },
  ];
  return (
    <div className="bg-basebgblack p-2 pb-20 text-basewhite">
      <div className="mb-32 mx-auto gap-2 text-sm max-w-[700.71px]">
        <div className="tags pb-3 md:p-8">
          <h3 className="my-5 text-[#999999] font-semibold">TAGS</h3>
          <ul className="flex flex-wrap gap-2">
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
        {dummyData.map((data: DataProp) => {
          return <Bounties data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};
