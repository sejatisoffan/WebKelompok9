const Sequelize = require('sequelize');
//koneksi database terbaru
//const sequelize = new Sequelize('mysql://root:@localhost:3306/books_kel9');

const sequelize = new Sequelize('books_kel9','root','',{
	host: 'localhost',
	dialect: 'mysql'
});
module.exports = sequelize;