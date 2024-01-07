import React, { ReactNode } from "react";
import "../../styles/Tree.css";
interface Tree {
  children: ReactNode;
}
const Tree = ({ children }: Tree) => {
  return <ul className="list mt-2 w-full">{children}</ul>;
};

export default Tree;
