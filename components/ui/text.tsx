import React from "react";

interface TextProps {
  text: string;
  className?: string;
}

const Text = ({ text, className }: TextProps) => {
  return <h1 className={` text-white ${className}`}>{text}</h1>;
};

export default Text;
