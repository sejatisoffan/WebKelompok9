const Books = require('../models/books');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports.getAllBooks = (req,res)=>{

	jwt.verify(req.token, process.env.SECRETKEY,(error, authData)=>{
		if (authData['roles'] == "user") {
			Books
				.findAll()
			.then((books) => {
				res.json(books);
			})
			.catch((error) => {
				console.log("error");
			})
		}else{
			res.sendStatus(403);
		}
	})

}

module.exports.detailBooks = (req,res)=>{

	jwt.verify(req.token, process.env.SECRETKEY,(error, authData)=>{
		if (authData['roles'] == "user") {
			Books
				.findOne({
					where : {
						id: req.params.id
					}
				})
				.then((books) => {
					res.json(books);
				})
				.catch((error) => {
					console.log("error");
				})

		}else{
			res.sendStatus(403);
		}
	})

}

module.exports.createBooks = (req,res)=>{
	
	jwt.verify(req.token, process.env.SECRETKEY,(error, authData)=>{
			if (authData['roles'] == "admin") {
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
			}else{
				res.sendStatus(403);
			}
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
	jwt.verify(req.token, process.env.SECRETKEY,(error, authData)=>{
		if (authData['roles'] == "admin") {
			Books.update(values,conditions)
				.then((books) => {
				res.json(books);
				}).catch((error) => {
				throw error;
				})
		}else{
			res.sendStatus(403);
		}
	})
}

module.exports.deleteBooks = (req,res)=>{
	let conditions ={
		where:{
			id: req.params.id
		}
	}
	jwt.verify(req.token, process.env.SECRETKEY,(error, authData)=>{
		if (authData['roles'] == "admin") {
			Books.destroy(conditions)
				.then((books) => {
					res.json(books);
				}).catch((error) => {
					throw error;
				})
		}else{
			res.sendStatus(403);
		}
	})
	
}
