const express = require('express');

const router = express.Router();

const orderController = require('../controllers/order');

const auth = require('../configs/auth');

router.get('/',auth.verifyToken, orderController.getAllOrder);

router.post('/add', orderController.createOrder);

router.put('/:id', orderController.updateOrder);


//router.delete('/:id', OrderController.deleteProduct);


module.exports = router;