const Product = require('../models/product');
const jwt = require('jsonmwebtoken');
const dotenv = require('dotenv');

dotenv.config();

models.exports.getIndexProduct = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error, authData)=>{
		if (error){
			res.sendStatus(403);
		}else{
			res.json({
				message:'OK',
				authData: authData
			})
		}
	})
}