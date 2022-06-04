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

module.exports = {
  getSalesAll,
  getSalesId,
};