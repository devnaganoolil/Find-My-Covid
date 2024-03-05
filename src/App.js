// src/App.js
import React from 'react';
import Map from './components/Map';
import Perfectscrollbar from 'perfect-scrollbar';
import {Route, Routes, useLocation} from 'react-router-dom';


import Sidebar from './components/Sidebar';

import routes from "./routes.js";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find My Covid</h1>
      </header>
      <main>
        <Map />
      </main>
    </div>
  );
}

export default App;
