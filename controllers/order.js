const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const Order = require('../models/order');

module.exports.orderBooks = (req,res)=>{
	
	jwt.verify(req.token, process.env.SECRETKEY,(error, authData)=>{
			if (authData['roles'] == "user") {
				Order.create({
					nama: req.body.nama,
					alamat: req.body.alamat,
					judul: req.body.judul,
					kategori: req.body.kategori,
					penulis: req.body.penulis,
					jumlah: req.body.jumlah
				})
				.then((order)=>{
					res.json(order);
				}).catch((error) => {
					throw error;
				})
			}else{
				res.sendStatus(403);
			}
		})

	}
	

