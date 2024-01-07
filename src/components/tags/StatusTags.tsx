import React from "react";
import colors from "../../data/colors";
import { FaPlus } from "react-icons/fa";
interface Tags {
  children: string;
  def?: boolean;
}
const StatusTags = ({ children, def }: Tags) => {
  let color = "#ebebeb";
  const randomColor = Math.floor(Math.random() * colors.length);
  {
    color = def ? "#ebebeb" : colors[randomColor];
  }
  const stroke = color.concat("40");
  return (
    <div
      className="px-2 py-1 text-xs rounded-md font-extrabold flex gap-2 items-center cursor-pointer border-2 border-black text-content"
      style={{ background: color, borderColor: stroke }}
    >
      {def ? <FaPlus /> : ""}
      {children}
    </div>
  );
};

export default StatusTags;
