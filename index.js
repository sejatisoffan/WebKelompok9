const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());


const homeRouter = require('./routes/home');
const booksRouter = require('./routes/books');
const userRouter = require('./routes/user');

const sequelize = require('./configs/sequelize');

//const Books = require('./models/books');
const User = require('./models/user');

app.use(homeRouter);
app.use('/books', booksRouter);
app.use('/user', userRouter);

app.get('/', (req,res) =>{
	res.render('index')
});

app.listen(3209, () => {
	console.log('Server Started');
	 sequelize.sync();
})