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
  const [product] = await connection.execute(query, [name, quantity]);
  return product;
};

const putProductId = async (id, name, quantity) => {
  const query = 'UPDATE StoreManager.products SET name=?, quantity=? WHERE id = ?';
  const updateProduct = await connection.execute(query, [name, quantity, id]);
  return updateProduct;
};

const deleteProductId = (id) => {
  connection.execute('DELETE FROM StoreManager.products WHERE id=?', [id]);
};

module.exports = {
  getProductsAll,
  getProductsId,
  findProduct,
  createProduct,
  putProductId,
  deleteProductId,
};