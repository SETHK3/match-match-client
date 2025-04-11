import React from "react";
import "../styles/SearchForm.scss";

const SearchForm = () => {
  return (
    <div className="search-container">
      <form className="search-form">
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="city">City Name</label>
            <input type="text" id="city" placeholder="Enter city name" />
          </div>
          <div className="input-group">
            <label htmlFor="accommodation">Accommodation Details</label>
            <input
              type="text"
              id="accommodation"
              placeholder="Enter accommodation details"
            />
          </div>
        </div>

        <div className="date-range">
          <div className="input-group">
            <label htmlFor="startDate">Start Date</label>
            <input type="date" id="startDate" />
          </div>
          <div className="input-group">
            <label htmlFor="endDate">End Date</label>
            <input type="date" id="endDate" />
          </div>
        </div>

        <div className="league-selection">
          <label className="league-label">Select League</label>
          <div className="radio-group">
            <label className="radio-label">
              <input type="radio" name="league" value="all" defaultChecked />
              <span className="radio-custom"></span>
              <span>All Leagues</span>
            </label>
            <label className="radio-label">
              <input type="radio" name="league" value="premier-league" />
              <span className="radio-custom"></span>
              <span>Premier League</span>
              <img
                src="/logos/premier-league.png"
                alt="Premier League"
                className="league-logo"
              />
            </label>
            <label className="radio-label">
              <input type="radio" name="league" value="championship" />
              <span className="radio-custom"></span>
              <span>Championship</span>
              <img
                src="/logos/EFL_Championship_Logo.svg.png"
                alt="Championship"
                className="league-logo"
              />
            </label>
            <label className="radio-label">
              <input type="radio" name="league" value="league-one" />
              <span className="radio-custom"></span>
              <span>League One</span>
              <img
                src="/logos/EFL_League_One_Logo.svg.png"
                alt="League One"
                className="league-logo"
              />
            </label>
            <label className="radio-label">
              <input type="radio" name="league" value="league-two" />
              <span className="radio-custom"></span>
              <span>League Two</span>
              <img
                src="/logos/EFL_League_Two_Logo.svg.png"
                alt="League Two"
                className="league-logo"
              />
            </label>
          </div>
        </div>

        <button type="submit" className="search-button">
          Search Matches
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
