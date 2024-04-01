import React from "react";

interface YearListProps {
  selectedYear?: string;
  years: string[];
  onYearClick: (year: string) => void;
}

const YearList = ({ selectedYear, years = [], onYearClick }: YearListProps) => {
  const getYearClass = (year: string) => {
    const baseClass = "hover:text-gray-700 text-gray-500 cursor-pointer";
    return year === selectedYear
      ? `${baseClass} font-bold text-green-500`
      : baseClass;
  };

  return (
    <div className="grid grid-cols-12 gap-2 mt-6">
      {years.map((year) => (
        <div
          onClick={() => onYearClick(year)}
          className={getYearClass(year)}
          key={year}
        >
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearList;
