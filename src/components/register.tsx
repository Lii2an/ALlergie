import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Alert,
} from '@mui/material';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [lastName, setLastname] = useState('');
  const [firstName, setFirstname] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Validation des mots de passe avant l'inscription
    if (password !== secondPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    
    // Logique de connexion ici (appel API, validation, etc.)
    console.log('Prénom:', firstName);
    console.log('Nom:', lastName);
    console.log('Email:', email);
    console.log('Mot de passe:', password);
    setError(null);
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
          S'inscrire
        </Typography>
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
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            disabled={!!error} // Désactiver le bouton si les mots de passe ne correspondent pas
          >
            S'inscrire
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
