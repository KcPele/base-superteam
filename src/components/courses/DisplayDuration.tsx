import React from "react";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

type Props = {
  duration: string;
};
export const DisplayDuration: React.FC<Props> = ({ duration }) => {
  return (
    <div className="bg-gray-500/40 rounded-full flex gap-1 items-center p-1 px-2">
      <MdOutlinePlayCircleOutline size={16} />

      <p className="text-xs">{duration}</p>
    </div>
  );
};
