const sinon = require('sinon');
const {expect} = require('chai');
const productsService = require('../../../services/productsService');
const productsController = require('../../../controllers/productsController');
const { json } = require('body-parser');

describe('Verificando no caminho /products, se todos produtos retornam', () => {
  const req = {};
  const res = {};

  before(() => {
    req.body = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    const products = [
      {
        "id": 1,
        "name": "produto A",
        "quantity": 10
      }
    ];
    sinon.stub(productsService, 'getProductsAll').resolves(products);
  })
  after(() => {
    productsService.getProductsAll.restore();
  })

  it('O retorno do status é 200', async () => {
    await productsController.getProductsAll(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  })
});