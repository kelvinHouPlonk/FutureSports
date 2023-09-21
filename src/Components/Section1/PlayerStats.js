import React, { useState } from 'react';
import SearchBar from './SearchBar';

//This component took wayyyyyy too long
//Object definition class and properties
class Player {
  constructor(name, goals, assists, yellowCards, redCards, shotsOnTarget, passingAccuracy) {
    this.name = name;
    this.goals = goals;
    this.assists = assists;
    this.yellowCards = yellowCards;
    this.redCards = redCards;
    this.shotsOnTarget = shotsOnTarget;
    this.passingAccuracy = passingAccuracy;
  }
}

// Player creation(Object)
const players = [
  new Player('Arina Hashimoto', 10, 5, 2, 0, 20, '85%'),
  new Player('Yua Mikami', 5, 12, 1, 0, 8, '92%'),
  new Player('Rima Arai', 7, 8, 3, 1, 12, '80%'),
  new Player('胡桃', 3, 2, 0, 0, 6, '88%'),
  new Player('Nahida', 12, 6, 2, 1, 24, '75%'),
  new Player('Hatsune Miku', 2, 3, 0, 0, 5, '90%'),
  new Player('Chisato', 8, 4, 1, 0, 10, '85%'),
  new Player('Asuna Yukki', 6, 9, 0, 0, 14, '88%'),
  //More players can be added when needed
];

//Forming the player table
function PlayerStats() {
  const [filteredPlayers, setFilteredPlayers] = useState(players);
  
  // Search Function Defining
  const handleSearch = (searchTerm) => {
    // Filter the players based on the search term
    const filtered = players.filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  return (
    <div className='PlayerStats'>
      <h2>Player Stats</h2> {/*testing curly braces*/}
      <SearchBar onSearch={handleSearch} /> {/* Add the SearchBar component */}
      <table className="player_stats" border="2px" width="100%" height="300" cellPadding="5">
        <thead>
          <tr>
            <th>Player</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Yellow Cards</th>
            <th>Red Cards</th>
            <th>Shots on Target</th>
            <th>Passing Accuracy</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.goals}</td>
              <td>{player.assists}</td>
              <td>{player.yellowCards}</td>
              <td>{player.redCards}</td>
              <td>{player.shotsOnTarget}</td>
              <td>{player.passingAccuracy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerStats;
