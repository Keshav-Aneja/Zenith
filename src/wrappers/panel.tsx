import React, { ReactNode } from "react";
import Tree from "../components/tree/tree";
import LeafNode from "../components/tree/leaf";
import RootNode from "../components/tree/root";

interface WrapperProps {
  children: ReactNode;
  panelOpen: boolean;
}
const PanelWrapper = ({ children, panelOpen }: WrapperProps) => {
  // This will mount or unmount based on the open status of the panel, if it's open then it will have a width of w-panel
  return (
    <div
      className={`h-full bg-panel rounded-lg py-2 px-4  origin-right ${
        panelOpen ? "translate-x-0 w-panel" : "translate-x-[100%] w-0"
      }  transition-all duration-500 ease-linear `}
    >
      {children}
    </div>
  );
};

export default PanelWrapper;
