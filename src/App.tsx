import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './components/header';
import Login from './components/login';
import Register from './components/register';
import Paragraph from './components/paragraph';
import VideoPlayer from './components/videoPlayer';
import Profile from './components/profile'; 
import { Box, Button } from '@mui/material';

const App: React.FC = () => {
  
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Composant d'accueil */}
        <Route path="/login" element={<Login />} /> {/* Page de login */}
        <Route path="/register" element={<Register />} />
      </Routes>
      <Box sx={{ margin: 4, display: 'flex', justifyContent: 'space-around' }}>
        <Paragraph title="Qu'est ce qu'Allergie ?">
          Allergie est un projet encore en test permettant aux personnes allergiques de pouvoir
          facilement repérer les plats qu'ils peuvent manger dans les restaurants.
        </Paragraph>
        <Paragraph title="Comment ?">
          Pour l'instant seulement en scannant le cahier des allergènes ou en prenant en photo le menu
          (ATTENTION en prenant le menu en photo, nous ne pouvons pas certifier que les résultats seront
          sûrs à 100%).
        </Paragraph>
      </Box>
      <VideoPlayer src="public/chute.mp4" width="640px" height="360px" />
    </Router>
  );
};

// Page d'accueil avec un bouton pour aller sur le profil
const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour savoir si l'utilisateur est connecté

  // Vérification de l'état de connexion (exemple avec un token JWT dans le localStorage)
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // L'utilisateur est connecté si un token est présent
  }, []);
  return (
    <Box sx={{ textAlign: 'center', marginTop: 4 }}>
      {isLoggedIn ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/profile')} // Navigation vers la page de profil
        >
          Voir mon profil
        </Button>
      ) : null}
    </Box>
  );
};

export default App;
