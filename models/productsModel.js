const connection = require('../db/connection');

const getProductsAll = async () => {
  const [returnConnect] = await connection.execute('SELECT * FROM products');
  return returnConnect;
};

module.exports = {
  getProductsAll,
};