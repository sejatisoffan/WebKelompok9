const Books = require('../models/books');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports.getAllBooks = (req,res)=>{
	jwt.verify(req.token, process.env.SECRETKEY,(error, authData)=>{
		if (error) {
			res.sendStatus(403);
		}else if(authData){
			res.json({
				message:'OK',
				authData : authData
			});
		}
	})

}

module.exports.createBooks = (req,res)=>{

	Books.create({
		kode: req.body.kode,
		kategori: req.body.kategori,
		penulis: req.body.penulis,
		penerbit: req.body.penerbit,
		tahun: req.body.tahun,
		stok: req.body.stok,
		harga: req.body.harga
	}).then((books)=>{
		res.json(books);
	}).catch((error) => {
		throw error;
	})
}

module.exports.updateBooks = (req,res) => {
	let values = {
		kode: req.body.kode,
		kategori: req.body.kategori,
		penulis: req.body.penulis,
		penerbit: req.body.penerbit,
		tahun: req.body.tahun,
		stok: req.body.stok,
		harga: req.body.harga
	}
	let conditions ={
		where:{
			id: req.params.id
		}
	}
	Books.update(values,conditions)
	.then((books) => {
		res.json(books);
	}).catch((error) => {
		throw error;
	})
}

module.exports.deleteBooks = (req,res)=>{
	let conditions ={
		where:{
			id: req.params.id
		}
	}
	Books.destroy(conditions)
	.then((books) => {
		res.json(books);
	}).catch((error) => {
		throw error;
	})
}
