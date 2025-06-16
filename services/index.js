const userService = require('./user.service');
const productService = require('./product.service');
const outletService = require('./outlet.service');
const blogService = require('./blog.service');
const faqService = require('./faq.service');
const dashboardService = require('./dashboard.service'); // ✅ Add this line

// This file serves as an index for all services in the application.
// It allows for easier imports in other parts of the application.
module.exports = {
  userService,
  productService,
  outletService,
  blogService,
  faqService,
  dashboardService // ✅ Add this line
};
