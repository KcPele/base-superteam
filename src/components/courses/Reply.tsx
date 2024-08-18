import React from "react";
import { RiThumbUpLine } from "react-icons/ri";

export const Reply = () => {
  return (
    <div className="flex px-4 gap-3 max-w-[728px]  ">
      <img
        src="/images/profile.png" // Replace with actual user image URL
        alt="User profile"
        className="w-11 h-11 rounded-full"
      />
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <h3 className="text-sm">Tayo Henry</h3>
          <p className="text-xs">August 12, 2021</p>
        </div>
        <p className="text-sm text-gray-400">
          In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque.
          Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget
          sociis adipiscing eget donec ultricies nibh tristique.
        </p>
        <div className=" px-4 py-2 flex justify-end w-full gap-3">
          <button className="text-xs flex text-gray-400 gap-1">
            <RiThumbUpLine size={16} />5
          </button>
          <div className="w-6"></div>
        </div>
      </div>
    </div>
  );
};
