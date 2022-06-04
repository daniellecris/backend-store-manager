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

module.exports = {
  getSalesAll,
  getSalesId,
};