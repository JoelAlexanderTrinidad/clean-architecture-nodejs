const { Router } = require('express');
const router = Router();
const productsRoutes = require('./products.routes');
const userRoutes = require('./users.routes');

router.use('/api/v1/products', productsRoutes);
router.use('/api/v1/users', userRoutes);

module.exports = router;