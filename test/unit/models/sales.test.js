const sinon = require('sinon');
const {expect} = require('chai');
const connection = require('../../../db/connection');
const salesModel = require('../../../models/salesModel');

describe('Verificando no caminho /sales, se retornan as vendas', () => {
  before(() => {
    const sales = [[
      {
        saleId: 1,
        date: '2021-09-09T04:54:29.000Z',
        productId: 1,
        quantity: 2
      }
    ]];
    sinon.stub(connection, 'execute').resolves(sales);
  })
  after(() => {
    connection.execute.restore();
  })

  it('O retorno dos produtos é um array', async () => {
    const response = await salesModel.getSalesAll();
    expect(response).to.be.an('array');
  })
  it('O retorno dos produtos é um objeto', async () => {
    const [response] = await salesModel.getSalesAll();
    expect(response).to.be.an('object');
  })
  it('O retorno não é vazio', async () => {
    const [response] = await salesModel.getSalesAll();
    expect(response).not.to.be.empty;
  })
});

describe('Verificando no caminho /sales/:id, se a venda retorna', () => {
    before(() => {
      const sales = [[
        {
          saleId: 1,
          date: '2021-09-09T04:54:29.000Z',
          productId: 1,
          quantity: 2
        }
      ]];
      sinon.stub(connection, 'execute').resolves(sales);
    })
    after(() => {
      connection.execute.restore();
    })
  
    it('O retorno dos produtos é um array', async () => {
      const response = await salesModel.getSalesId(1);
      expect(response).to.be.an('array');
    })
    it('O retorno dos produtos é um objeto', async () => {
      const [response] = await salesModel.getSalesId(1);
      expect(response).to.be.an('object');
    })
    it('O retorno não é vazio', async () => {
      const [response] = await salesModel.getSalesId(1);
      expect(response).not.to.be.empty;
    })
  });