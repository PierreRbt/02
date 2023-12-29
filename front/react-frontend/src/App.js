import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ListMemberComponent from './components/ListMemberComponent';
import CreateMemberComponent from './components/CreateMemberComponent';
import UpdateMemberComponent from './components/UpdateMemberComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import React, { useState, useEffect } from 'react';

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<ListMemberComponent />} />
            <Route path="/members" element={<ListMemberComponent />} />
            <Route path="/add-member" element={<CreateMemberComponent />} />
            <Route path="/members/:memberId" element={<UpdateMemberComponent />} />
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;