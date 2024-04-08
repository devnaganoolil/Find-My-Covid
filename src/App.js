// src/App.js
import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Reports from './components/Pages/Reports';
import CircleLoader from "react-spinners/CircleLoader";

import './App.css';

import Sidebar from './components/Sidebar';

function App() {
  const [loading, setLoading] = useState(true); // Set initial loading state to true

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // After 5000 milliseconds, set loading to false
    }, 5000);
  }, []);

  return (
    <div className='App'>
      {loading ? (
        <div style={{ paddingTop: '300px',paddingLeft: "800px", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircleLoader
            color={'#F37A24'}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <p style={{ paddingTop:'50px',paddingRight:'850px',color: 'white' }}>Please wait while we fetch the data...</p>
        </div>
      ) : (
        <React.Fragment> {/* Use React.Fragment or empty tags to group multiple children */}
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </React.Fragment>
      )}
    </div>
  );
}
export default App;
