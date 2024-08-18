"use client";
import React from "react";

const Transcript = () => {
  const [tabs, setTabs] = React.useState([
    {
      name: "English",
      isActive: true,
    },
    {
      name: "Hause",
      isActive: false,
    },
    {
      name: "Ogbo",
      isActive: false,
    },
  ]);
  return (
    <div className=" max-w-[290px] w-full px-4">
      <h2 className="text-lg text-primary-foreground mb-3">Transcript</h2>
      <div>
        <div className=" flex mb-4 ">
          {tabs.map((tab, index) => (
            <button
              onClick={() => {
                setTabs((prev) =>
                  prev.map((t, i) => ({
                    ...t,
                    isActive: i === index,
                  }))
                );
              }}
              className={`${
                tab.isActive
                  ? "text-blue-600 border-blue-500"
                  : "border-gray-300 text-gray-300"
              } text-sm  border-b py-2 flex-1`}
              key={index}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-300">
          Hello, there! In this insight we talk about the importance of having a
          strong team and what to keep in mind when building one. Hiring your
          first employees is an exciting milestone for any startup founder. It's
          a sign that your dream is becoming a reality and your company is
          growing. However, it can also be a time consuming and stressful
          process. Hiring the wrong people could cost you dearly, in time and
          money, it could even destroy your business.
        </p>
      </div>
    </div>
  );
};

export default Transcript;
