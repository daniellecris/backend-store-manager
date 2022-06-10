const express = require('express');

const router = express.Router();
router.use(express.json());

const salesController = require('../controllers/salesController');
const { validateSalesId, validateQuantity, validate } = require('../middlewares/validateSales');

router.get('/', salesController.getSalesAll);
router.get('/:id', salesController.getSalesId);
router.post('/', validateSalesId, validateQuantity, validate, salesController.createSales);
router.put('/:id', salesController.putSalesId);
router.delete('/:id', salesController.deleteSalesId);

module.exports = router;