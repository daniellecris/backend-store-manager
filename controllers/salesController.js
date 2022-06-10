const salesService = require('../services/salesService');

const getSalesAll = async (_req, res) => {
  const rows = await salesService.getSalesAll();
  return res.status(200).json(rows);
};

const getSalesId = async (req, res) => {
  const { id } = req.params;
  const rows = await salesService.getSalesId(id);

  if (!rows) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(rows);
};

const createSales = async (req, res) => {
  const { product_id, quantity } = req.body;
  const { status, response } = await salesService.createSales(product_id, quantity);
  return res.status(status).json(response);
};

module.exports = {
  getSalesAll,
  getSalesId,
  createSales,
};