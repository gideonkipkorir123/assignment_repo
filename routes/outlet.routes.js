const express = require('express');
const router = express.Router();
const { outletController } = require('../controllers');
const { verifyToken } = require('../middlewares/auth.middleware');

// Protect both GET and POST
router.get('/', verifyToken, outletController.getAllOutlets);
router.post('/', verifyToken, outletController.createOutlet);

module.exports = router;

// All outlet routes are now protected using JWT tokens.
// Clients must send Authorization: Bearer <token> to access them.
