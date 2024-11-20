import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Pour rediriger après l'inscription

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [lastName, setLastname] = useState('');
  const [firstName, setFirstname] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validation des mots de passe avant l'inscription
    if (password !== secondPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    // Vérification des champs requis
    if (!firstName || !lastName || !email || !password) {
      setError('Tous les champs doivent être remplis');
      return;
    }

    console.log({ firstName, lastName, email, password });  // Affiche les données envoyées

    // Appel API pour l'inscription
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        // Rediriger vers la page de connexion après une inscription réussie
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(data.message || 'Erreur d\'inscription');
      }
    } catch (error) {
      setError('Une erreur est survenue, veuillez réessayer');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (secondPassword && e.target.value !== secondPassword) {
      setError('Les mots de passe ne correspondent pas');
    } else {
      setError(null);
    }
  };

  const handleSecondPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondPassword(e.target.value);
    if (password && e.target.value !== password) {
      setError('Les mots de passe ne correspondent pas');
    } else {
      setError(null);
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ backgroundColor: 'white', borderRadius: '16px' }}>
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
        <Typography component="h1" variant="h5">
          S'inscrire
        </Typography>
        {successMessage && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {successMessage}
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="Prénom"
            name="firstName"
            autoComplete="firstName"
            autoFocus
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Nom"
            name="lastName"
            autoComplete="lastName"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
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
            onChange={handlePasswordChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="secondPassword"
            label="Vérification mot de passe"
            type="password"
            id="secondPassword"
            autoComplete="current-password"
            value={secondPassword}
            onChange={handleSecondPasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            disabled={!!error}
          >
            S'inscrire
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
