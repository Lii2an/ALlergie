const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/allergie',{logging : console.log,});  // Modifie selon tes informations

// Tester la connexion à la base de données
/*sequelize.sync({ force: true })  // Efface et recrée les tables
  .then(() => console.log('Tables synchronisées'))
  .catch(err => console.error('Erreur de synchronisation :', err));*/
sequelize.authenticate()
  .then(() => console.log('Connexion réussie'))
  .catch((error) => console.error('Erreur de connexion:', error));

module.exports = sequelize;
