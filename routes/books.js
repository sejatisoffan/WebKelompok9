const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');

const auth = require('../configs/auth');

router.get('/', auth.verifyToken, booksController.getAllBooks);

router.post('/add', booksController.createBooks);

router.put('/update:id', booksController.updateBooks);

router.delete('/delete:id', booksController.deleteBooks);


module.exports = router;