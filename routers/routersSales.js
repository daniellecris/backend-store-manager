const express = require('express');

const router = express.Router();
router.use(express.json());

const salesController = require('../controllers/salesController');

router.get('/', salesController.getSalesAll);
router.get('/:id', salesController.getSalesId);

module.exports = router;