import React, { ReactNode } from "react";
import colors from "../../data/colors";
import "../../styles/index.css";
interface ListItems {
  children?: ReactNode;
  label: string;
  listIcon?: boolean;
  count?: number;
}
const ListItem = ({ children, label, listIcon, count }: ListItems) => {
  const randomColor = Math.floor(Math.random() * colors.length);
  return (
    <div className="group w-full py-2 flex items-center justify-between cursor-pointer hover:bg-primary hover:text-white px-2 rounded-lg transition-all duration-100 ease-in-out mb-1">
      <div className="label flex gap-2 items-center">
        {children && <div className="icon">{children}</div>}
        {listIcon && (
          <div
            className="color-icon w-4 h-4 rounded-sm"
            style={{ background: colors[randomColor] }}
          ></div>
        )}
        <h3 className="text-sm font-bold">{label}</h3>
      </div>
      {count && (
        <div className="count bg-primary text-white group-hover:text-content group-hover:bg-white  px-3 py-0 h-full text-xs rounded-md font-extrabold ease-animate  transition-all duration-100 ease-linear">
          {count}
        </div>
      )}
    </div>
  );
};

export default ListItem;
