import React from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import TodoWrapper from "../../components/todos/TodoWrapper";
import Todo from "../../components/todos/Todo";
import Tree from "../../components/tree/tree";
import RootNode from "../../components/tree/root";
interface Today {
  setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Today = ({ setPanelOpen }: Today) => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <header className="flex gap-6 items-center">
        <h1 className="heading text-5xl font-extrabold">Today</h1>
        <div className="count  py-1 px-5 rounded-xl text-2xl font-bold  bg-primary text-white ">
          5
        </div>
      </header>
      <motion.div
        className="w-fit addNewTask flex gap-4 border-4 px-6 py-2 rounded-lg items-center mt-6 bg-primary text-white border-primary cursor-pointer hover:bg-[#1d3ffe] hover:border-[#1d3ffe]"
        whileTap={{ scale: 0.95 }}
        style={{ userSelect: "none" }}
        onClick={() => setPanelOpen(true)}
      >
        <FaPlus /> <p>Add new task</p>
      </motion.div>
      <TodoWrapper>
        <Tree>
          <RootNode>
            <Todo id={1}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
              expedita?
            </Todo>
          </RootNode>
          <RootNode>
            <Todo id={2}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
              expedita?
            </Todo>
          </RootNode>
          <RootNode>
            <Todo id={3}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
              expedita?
            </Todo>
          </RootNode>
          <RootNode>
            <Todo id={4}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
              expedita?
            </Todo>
          </RootNode>
        </Tree>
      </TodoWrapper>
    </div>
  );
};

export default Today;
