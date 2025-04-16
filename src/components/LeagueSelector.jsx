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
  const [selectedLeagues, setSelectedLeagues] = useState(["all"]);

  const handleLeagueSelect = (leagueValue) => {
    // If "All Leagues" is selected
    if (leagueValue === "all") {
      // If "All Leagues" is already selected, deselect it
      if (selectedLeagues.includes("all")) {
        setSelectedLeagues([]);
      } else {
        // Otherwise, select only "All Leagues"
        setSelectedLeagues(["all"]);
      }
      return;
    }

    // If we're selecting a specific league
    if (selectedLeagues.includes(leagueValue)) {
      // If already selected, remove it
      setSelectedLeagues(
        selectedLeagues.filter((value) => value !== leagueValue)
      );
    } else {
      // If "All Leagues" is currently selected, remove it and add the specific league
      if (selectedLeagues.includes("all")) {
        setSelectedLeagues([leagueValue]);
      } else {
        // Otherwise add this league to the selection
        setSelectedLeagues([...selectedLeagues, leagueValue]);
      }
    }
  };

  return (
    <div className="league-selection">
      <h2 className="league-heading">Select Leagues</h2>
      <div className="league-cards">
        {leagues.map((league) => (
          <div
            key={league.value}
            className={`league-card ${
              selectedLeagues.includes(league.value) ? "selected" : ""
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
