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

const createSales = async (salesId, productId, quantity) => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (Now())';
  const [sales] = await connection.execute(query, [date]); 

  const { salesId: id } = sales;
  console.log(id);

//  const query1 = 'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)';
    
    const [salesProducts] = await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
       [salesId, productId, quantity],
      );
      
    return salesProducts;
};

module.exports = {
  getSalesAll,
  getSalesId,
  createSales,
};