const Sequelize = require('sequelize');
//koneksi database terbaru
const sequelize = new Sequelize('mysql://root:@localhost:3306/tugasbesar');

module.exports = sequelize;