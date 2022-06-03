const sinon = require('sinon');
const {expect} = require('chai');
const connection = require('../../../db/connection');
const productsModel = require('../../../models/productsModel');

describe('Verificando no caminho /products, se todos produtos retornam', () => {
  before(() => {
    const products = [[
      {
        "id": 1,
        "name": "produto A",
        "quantity": 10
      }
    ]];
    sinon.stub(connection, 'execute').resolves(products);
  })
  after(() => {
    connection.execute.restore();
  })

  it('O retorno dos produtos é um array', async () => {
    const response = await productsModel.getProductsAll();
    expect(response).to.be.an('array');
  })
  it('O retorno dos produtos é um objeto', async () => {
    const [response] = await productsModel.getProductsAll();
    expect(response).to.be.an('object');
  })
  it('O retorno não é vazio', async () => {
    const [response] = await productsModel.getProductsAll();
    expect(response).not.to.be.empty;
  })
});