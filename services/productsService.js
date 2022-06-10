const productsModel = require('../models/productsModel');

const getProductsAll = () => productsModel.getProductsAll();

const getProductsId = async (id) => {
  const [result] = await productsModel.getProductsId(id);
  if (!result) return false;
  return result;
};

const createProduct = async (name, quantity) => {
  const returnProduct = await productsModel.findProduct(name);
  const products = await productsModel.createProduct(name, quantity);

  if (returnProduct) {
    return {
      status: 400,
      response: { message: 'Product already exists' },
    };
  }
  return {
    status: 201,
    response: {
      id: products,
      name,
      quantity,
    },
  };
}; 

module.exports = {
  getProductsAll,
  getProductsId,
  createProduct,
};