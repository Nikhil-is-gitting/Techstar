import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './styles/main.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;