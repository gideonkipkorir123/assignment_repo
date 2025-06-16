const express = require('express');
const router = express.Router();
const { faqController } = require('../controllers');
const { verifyToken } = require('../middlewares/auth.middleware'); // JWT middleware

// Protect both GET and POST
router.get('/', verifyToken, faqController.getAllFaqs);
router.post('/', verifyToken, faqController.createFaq);

module.exports = router;

// All FAQ routes are now protected using JWT tokens.
// Clients must send Authorization: Bearer <token> to access them.
