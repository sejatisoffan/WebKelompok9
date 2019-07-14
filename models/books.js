const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Books extends Sequelize.Model{}

Books.init({
	kode: Sequelize.STRING,
	kategori: Sequelize.STRING,
	penulis: Sequelize.STRING,
	penerbit: Sequelize.STRING,
	tahun: Sequelize.STRING,
	stok: Sequelize.INTEGER,
	harga: Sequelize.INTEGER
},{sequelize, modelName: 'books'});

module.exports = Books;