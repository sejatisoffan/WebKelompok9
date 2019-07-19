const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());


const booksRouter = require('./routes/books');
const userRouter = require('./routes/user');
const orderRouter = require('./routes/order');

const sequelize = require('./configs/sequelize');

const Books = require('./models/books');
const User = require('./models/user');
const Order = require('./models/order');

app.use('/books', booksRouter);
app.use('/user', userRouter);
app.use('/order', orderRouter);

app.listen(3209, () => {
	console.log('Server Started');
	 sequelize.sync();
})