import React from "react";

interface ToolboxButtonProps {
  children: React.ReactNode;
  props: any;
}

export const ToolboxButton = ({ props, children }: ToolboxButtonProps) => {
  return (
    <button
      {...props}
      className="py-2 bg-zinc-800 text-white rounded text-sm hover:text-purple-500 hover:bg-zinc-700 transition items-center flex flex-col justify-center border border-zinc-600"
    >
      {children}
    </button>
  );
};
