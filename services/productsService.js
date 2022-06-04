const productsModel = require('../models/productsModel');

const getProductsAll = () => productsModel.getProductsAll();

const getProductsId = async (id) => {
  const [result] = await productsModel.getProductsId(id);
  if (!result) return false;
  return result;
};

module.exports = {
  getProductsAll,
  getProductsId,
};