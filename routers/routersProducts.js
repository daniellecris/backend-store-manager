const express = require('express');

const router = express.Router();
router.use(express.json());

const productsController = require('../controllers/productsController');

router.get('/', productsController.getProductsAll);
router.get('/:id', productsController.getProductsId);

module.exports = router;