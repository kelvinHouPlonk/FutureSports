import React from 'react';

function MatchHistory() {
  return (
    <div className='matchHistoryContainer'>
      <section className='MatchHistory'>
        <h2>Match History</h2>
        <ul className="match_history">
          <li><span className="team">FS</span> 3 - 1 Team A</li>
          <li><span className="team">FS</span> 2 - 2 Team B</li>
          <li><span className="team">FS</span> 0 - 2 Team C</li>
          <li><span className="team">FS</span> 3 - 1 Team A</li>
          <li><span className="team">FS</span> 2 - 2 Team B</li>
          <li><span className="team">FS</span> 0 - 2 Team C</li>
        </ul>
      </section>
    </div>
  );
}

export default MatchHistory;
