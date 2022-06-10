const connection = require('../db/connection');

const getProductsAll = async () => {
  const [returnConnect] = await connection.execute('SELECT * FROM products');
  return returnConnect;
};

const getProductsId = async (id) => {
  const [returnConnect] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return returnConnect;
};

const findProduct = async (name) => {
  const query = 'SELECT name FROM StoreManager.products WHERE name = ?';
  const [product] = await connection.execute(query, [name]);

  if (product.length === 0) return null;

  return product;
};

const createProduct = async (name, quantity) => {
  const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
  const [{ product }] = await connection.execute(query, [name, quantity]);
  return product;
};

module.exports = {
  getProductsAll,
  getProductsId,
  findProduct,
  createProduct,
};