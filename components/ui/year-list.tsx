import React from "react";

const years = Array.from({ length: 2024 - 1980 + 1 }, (_, i) =>
  (1980 + i).toString(),
);

const YearList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {years.map((year) => (
        <div key={year}>{year}</div>
      ))}
    </div>
  );
};

export default YearList;
