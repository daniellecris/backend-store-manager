const sinon = require('sinon');
const {expect} = require('chai');
const productsService = require('../../../services/productsService');
const productsController = require('../../../controllers/productsController');
// const { json } = require('body-parser');

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
  it('O retorno do json é um array', async () => {
    await productsController.getProductsAll(req, res);
    expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
  })
});

describe('Verificando no caminho /products/:id, se o produto retorna', () => {
  const req = {};
  const res = {};

  const products = [
    {
      "id": 1,
      "name": "produto A",
      "quantity": 10
    }
  ];

  before(() => {
    req.body = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  })
  
  it('O retorno do status é 200', async () => {
    sinon.stub(productsService, 'getProductsId').resolves(products);
    req.params = {id: 1};
    await productsController.getProductsId(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
    productsService.getProductsId.restore();
  })
  it('O retorno do json é um array', async () => {
    sinon.stub(productsService, 'getProductsId').resolves(false);
    req.params = {id: 2};
    await productsController.getProductsId(req, res);
    expect(res.status.calledWith(404)).to.be.equal(true);
    productsService.getProductsId.restore();
  })
});