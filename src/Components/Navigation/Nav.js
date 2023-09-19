import React from 'react';
import { Link } from 'react-scroll';

function Navigation() {
  return (
    <div className='Navigation'>
      <ul className="main_nav">
        <li className="main_nav">
          <Link to="Upcoming_Matches" smooth={true} duration={500}>Matches</Link>
        </li>
        <li className="main_nav">
          <Link to="news" smooth={true} duration={500}>News</Link>
        </li>
        <li className="main_nav">
          <Link to="Gallery" smooth={true} duration={500}>Gallery</Link>
        </li>
        <li className="main_nav">
          <Link to="PlayerStats" smooth={true} duration={500}>Player Stats</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
