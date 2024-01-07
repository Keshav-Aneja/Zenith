import React from "react";
import { motion } from "framer-motion";
const ListMenu = () => {
  return (
    <motion.div
      className="absolute top-8 left-0 min-w-[100%] w-fit h-fit bg-highlight rounded-lg py-2 px-2 flex flex-col gap-1"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        type="button"
        className="font-normal hover:bg-base w-full rounded-md"
      >
        &nbsp;&nbsp;Personal
      </button>
      <button
        type="button"
        className="font-normal hover:bg-base w-full rounded-md"
      >
        &nbsp;&nbsp;School
      </button>
      <button
        type="button"
        className="font-normal hover:bg-base w-full rounded-md"
      >
        &nbsp;&nbsp;Hobby
      </button>
    </motion.div>
  );
};

export default ListMenu;
