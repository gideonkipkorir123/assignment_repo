const { User, Product, Blog } = require('../models');

const getDashboardStats = async () => {
  const [totalUsers, totalProducts, contributorIds] = await Promise.all([
    User.countDocuments(),
    Product.countDocuments(),
    Blog.distinct('author') // Unique authors = contributors
  ]);

  const totalContributors = contributorIds.length;

  return {
    totalUsers,
    totalProducts,
    totalContributors
  };
};

module.exports = {
  getDashboardStats
};
