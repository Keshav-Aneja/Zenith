import React, { ReactNode } from "react";
interface WrapperProps {
  children: ReactNode;
}
const NavWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="w-navbar h-full bg-navbar py-2 px-4 rounded-lg ">
      {children}
    </div>
  );
};

export default NavWrapper;
