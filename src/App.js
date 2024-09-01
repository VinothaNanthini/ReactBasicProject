import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Toggle from './components/login';
import IMAGES from './components/img';
import Form from './components/form';
import ContactForm from './components/contact';
import Statemanagement from './components/statemanagement';
import Header from './components/header';
import Time from './components/time';
import Calculator from './components/calculator';
import Notes from './components/notes';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Courese</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/state-management">State Management</Link>
            </li>
            <li>
              <Link to="/time">Time</Link>
            </li>
            

            <li>
              <Link to="/article">Toggle</Link>
            </li>
            <li>
              <Link to="/content">images</Link>
            </li>
            <li>
              <Link to="/header">ContactForm</Link>
            </li>
           
           
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/notes" element={<Notes/>} />

          <Route path="/state-management" element={<Statemanagement />} />
          <Route path="/time" element={<Time />} />
          
          <Route path="/article" element={<Toggle />} />
          <Route path="/content" element={<IMAGES />} />
          <Route path="/header" element={<ContactForm />} />
        
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;