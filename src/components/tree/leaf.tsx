import React from "react";
import RootNode from "./root";
import { motion } from "framer-motion";
import "../../styles/Tree.css";
interface Leaf {
  children: string;
  color?: string;
  fill?: boolean;
  id?: number;
}
const LeafNode = ({ children, color = "#000000", fill, id }: Leaf) => {
  const delay = id ? 0.2 * id : 0;
  const initialPos = id === 0 ? "0%" : "-100%";
  return (
    <motion.li
      className="list-item list-holder"
      initial={{ y: initialPos, opacity: 0 }}
      whileInView={{ y: "0%", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <ul className={`list`}>
        <li className={`list-item`}>
          <a
            href=""
            className="text-decoration-line: none; hover:font-semibold"
            style={{ userSelect: "none" }}
          >
            {children}
          </a>
        </li>
      </ul>
    </motion.li>
  );
};

export default LeafNode;
