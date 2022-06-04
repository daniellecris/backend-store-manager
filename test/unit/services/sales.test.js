const sinon = require('sinon');
const {expect} = require('chai');
const salesModel = require('../../../models/salesModel')
const salesService = require('../../../services/salesService');

describe('Verificando no caminho /sales, se retornam as vendas', () => {
  before(() => {
    const sales = [[
      {
        saleId: 1,
        date: '2021-09-09T04:54:29.000Z',
        productId: 1,
        quantity: 2
      }
    ]];
    sinon.stub(salesModel, 'getSalesAll').resolves(sales);
  })
  after(() => {
    salesModel.getSalesAll.restore();
  })

  it('O retorno dos produtos é um array', async () => {
    const response = await salesService.getSalesAll();
    expect(response).to.be.an('array');
  })
  it('O retorno dos produtos é um objeto', async () => {
    const [response] = await salesService.getSalesAll();
    expect(response).to.be.an('object');
  })
  it('O retorno não é vazio', async () => {
    const [response] = await salesService.getSalesAll();
    expect(response).not.to.be.empty;
  })
});

describe('Verificando no caminho /sales/:id,  se retorna a venda', () => {
  before(() => {
    const sales = [[
      {
        saleId: 1,
        date: '2021-09-09T04:54:29.000Z',
        productId: 1,
        quantity: 2
      }
    ]];
    sinon.stub(salesModel, 'getSalesId').resolves(sales);
  })
  after(() => {
    salesModel.getSalesId.restore();
  })

  it('O retorno dos produtos é um array', async () => {
    const response = await salesService.getSalesId(1);
    expect(response).to.be.an('array');
  })
  it('O retorno dos produtos é um objeto', async () => {
    const [response] = await salesService.getSalesId(1);
    expect(response).to.be.an('object');
  })
  it('O retorno não é vazio', async () => {
    const [response] = await salesService.getSalesId(1);
    expect(response).not.to.be.empty;
    salesModel.getSalesId.restore();
  })
  it('Caso não exista, retorna erro', async () => {
    sinon.stub(salesModel, 'getSalesId').resolves([]);
    const [response] = await salesService.getSalesId(5);
    expect(response).to.be.equal(false);
  })
});