const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs'); // Pour le hachage des mots de passe
const sequelize = require('../database');  // Assure-toi que le chemin vers ta connexion Sequelize est correct

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Hooks pour hacher les mots de passe avant l'insertion ou la mise à jour
  hooks: {
    beforeCreate: async (user) => {
      // Hachage du mot de passe avant de le stocker
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    },
    beforeUpdate: async (user) => {
      // Hachage du mot de passe avant de le mettre à jour
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    }
  }
});

// Ajouter une méthode de comparaison pour vérifier le mot de passe lors de la connexion
User.prototype.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = { User };
