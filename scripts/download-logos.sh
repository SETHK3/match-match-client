#!/bin/bash

# Create logos directory if it doesn't exist
mkdir -p public/logos

# Download Premier League logo
curl -o public/logos/premier-league.png https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png

# Download Championship logo
curl -o public/logos/championship.png https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/EFL_Championship.svg/1200px-EFL_Championship.svg.png

# Download League One logo
curl -o public/logos/league-one.png https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/EFL_League_One.svg/1200px-EFL_League_One.svg.png

# Download League Two logo
curl -o public/logos/league-two.png https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/EFL_League_Two.svg/1200px-EFL_League_Two.svg.png

# Create a generic "All Leagues" logo
convert -size 24x24 xc:transparent -fill white -draw "circle 12,12 12,2" public/logos/all-leagues.png 