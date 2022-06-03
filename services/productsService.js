const productsModel = require('../models/productsModel');

const getProductsAll = () => productsModel.getProductsAll();

module.exports = {
  getProductsAll,
};