import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
} from '@mui/material';
import { Link } from 'react-router-dom'; // Importer Link

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logique de connexion ici (appel API, validation, etc.)
    console.log('Email:', email);
    console.log('Mot de passe:', password);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{backgroundColor:'white', borderRadius: '16px',}}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
        }}
      >
        <Typography component="h1" variant="h5">
          Se connecter
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Se connecter
          </Button>
          
        </Box>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>S'inscrire</Link>
          </Button>
      </Box>
    </Container>
  );
};

export default Login;
