import React, { useState } from "react";
import "../styles/LeagueSelector.scss";

const leagues = [
  { value: "all", label: "All Leagues", logo: null },
  {
    value: "premier-league",
    label: "Premier League",
    logo: "/logos/premier-league.png",
  },
  {
    value: "championship",
    label: "Championship",
    logo: "/logos/EFL_Championship_Logo.svg.png",
  },
  {
    value: "league-one",
    label: "League One",
    logo: "/logos/EFL_League_One_Logo.svg.png",
  },
  {
    value: "league-two",
    label: "League Two",
    logo: "/logos/EFL_League_Two_Logo.svg.png",
  },
];

const LeagueSelector = () => {
  const [selectedLeague, setSelectedLeague] = useState("all");

  const handleLeagueSelect = (leagueValue) => {
    setSelectedLeague(leagueValue);
  };

  return (
    <div className="league-selection">
      <h2 className="league-heading">Select League</h2>
      <div className="league-cards">
        {leagues.map((league) => (
          <div
            key={league.value}
            className={`league-card ${
              selectedLeague === league.value ? "selected" : ""
            }`}
            onClick={() => handleLeagueSelect(league.value)}
          >
            {league.logo ? (
              <img
                src={league.logo}
                alt={league.label}
                className="league-logo"
              />
            ) : (
              <div className="placeholder-logo">All</div>
            )}
            <span className="league-name">{league.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeagueSelector;
