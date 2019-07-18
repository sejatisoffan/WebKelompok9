const express = require('express');

const router = express.Router();

const booksController = require('../controllers/books');

const auth = require('../configs/auth');

router.get('/', auth.verifyToken, booksController.getAllBooks);

router.post('/add', auth.verifyToken, booksController.createBooks);

router.put('/update:id', auth.verifyToken, booksController.updateBooks);

router.delete('/delete:id', auth.verifyToken, booksController.deleteBooks);



module.exports = router;