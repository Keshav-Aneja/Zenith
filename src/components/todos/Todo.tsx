import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { FaAngleRight } from "react-icons/fa";
interface Todo {
  id: number;
  status?: boolean;
  children: string;
}
const Todo = ({ id, status, children }: Todo) => {
  return (
    <div className="w-full border-b-2 flex items-center py-2 px-2 rounded-lg gap-2 hover:bg-highlight ">
      <Checkbox.Root className="CheckboxRoot" id={id.toString()}>
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <div className="left-section flex gap-2 items-center w-full justify-between pr-2 cursor-pointer">
        <label className="Label text-lg  font-bold" htmlFor={id.toString()}>
          {children}
        </label>
        <FaAngleRight size={20} />
      </div>
    </div>
  );
};

export default Todo;
