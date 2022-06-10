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

const putSalesId = async (saleId, productId, quantity) => {
  await salesModel.putSalesId(saleId, productId, quantity);
  return {
    saleId,
    itemUpdated: [
      {
        productId,
        quantity,
      },
    ],
  };
};

const deleteSalesId = async (id) => {
  const idReturn = await getSalesId(id);

  if (!idReturn) return null;

  return salesModel.deleteSalesId(id);
};

module.exports = {
  getSalesAll,
  getSalesId,
  createSales,
  putSalesId,
  deleteSalesId,
};