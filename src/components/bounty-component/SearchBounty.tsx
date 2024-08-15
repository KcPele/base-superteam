import React from "react";

export const SearchBounty = () => {
  return (
    <div className="search flex justify-center m-auto gap-2 text-sm py-5 pb-10 w-[700.71px]">
      <input
        type="text"
        placeholder="search for bounties"
        className="border border-[#9A9EA2] rounded-3xl w-full px-3 bg-transparent outline-[#9A9EA2] text-[#9A9EA2]"
      />
      <button className="bg-baseblue text-white rounded-3xl p-3 w-[142px] text-xs">
        Search Bounties
      </button>
    </div>
  );
};
