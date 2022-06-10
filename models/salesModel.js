const { date } = require('joi');
const connection = require('../db/connection');

const getSalesAll = async () => {
  const [returnConnect] = await connection
    .execute(`SELECT sale_id as saleId,  s.date, product_id as productId, quantity
              FROM sales_products
              INNER JOIN sales s ON sale_id = s.id
              ORDER BY saleId, productId`);
  return returnConnect;
};

const getSalesId = async (id) => {
  const [returnConnect] = await connection
    .execute(`SELECT s.date, product_id as productId, quantity
              FROM sales_products
              INNER JOIN sales s ON sale_id = s.id
              WHERE s.id = ?
              ORDER BY productId`, [id]);
  return returnConnect;
};

const createSales = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [sales] = await connection.execute(query); 

  const idResult = { id: sales.insertId };
  return idResult;
};

const salesProducts = async (id, productId, quantity) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
     [id, productId, quantity],
    );
};

module.exports = {
  getSalesAll,
  getSalesId,
  createSales,
  salesProducts,
};