const express = require('express');
const productsController = require('../controllers/productsController');
const validateProducts = require('../middlewares/validateProducts');
// const validateSalesId = require('../middlewares/validateSales');

const router = express.Router();
router.use(express.json());

router.get('/', productsController.getProductsAll);
router.get('/:id', productsController.getProductsId);
router.post('/', validateProducts, productsController.createProduct);
router.put('/:id', validateProducts, productsController.putProductId);
router.delete('/:id');

module.exports = router;