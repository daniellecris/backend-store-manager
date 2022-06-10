const productsModel = require('../models/productsModel');

const getProductsAll = () => productsModel.getProductsAll();

const getProductsId = async (id) => {
  const [result] = await productsModel.getProductsId(id);
  if (!result || result.length === 0) return false;
  return result;
};

const createProduct = async (name, quantity) => {
  const returnProduct = await productsModel.findProduct(name);
  const products = await productsModel.createProduct(name, quantity);

  if (returnProduct) {
    return {
      status: 409,
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

const putProductId = async (id, name, quantity) => {
  const idReturn = await getProductsId(id);

  if (!idReturn) return null;

  await productsModel.putProductId(id, name, quantity);
  return {
    id,
    name,
    quantity,
  };
};

const deleteProductId = async (id) => {
  const idReturn = await getProductsId(id);

  if (!idReturn) return null;

  return productsModel.deleteProductId(id);
};

module.exports = {
  getProductsAll,
  getProductsId,
  createProduct,
  putProductId,
  deleteProductId,
};