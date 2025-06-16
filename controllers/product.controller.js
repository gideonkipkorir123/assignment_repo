const { productService } = require('../services');

const getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';

    const result = await productService.getAllProducts({ page, limit, search });

    res.status(200).json({
      message: 'Products fetched successfully',
      data: result.data,
      pagination: result.pagination
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
};


const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json({ message: 'Product created successfully', data: product });
  } catch (err) {
    res.status(400).json({ message: 'Failed to create product', error: err.message });
  }
};

module.exports = {
  getAllProducts,
  createProduct
};
