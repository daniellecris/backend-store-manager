const salesModel = require('../models/salesModel');

const getSalesAll = () => salesModel.getSalesAll();

const getSalesId = async (id) => {
  const result = await salesModel.getSalesId(id);
  if (!result.length) return false;
  return result;
};

const createSales = async (salesId, productId, quantity) => {
  const [sales] = await salesModel.createSales(salesId, productId, quantity);
  return sales;
};

module.exports = {
  getSalesAll,
  getSalesId,
  createSales,
};