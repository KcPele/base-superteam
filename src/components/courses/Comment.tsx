// components/Comment.tsx
import React from "react";
import { RiThumbUpLine } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { Reply } from "./Reply";

const Comment: React.FC = () => {
  return (
    <div>
      <div className="flex items-center p-4 gap-3 ">
        <img
          src="/images/profile.png" // Replace with actual user image URL
          alt="User profile"
          className="w-11 h-11 rounded-full"
        />
        <div className="border  w-full flex gap-1 border-gray-200/30 rounded-full">
          <input
            type="text"
            placeholder="Add a comment"
            className="flex-1 pl-4 w-full bg-transparent border-none outline-none text-white placeholder-gray-500 focus:border-none"
          />
          <button className="px-4 py-2">Post</button>
        </div>
      </div>

      <div className="mt-4">
        {/* just one coment and a reply   */}
        <div>
          <div className="flex   p-4 gap-3 ">
            <img
              src="/images/profile.png" // Replace with actual user image URL
              alt="User profile"
              className="w-11 h-11 rounded-full"
            />
            <div className="w-full">
              <div className="flex gap-1 justify-between items-center">
                <h3 className="text-sm">Tayo Henry</h3>
                <p className="text-xs">August 12, 2021</p>
              </div>
              <p className="text-sm text-gray-400">
                In mauris porttitor tincidunt mauris massa sit lorem sed
                scelerisque. Fringilla pharetra vel massa enim sollicitudin
                cras. At pulvinar eget sociis adipiscing eget donec ultricies
                nibh tristique.
              </p>
              <div className=" px-4 py-2 flex justify-end w-full gap-3">
                <button className="text-xs flex text-gray-400 gap-1">
                  <RiThumbUpLine size={16} />5
                </button>
                <button className="text-xs flex text-gray-400 gap-1">
                  <FiMessageSquare size={16} />2
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end ">
            <Reply />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
