import React from "react";

interface YearListProps {
  selectedYear?: string;
  years: string[];
  onYearClick: (year: string) => void;
}

const YearList = ({ selectedYear, years = [], onYearClick }: YearListProps) => {
  return (
    <div
      className="
      grid
      grid-cols-12
      gap-2
      mt-6
    "
    >
      {years.map((year) => (
        <div
          onClick={() => onYearClick(year)}
          className={`hover:text-gray-700 text-gray-500 cursor-pointer ${
            selectedYear === year
              ? "text-green-500 font-semibold hover:text-green-700"
              : ""
          }`}
          key={year}
        >
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearList;
