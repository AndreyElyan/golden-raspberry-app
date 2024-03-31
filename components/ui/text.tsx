import React from "react";

interface TextProps extends React.HTMLProps<HTMLSpanElement> {
  text: string;
}

const Text = ({ text, className }: TextProps) => {
  return <span className={` ${className}`}>{text}</span>;
};

export default Text;
