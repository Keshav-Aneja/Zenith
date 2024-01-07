import React, { ReactNode } from "react";
interface WrapperProps {
  children: ReactNode;
  panelOpen: boolean;
}
const MainWrapper = ({ children, panelOpen }: WrapperProps) => {
  // This is going to adjust it's width based on the open status of the panel w-main or w-main_small
  return (
    <div
      className={` h-full px-2 pl-8 ${panelOpen ? "w-main_small" : "w-main"}`}
    >
      {children}
    </div>
  );
};

export default MainWrapper;
