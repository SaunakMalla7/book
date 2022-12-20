import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Edit from './components/Edit';
import Add from './components/Add';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};
export default App;
