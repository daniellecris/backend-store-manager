const productsService = require('../services/productsService');

const getProductsAll = async (_req, res) => {
  const rows = await productsService.getProductsAll();
  // router.get('/', async (_req, res) => {
  // const [rows] = await productsService();
  return res.status(200).json(rows);
};

module.exports = {
  getProductsAll,
};