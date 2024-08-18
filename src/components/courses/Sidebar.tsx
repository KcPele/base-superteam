import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { DisplayDuration } from "./DisplayDuration";

const Sidebar = () => {
  return (
    <div className="max-w-[350px] w-full px-4">
      <div
        className="
        ml-3"
      >
        <button className=" mb-4 text-sm  font-bold flex items-center gap-2 ">
          <IoIosArrowBack className="font-bold text-xl" />
          <span> Back to courses</span>
        </button>
        <div>
          <p className="text-sm text-gray-500 font-semibold">Courses</p>
          <h3 className="font-semibold text-2xl">Base for Beginners</h3>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title  font-medium">introduction</div>
        <div className="collapse-content">
          <div role="button" className="form-control mb-6  text-gray-400">
            <label className="flex  justify-between items-center cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="radio-1"
                  className="radio  checked:radio-primary border-gray-400"
                />

                <p>Welcome to Base</p>
              </div>
              <DisplayDuration duration="3min" />
            </label>
          </div>
          <div role="button" className="form-control mb-6  text-gray-400">
            <label className="flex  justify-between items-center cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="radio-1"
                  className="radio checked:radio-primary border-gray-400"
                />

                <p className="max-w-[154px] truncate">understanding Base</p>
              </div>
              <DisplayDuration duration="3min" />
            </label>
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title truncate  font-medium">Advanced</div>
        <div className="collapse-content">
          <p>coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
