const salesModel = require('../models/salesModel');

const getSalesAll = () => salesModel.getSalesAll();

const getSalesId = async (id) => {
  const result = await salesModel.getSalesId(id);
  if (!result.length) return false;
  return result;
};

const createSales = async (array) => {
  const { id } = await salesModel.createSales();

  array.forEach(({ productId, quantity }) => {
    salesModel.salesProducts(id, productId, quantity);
  });
  return {
    id,
    itemsSold: array,
  };
};

module.exports = {
  getSalesAll,
  getSalesId,
  createSales,
};