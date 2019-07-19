const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Order extends Sequelize.Model{}

Order.init({
	nama: Sequelize.STRING,
	alamat: Sequelize.STRING,
	judul: Sequelize.STRING,
	kategori: Sequelize.STRING,
	penulis: Sequelize.STRING,
	jumlah: Sequelize.INTEGER
},{sequelize, modelName: 'order'});

module.exports = Order;