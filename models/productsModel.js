const connection = require('../db/connection');

const getProductsAll = async () => {
  const [returnConnect] = await connection.execute('SELECT * FROM products');
  return returnConnect;
};

const getProductsId = async (id) => {
  const [returnConnect] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return returnConnect;
};

module.exports = {
  getProductsAll,
  getProductsId,
};