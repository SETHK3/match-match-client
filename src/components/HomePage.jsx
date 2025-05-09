import React from "react";
import SearchForm from "./SearchForm";
import "../styles/HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="title-card">
        <h1>MatchMatch</h1>
        <p>Your Ultimate Football Match Finder</p>
      </div>
      <div className="search-section">
        <SearchForm />
      </div>
    </div>
  );
};

export default HomePage;
