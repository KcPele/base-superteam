"use client";

import React from "react";
import CreateProjectForm from "./CreateProjectForm";
export const CreateProject = () => {
  return (
    <div>
      <div className="bg-basewhite px-36 pt-40 pb-20">
        <div className="flex flex-col gap-2 max-w-lg">
          <p className="text-lg text-baseblack font-semibold">
            Create Project/ Organization
          </p>
          <p className="text-4xl font-bold text-baseblack">
            Let&apos;s Get Started
          </p>
        </div>
      </div>
      <div className="bg-basebgblack text-basewhite pb-20 py-16 px-48">
        <CreateProjectForm />
      </div>
    </div>
  );
};
