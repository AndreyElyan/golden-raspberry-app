import React from "react";

interface YearListProps {
  selectedYear?: string;
  years: string[];
  handleYearClick?: () => void;
}

const YearList = ({
  selectedYear,
  handleYearClick = () => {},
  years = [],
}: YearListProps) => {
  const yearTextColor = (year: string) =>
    selectedYear === year ? "text-green-500" : "text-gray-500";

  return (
    <div
      className="
      grid
      grid-cols-12
      gap-2
      mt-6
      text-center
    "
    >
      {years.map((year) => (
        <div
          onClick={() => handleYearClick()}
          className={`hover:text-gray-700 text-gray-500 cursor-pointer ${yearTextColor(
            year,
          )} `}
          key={year}
        >
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearList;
