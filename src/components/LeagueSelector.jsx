import React from "react";
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
  return (
    <div className="league-selection">
      <label className="league-label">Select League</label>
      <div className="radio-group">
        {leagues.map((league) => (
          <label key={league.value} className="radio-label">
            <input
              type="radio"
              name="league"
              value={league.value}
              defaultChecked={league.value === "all"}
            />
            <span className="radio-custom"></span>
            <span>{league.label}</span>
            {league.logo && (
              <img
                src={league.logo}
                alt={league.label}
                className="league-logo"
              />
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default LeagueSelector;
