const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');

//Add more routes
router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;