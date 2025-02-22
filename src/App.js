import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Homepage from './components/Homepage';
import Estudios from './components/Estudios';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/estudios" element={<Estudios />} />

      </Routes>
    </Router>
  );
}

export default App;

