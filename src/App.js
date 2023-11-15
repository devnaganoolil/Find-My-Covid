// src/App.js
import React from 'react';
import Map from './components/Map';

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
