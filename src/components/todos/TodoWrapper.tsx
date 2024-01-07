import React, { ReactNode } from "react";
interface TodoWrapper {
  children: ReactNode;
}
const TodoWrapper = ({ children }: TodoWrapper) => {
  return (
    <div className="todowrap w-full h-fit max-h-[75%] overflow-y-scroll  mt-6 flex flex-col gap-2">
      {children}
    </div>
  );
};

export default TodoWrapper;
