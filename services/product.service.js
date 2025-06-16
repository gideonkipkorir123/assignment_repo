const { Product } = require('../models');

const getAllProducts = async ({ page = 1, limit = 10, search = '' }) => {
  const skip = (page - 1) * limit;

  const query = {
    $or: [
      { 'name.en': { $regex: search, $options: 'i' } },
      { 'name.fr': { $regex: search, $options: 'i' } },
      { 'description.en': { $regex: search, $options: 'i' } },
      { 'description.fr': { $regex: search, $options: 'i' } },
      { category: { $regex: search, $options: 'i' } }
    ]
  };

  const [data, total] = await Promise.all([
    Product.find(query).skip(skip).limit(parseInt(limit)).sort({ createdAt: -1 }),
    Product.countDocuments(query)
  ]);

  return {
    data,
    pagination: {
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit)
    }
  };
};

const createProduct = async (data) => {
  return await Product.create(data);
};

module.exports = {
  getAllProducts,
  createProduct
};
