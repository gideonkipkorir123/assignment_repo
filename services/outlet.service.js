const { Outlet } = require('../models');

const getAllOutlets = async ({ page, limit, region, category }) => {
  const filter = {};

  if (region.trim()) {
    filter.region = new RegExp(region, 'i');
  }

  if (category.trim()) {
    filter.productCategories = { $regex: category, $options: 'i' };
  }

  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    Outlet.find(filter).skip(skip).limit(limit),
    Outlet.countDocuments(filter)
  ]);

  return {
    data,
    pagination: {
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit)
    }
  };
};

const createOutlet = async (data) => {
  return await Outlet.create(data);
};

module.exports = {
  getAllOutlets,
  createOutlet
};
