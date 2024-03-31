import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={` bg-movieCard p-4 rounded-md shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Card;
