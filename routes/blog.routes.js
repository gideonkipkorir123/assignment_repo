const express = require('express');
const router = express.Router();
const { blogController } = require('../controllers');
const { verifyToken } = require('../middlewares/auth.middleware');

// Protect both GET and POST with token
router.get('/', verifyToken, blogController.getAllBlogs);
router.post('/', verifyToken, blogController.createBlog);

module.exports = router;

// Clients must send Authorization: Bearer <token> to access them.
// This code defines the routes for the blog resource in an Express application.    
// It imports the necessary modules, sets up a router, and defines two routes:
// one for getting all blogs and another for creating a new blog.
// Finally, it exports the router so that it can be used in other parts of the application.
// This allows the application to handle requests to the `/blogs` endpoint.