import React from "react";
import Link from "next/link";

import dummyData, { DataProp } from "../../dummy-data";
import { Bounties } from "./bounties";

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
    <div className="bg-basebgblack pb-20 text-basewhite">
      <div className="mb-32 mx-auto gap-2 text-sm max-w-[700.71px] p-8">
        <div className="tags mb-8">
          <h3 className="my-5 text-[#999999] font-semibold">TAGS</h3>
          <ul className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <li
                key={tag.name}
                className="py-2 px-4 rounded-3xl border border-[#999999]"
              >
                <Link href={tag.link}>{tag.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {dummyData.map((data: DataProp) => {
          return <Bounties data={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};
