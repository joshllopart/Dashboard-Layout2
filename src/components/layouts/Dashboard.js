import React, { Component } from 'react';
import './Dashboard.css';

import MyNav from '../Navbar'
import Sidebar from '../Sidebar'
import MainContent from '../MainContent'

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <MyNav />
        <Sidebar />
        <MainContent />
      </div>
    );
  }
}

export default Dashboard;