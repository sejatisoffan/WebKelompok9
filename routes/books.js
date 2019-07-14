const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');

router.get('/', booksController.getAllBooks);

router.post('/add', booksController.createBooks);

router.put('/:id', booksController.updateBooks);

//router.delete('/:id', booksController.deleteProduct);


module.exports = router;