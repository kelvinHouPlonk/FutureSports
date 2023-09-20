import React from 'react';

function MatchHistory() {
  return (
    <section className='MatchHistory'>
      <h2 className='MatchHistory'>Match History Last 5 Games</h2>
      <div className="MatchHistory">
        <div className="match_item"><span className="team">FS</span> 3 - 1 Team A</div>
        <div className="match_item"><span className="team">FS</span> 2 - 2 Team B</div>
        <div className="match_item"><span className="team">FS</span> 0 - 2 Team C</div>
        <div className="match_item"><span className="team">FS</span> 3 - 1 Team A</div>
        <div className="match_item"><span className="team">FS</span> 2 - 2 Team B</div>
      </div>
    </section>
  );
}

export default MatchHistory;
