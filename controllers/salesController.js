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
  const array = req.body;
  const result = await salesService.createSales(array);
  return res.status(201).json(result);
};

const putSalesId = async (req, res) => {
  const { id } = req.params;
  const [{ productId, quantity }] = req.body;

  const result = await salesService.putSalesId(id, productId, quantity);
  return res.status(200).json(result);
};

module.exports = {
  getSalesAll,
  getSalesId,
  createSales,
  putSalesId,
};