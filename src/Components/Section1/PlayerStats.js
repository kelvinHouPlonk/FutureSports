
import React from 'react';

function PlayerStats() {
  return (
    <div className='PlayerStats'>
      <h2>Player Stats</h2>
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
          <tr>
            <td>Player 1</td>
            <td>10</td>
            <td>5</td>
            <td>2</td>
            <td>0</td>
            <td>20</td>
            <td>85%</td>
          </tr>
          {/* Add more player data rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerStats;
