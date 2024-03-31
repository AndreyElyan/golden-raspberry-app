"use client";
import React from "react";

const years = Array.from({ length: 2024 - 1980 + 1 }, (_, i) =>
  (1980 + i).toString(),
);

const YearList = () => {
  const [selectedYear, setSelectedYear] = React.useState("");

  const handleYearClick = (year: string) => {
    setSelectedYear(year);
  };

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
          onClick={() => handleYearClick(year)}
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
