import React from "react";
import Sidebar from "@/components/courses/Sidebar";

import Transcript from "@/components/courses/Transcript";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosArrowBack, IoIosPeople } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Comment from "@/components/courses/Comment";

const Courses = () => {
  return (
    <div className="bg-black px-4 text-white min-h-screen flex w-full justify-center gap-2">
      <Sidebar />
      <div className="w-full">
        <div className="flex gap-2 text-sm">
          <p className=" text-gray-500 font-semibold">Courses</p>
          <span className="text-gray-500 font-semibold">/</span>
          <p>Base for Beginners</p>
        </div>
        <div className="mt-2 ">
          <video
            className="w-full max-h-[535px] rounded-t-xl"
            controls
            src="https://www.youtube.com/watch?v=zWh3CShX_do"
          />
        </div>
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-8 items-center">
            <div className="text-sm flex items-center gap-3 ">
              <IoIosPeople size={24} />

              <p className="text-nowrap">34k Students</p>
            </div>
            <div className="flex tex-sm items-center gap-3">
              <p className="">Like</p>
              <FaRegHeart size={18} />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex text-sm items-center  rounded-full bg-gray-800 px-3 py-2 justify-center">
              <IoIosArrowBack />
              Previous
            </button>
            <button className="bg-blue-600 flex items-center  rounded-full px-3 py-2 text-xs">
              Next
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl">Welcome to Base</h3>
          <div className="text-sm sm:text-base text-gray-400">
            <p>
              Base is a Layer 2 blockchain platform built on Ethereum, designed
              to provide a secure, scalable, and low-cost environment for
              developing decentralized applications (DApps). Developed by
              Coinbase, Base leverages the power of Ethereum while offering
              enhanced speed and reduced transaction fees, making it an ideal
              choice for developers and businesses looking to scale their
              operations without compromising on security.
            </p>
            <p>
              Base's architecture enables seamless interoperability with other
              blockchains, allowing developers to build on Ethereum's robust
              ecosystem while benefiting from the efficiency and scalability of
              Layer 2 technology. With a focus on user-friendly integration and
              developer support, Base aims to accelerate the adoption of
              blockchain technology by making it more accessible and practical
              for a wide range of use cases, from decentralized finance (DeFi)
              to gaming and beyond. Whether you're a seasoned developer or new
              to the world of blockchain, Base offers the tools and resources
              needed to build, deploy, and scale innovative solutions in a
              rapidly evolving digital landscape. 4o
            </p>
          </div>
          <div className="my-5 sm:mt-10">
            <Comment />
          </div>
        </div>
      </div>
      <Transcript />
    </div>
  );
};

export default Courses;
