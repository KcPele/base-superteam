"use client";

import React from "react";
import CreateProfileForm from "./CreateProfileForm";
export const CreateProfile = () => {
  return (
    <div>
      <div className="bg-basewhite px-4 md:px-10 lg:px-32 pt-36 pb-10">
        <div className="flex flex-col gap-2 max-w-lg text-baseblack">
          <p className="text-lg font-semibold">
          Create Your Profile
          </p>
          <p className="text-3xl md:text-4xl font-bold">
          Start Earning
          </p>
          <p className="text-sm font-semibold">Ready to start contributing to crypto projects?<br />
          this is the right place.</p>
        </div>
      </div>
      <div className="bg-basebgblack text-basewhite pb-20 py-16 px-4 md:px-10 lg:px-32">
        <CreateProfileForm />
      </div>
    </div>
  );
};
