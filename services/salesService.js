const salesModel = require('../models/salesModel');

const getSalesAll = () => salesModel.getSalesAll();

const getSalesId = async (id) => {
  const result = await salesModel.getSalesId(id);
  if (!result.length) return false;
  return result;
};

module.exports = {
  getSalesAll,
  getSalesId,
};