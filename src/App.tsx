import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Login from './components/login';
import Register from './components/register'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Composant d'accueil */}
        <Route path="/login" element={<Login />} /> {/* Page de login */}
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
  );
};

const Home: React.FC = () => (
  <div>
    <h2>Bienvenue sur la page d'accueil</h2>
  </div>
);

export default App;
