const productsService = require('../services/productsService');

const getProductsAll = async (_req, res) => {
  const rows = await productsService.getProductsAll();
  return res.status(200).json(rows);
};

const getProductsId = async (req, res) => {
  const { id } = req.params;
  const rows = await productsService.getProductsId(id);

  if (!rows) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(rows);
};

const createProduct = async (req, res) => {
  const { name, quantity } = req.body;
  const { status, response } = await productsService.createProduct(name, quantity);
  return res.status(status).json(response);
};

module.exports = {
  getProductsAll,
  getProductsId,
  createProduct,
};