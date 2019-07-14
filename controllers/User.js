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
				username: req.body.username,
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