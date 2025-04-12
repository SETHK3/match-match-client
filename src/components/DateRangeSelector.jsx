import React from "react";
import SearchInputGroup from "./SearchInputGroup";
import "../styles/DateRangeSelector.scss";

const DateRangeSelector = () => {
  return (
    <div className="date-range">
      <SearchInputGroup label="Start Date" id="startDate" type="date" />
      <SearchInputGroup label="End Date" id="endDate" type="date" />
    </div>
  );
};

export default DateRangeSelector;
