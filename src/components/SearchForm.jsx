import React from "react";
import SearchInputGroup from "./SearchInputGroup";
import LeagueSelector from "./LeagueSelector";
import DateRangeSelector from "./DateRangeSelector";
import "../styles/SearchForm.scss";

const SearchForm = () => {
  return (
    <div className="search-container">
      <form className="search-form">
        <div className="input-row">
          <SearchInputGroup
            label="City Name"
            id="city"
            placeholder="Enter city name"
          />
          <SearchInputGroup
            label="Accommodation Details"
            id="accommodation"
            placeholder="Enter accommodation details"
          />
        </div>

        <DateRangeSelector />
        <LeagueSelector />

        <button type="submit" className="search-button">
          Search Matches
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
