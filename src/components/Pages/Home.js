import React from 'react';
import Map from '../Map';
import {BrowserRouter as Router, Switch, Route, Routes, useLocation} from 'react-router-dom';
import Reports from './Reports';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Find My Covid</h1>
      </header>
        <Map />
    </div>
  );
}

export default Home;