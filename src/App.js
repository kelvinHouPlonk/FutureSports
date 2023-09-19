import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Nav";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/UpComingMatches";
import Footer from "./Components/Footer/Copyright";
import Section1 from './Components/Section1/Section1';
import Section2 from "./Components/Section2/Gallery"

function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
        <Main />
        <Aside />
        <Section2 />
        <Section1 />
        <Footer />
    </div>
  );
}

export default App;
 