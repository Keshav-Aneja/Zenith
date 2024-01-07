import React, { ReactNode } from "react";
import "../../styles/Tree.css";
interface Root {
  children: ReactNode;
}

const RootNode = ({ children }: Root) => {
  return (
    <li className={`list-item root-list w-full`}>
      <a href="" className="text-decoration-line: none; w-full">
        {children}
      </a>
    </li>
  );
};

export default RootNode;
