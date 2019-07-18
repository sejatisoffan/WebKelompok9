const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Order extends Sequelize.Model{}

Order.init({
	kode: Sequelize.STRING,
	judul: Sequelize.STRING,
	kategori: Sequelize.STRING,
	penulis: Sequelize.STRING,
	penerbit: Sequelize.STRING,
	tahun: Sequelize.STRING,
	harga: Sequelize.INTEGER
},{sequelize, modelName: 'order'});

module.exports = Order;