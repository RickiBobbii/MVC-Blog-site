const router = require('express').Router();
// Import User model and withAuth 
const { User, Blog } = require('../models');
const withAuth = require('../utils/auth');

//Add routes for User and Blog to connect to Handlebars


module.exports = router;