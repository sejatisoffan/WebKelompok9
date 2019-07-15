module.exports.verifyToken = (req, res, next) => {
	const bearerHeader = req.headers['authorization'];

	if (typeof bearerHeader ! == 'underfined'){
		const bearer = bearerHeader.split('');
		const bearerHeader = bearer[1];
		req.token = bearerToken;
		next();
	} else{
		res.sendStatus(403);
	}
}