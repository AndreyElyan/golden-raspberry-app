import React from "react";

interface TitleProps {
  title: string;
  className?: string;
}

const Title = ({ title, className }: TitleProps) => {
  return <h1 className={` text-white font-semibold ${className}`}>{title}</h1>;
};

export default Title;
