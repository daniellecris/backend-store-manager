const sinon = require('sinon');
const {expect} = require('chai');
const salesService = require('../../../services/salesService');
const salesController = require('../../../controllers/salesController');
const { json } = require('body-parser');

describe('Verificando no caminho /sales, se retornam todas as vendas', () => {
  const req = {};
  const res = {};

  before(() => {
    req.body = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    const sales = [
      {
        saleId: 1,
        date: '2021-09-09T04:54:29.000Z',
        productId: 1,
        quantity: 2
      }
    ];
    sinon.stub(salesService, 'getSalesAll').resolves(sales);
  })
  after(() => {
    salesService.getSalesAll.restore();
  })

  it('O retorno do status é 200', async () => {
    await salesController.getSalesAll(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  })
  it('O retorno do json é um array', async () => {
    await salesController.getSalesAll(req, res);
    expect(res.json.calledWith(sinon.match.array)).to.be.equal(true);
  })
});

describe('Verificando no caminho /sales/:id, se retorna a venda', () => {
  const req = {};
  const res = {};
  
  const sales = [
    {
      saleId: 1,
      date: '2021-09-09T04:54:29.000Z',
      productId: 1,
      quantity: 2
    }
  ];
  
  before(() => {
    req.body = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  })
    
  it('O retorno do status é 200', async () => {
    sinon.stub(salesService, 'getSalesId').resolves(sales);
    req.params = {id: 1};
    await salesController.getSalesId(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
    salesService.getSalesId.restore();
  })
  it('O retorno do json é um array', async () => {
    sinon.stub(salesService, 'getSalesId').resolves(false);
    req.params = {id: 2};
    await salesController.getSalesId(req, res);
    expect(res.status.calledWith(404)).to.be.equal(true);
    salesService.getSalesId.restore();
  })
});