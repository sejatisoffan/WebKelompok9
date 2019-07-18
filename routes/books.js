const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');

const auth = require('../configs/auth');

router.get('/',auth.verifyToken, booksController.getAllBooks);

router.post('/add', booksController.createBooks);

router.put('/:id', booksController.updateBooks);


//router.delete('/:id', booksController.deleteProduct);


module.exports = router;