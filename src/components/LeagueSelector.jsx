import React, { useState, useCallback, memo } from "react";
import "../styles/LeagueSelector.scss";

// Move league data outside component to avoid recreation on renders
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

// Create a memoized league card component
const LeagueCard = memo(({ league, isSelected, onSelect }) => (
  <div
    className={`league-card ${isSelected ? "selected" : ""}`}
    onClick={() => onSelect(league.value)}
  >
    {league.logo ? (
      <img src={league.logo} alt={league.label} className="league-logo" />
    ) : (
      <div className="placeholder-logo">All</div>
    )}
    <span className="league-name">{league.label}</span>
  </div>
));

const LeagueSelector = () => {
  const [selectedLeagues, setSelectedLeagues] = useState(["all"]);

  const handleLeagueSelect = useCallback(
    (leagueValue) => {
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
      setSelectedLeagues((prev) => {
        if (prev.includes(leagueValue)) {
          // If already selected, remove it
          return prev.filter((value) => value !== leagueValue);
        } else {
          // If "All Leagues" is currently selected, remove it and add the specific league
          if (prev.includes("all")) {
            return [leagueValue];
          } else {
            // Otherwise add this league to the selection
            return [...prev, leagueValue];
          }
        }
      });
    },
    [selectedLeagues]
  );

  return (
    <div className="league-selection">
      <h2 className="league-heading">Select Leagues</h2>
      <div className="league-cards">
        {leagues.map((league) => (
          <LeagueCard
            key={league.value}
            league={league}
            isSelected={selectedLeagues.includes(league.value)}
            onSelect={handleLeagueSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default LeagueSelector;
