const express = require('express');
const cors = require('cors');
const sequelize = require('./database');  // Importer la configuration de la base de données
const app = express();
  // En haut du fichier server.js


const corsOptions = {
  origin: 'http://localhost:3000', // spécifie l'origine de ton frontend
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type',
};
// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api', require('./routes/auth'));

// Synchronisation de la base de données
sequelize.sync()
  .then(() => {
    console.log('Base de données synchronisée');
  })
  .catch((err) => {
    console.error('Erreur de synchronisation', err);
  });

// Lancer le serveur
app.listen(5000, () => {
  console.log('Serveur démarré sur http://localhost:5000');
});
