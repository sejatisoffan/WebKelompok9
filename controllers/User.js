const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/User');

module.exports.postRegister = (req,res) => {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(req.body.password, salt);

	User.findOrCreate({
			where: { email: req.body.email },
			defaults: {
				nama: req.body.nama,
				alamat: req.body.alamat,
				no_telp: req.body.no_telp,
				email: req.body.email,
				password: hash,
				roles: req.body.roles
			}

	})
	.then((user) => {
		res.json(user);
	})
	.catch((error) => {
		console.log(error);
	})

}

module.exports.postLogin = (req, res) => {
	User.findOne({
		where: {
			email: req.body.email
		}
	})
	.then(user => {
		if (!user){
			res.status(400).send('Username not found');
		}
		
		bcrypt.compare(req.body.password, user.get('password'), function (err, isMatch){
			if (err){
				res.status(400).send('Password Error');
			};

			if (isMatch){
				jwt.sign({ id: user.get('id')}, process.env.SECRETKEY, (error,token) => {
					res.json({ 
						token: token 
					});
				})
			} else {
				res.status(400).send('Wrong Password');
			}
		})
	})
		.catch((error) => {
			console.log(error);
		});
}