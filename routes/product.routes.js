const express = require('express');
const router = express.Router();
const { productController } = require('../controllers');
const { verifyToken } = require('../middlewares/auth.middleware');

// Protect both GET and POST
router.get('/', verifyToken, productController.getAllProducts);
router.post('/', verifyToken, productController.createProduct);

module.exports = router;

// All product routes are now protected using JWT tokens.
// Clients must send Authorization: Bearer <token> to access them.
