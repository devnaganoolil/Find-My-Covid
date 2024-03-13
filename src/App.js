// src/App.js
import React from 'react';
import Map from './components/Map';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import Home from './components/Pages/Home';
import Reports from './components/Pages/Reports';

import './App.css';

import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className='App'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}
export default App;
