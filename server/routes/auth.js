const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user'); 
require('dotenv').config(); 

const router = express.Router();
const JWT_SECRET="UltraSecretClef";
// Route d'inscription
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Vérifier si l'utilisateur existe déjà
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    return res.status(400).json({ message: 'L\'utilisateur avec cet email existe déjà' });
  }

  // Hashage du mot de passe
  const hashedPassword = await bcrypt.hash(password, 10);

  // Création de l'utilisateur
  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      message: 'Utilisateur créé avec succès',
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
  }
});

// Route de connexion
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log('Début de la connexion');
    // Vérifier si l'utilisateur existe
    const user = await User.findOne({ where: { email } });
    console.log('Utilisateur trouvé :', user ? user.email : 'Non trouvé');

    if (!user) {
      return res.status(401).json({ message: 'Utilisateur non trouvé' });
    }

    // Comparer les mots de passe
    const isPasswordValid = await user.comparePassword(password);
    console.log('Mot de passe valide ? ', isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    // Générer un token JWT
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
    console.log('Token généré :', token);

    res.json({ token });
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);  // Log l'erreur complète ici
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
});

module.exports = router;
