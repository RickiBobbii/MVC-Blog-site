const router = require('express').Router();
const userRoutes = require('./userRoutes');

//Add more routes
router.use('/users', userRoutes);

module.exports = router;