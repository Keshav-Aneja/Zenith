import React, { ReactNode, useState } from "react";

import colors from "../../data/colors";
interface Project {
  label: string;
  children: ReactNode;
}
const ProjectItem = ({ label, children }: Project) => {
  const randomColor = Math.floor(Math.random() * colors.length);
  const [nodeOpen, setNodesOpen] = useState(true);
  return (
    <div className="group w-full">
      <div
        onClick={() => setNodesOpen(!nodeOpen)}
        className="project-heading flex items-center justify-between cursor-pointer hover:bg-highlight  rounded-lg transition-all duration-200 ease-linear mb-1  py-2 px-2"
      >
        <div className="label flex gap-2 items-center">
          <div
            className="color-icon w-4 h-4 rounded-full border-2 bg-navbar z-[10]"
            style={{ borderColor: colors[randomColor] }}
          ></div>
          <h3 className="text-sm font-bold" style={{ userSelect: "none" }}>
            {label}
          </h3>
        </div>
      </div>
      {nodeOpen && children}
    </div>
  );
};

export default ProjectItem;
