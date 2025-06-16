const userController = require('./user.controller');
const productController = require('./product.controller');
const outletController = require('./outlet.controller');
const blogController = require('./blog.controller');
const faqController = require('./faq.controller');
const dashboardController = require('./dashboard.controller'); // ✅ Add this line

// Central export for all controllers
module.exports = {
  userController,
  productController,
  outletController,
  blogController,
  faqController,
  dashboardController // ✅ Add this line
};
