const validateSalesId = (req, res, next) => {
  const productById = req.body.some(({ productId }) => {
    if (productId === undefined) {
      return true;
    } return false;
  });
  if (productById) return res.status(400).json({ message: '"productId" is required' });

  next();
};

const validateQuantity = (req, res, next) => {
  const quantityProduct = req.body.some(({ quantity }) => {
    if (quantity === undefined) {
      return true;
    } return false;
  });

  if (quantityProduct) { 
    return res.status(400).json({ message: '"quantity" is required' });
  }
  next();
};

const validate = (req, res, next) => {
  const quantityProduct = req.body.some(({ quantity }) => { 
    if (quantity <= 0) {
      return true;
    } return false;
  });

  if (quantityProduct) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = {
  validateSalesId,
  validateQuantity,
  validate,
};