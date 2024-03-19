
import React, { useEffect, useState } from 'react';
import Map from '../Map';
import {BrowserRouter as Router, Switch, Route, Routes, useLocation} from 'react-router-dom';
import Reports from './Reports';
import Sidebar from '../Sidebar';
import './Home.css';


function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);



  return (
    <div className="Home">
      <Map />
      </div>
  );
}

export default Home;