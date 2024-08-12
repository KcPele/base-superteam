import React from "react";

export const Homepage = () => {
  return (
    <div className="bg-[url('/images/homepage-hero.png')] bg-cover pt-[310px] pb-10 px-36">
      <div className="grid gap-12">
        <h1 className="text-7xl font-bold text-basewhite">
          Earn, Create and Innovate
        </h1>
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          For Creators and Builders
        </h1>
      </div>
      <div className="grid gap-5 mt-40 max-w-lg">
        <p>
          We integrate courses, bounty listings, creative hubs, and on-chain
          activities into a seamless experience, allowing you to engage with the
          Base ecosystem like never before.
        </p>

        <button className="bg-baseblue text-white rounded-3xl w-fit p-3 text-xs">
          Get Started
        </button>
      </div>
    </div>
  );
};
