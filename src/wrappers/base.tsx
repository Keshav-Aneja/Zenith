import React, { ReactNode } from "react";
interface WrapperProps {
  children: ReactNode;
}
const BaseWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="w-full flex py-3 h-screen bg-base font-manrope text-content overflow-x-hidden">
      {children}
    </div>
  );
};

export default BaseWrapper;
