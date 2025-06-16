const express = require('express');
const { userController } = require('../controllers');
const { verifyToken } = require('../middlewares/auth.middleware');
const router = express.Router();

// Public route: user registration
router.post('/', userController.addUser);

// Protected routes
router.get('/', verifyToken, userController.getAllUsers);
router.get('/:id', verifyToken, userController.getUser);
router.put('/:id', verifyToken, userController.updateUser);
router.delete('/:id', verifyToken, userController.deleteUser);

module.exports = router;

// All user management routes are protected, except registration (POST /).
// Clients must send Authorization: Bearer <token> to access the protected routes.
// This code defines the routes for user management in an Express application.  