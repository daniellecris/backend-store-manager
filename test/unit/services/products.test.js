const sinon = require('sinon');
const {expect} = require('chai');
const productsModel = require('../../../models/productsModel')
const productsService = require('../../../services/productsService');

describe('Verificando no caminho /products, se todos produtos retornam', () => {
  before(() => {
    const products = [
      {
        "id": 1,
        "name": "produto A",
        "quantity": 10
      }
    ];
    sinon.stub(productsModel, 'getProductsAll').resolves(products);
  })
  after(() => {
    productsModel.getProductsAll.restore();
  })

  it('O retorno dos produtos é um array', async () => {
    const response = await productsService.getProductsAll();
    expect(response).to.be.an('array');
  })
  it('O retorno dos produtos é um objeto', async () => {
    const [response] = await productsService.getProductsAll();
    expect(response).to.be.an('object');
  })
  it('O retorno não é vazio', async () => {
    const [response] = await productsService.getProductsAll();
    expect(response).not.to.be.empty;
  })
});

describe('Verificando no caminho /products/:id, se o produto retorna', () => {
  before(() => {
    const products = [[
      {
        "id": 1,
        "name": "produto A",
        "quantity": 10
      }
    ]];
    sinon.stub(productsModel, 'getProductsId').resolves(products);
  })
  after(() => {
    productsModel.getProductsId.restore();
  })

  it('O retorno dos produtos é um array', async () => {
    const response = await productsService.getProductsId(1);
    expect(response).to.be.an('array');
  })
  it('O retorno dos produtos é um objeto', async () => {
    const [response] = await productsService.getProductsId(1);
    expect(response).to.be.an('object');
  })
  it('O retorno não é vazio', async () => {
    const [response] = await productsService.getProductsId(1);
    expect(response).not.to.be.empty;
    productsModel.getProductsId.restore();
  })
  it('Caso não exista, retorna erro', async () => {
    sinon.stub(productsModel, 'getProductsId').resolves([]);
    const response = await productsService.getProductsId(5);
    expect(response).to.be.equal(false);
  })
});