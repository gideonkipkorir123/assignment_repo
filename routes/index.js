const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');
const outletRoutes = require('./outlet.routes');
const faqRoutes = require('./faq.routes');
const blogRoutes = require('./blog.routes');
const authRoutes = require('./auth.routes');
const dashboardRoutes = require('./dashboard.routes'); // ✅ Add this line

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/outlets', outletRoutes);
router.use('/faqs', faqRoutes);
router.use('/blogs', blogRoutes);
router.use('/auth', authRoutes);
router.use('/dashboard', dashboardRoutes); // ✅ Add this line

module.exports = router;
