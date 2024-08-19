import React from "react";

export const SearchBounty = () => {
  return (
    <div className="search flex flex-row justify-center m-auto gap-2 text-sm pt-10 pb-2 md:pb-10 w-full max-w-[700.71px]">
      <input
        type="text"
        placeholder="search for bounties"
        className="border border-[#9A9EA2] rounded-3xl w-full p-2 bg-transparent outline-[#9A9EA2] text-[#9A9EA2]"
      />
      <button className="page-transition bg-baseblue hover:bg-transparent border border-baseblue hover:text-baseblue rounded-full p-2 px-3 text-basewhite text-xs flex">
        Search <span className="hidden md:block ms-1"> Bounties</span>
      </button>
    </div>
  );
};
