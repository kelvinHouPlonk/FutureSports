import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Nav';
import Main from './Components/Main/Main';
import Aside from './Components/Aside/UpComingMatches';
import Footer from './Components/Footer/Copyright';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Gallery';
import ErrorBoundary from './Components/Error/ErrorBoundary';
import Weather from './Components/Weather/Weather';
import MatchHistory from './Components/Header/MatchHistory';

function Header() {
  return (
    <div className='Welcome'>
      <h1>Welcome To FutureSports</h1>
      <br />
      <Weather />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <MatchHistory />
      <Main />
      <Aside />
      <Section2 />
      <Section1 />
      <Footer />
    </div>
  );
}

export default App;
