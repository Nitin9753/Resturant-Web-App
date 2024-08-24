const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createresturant, getresturantsByRadius, getresturantsByRadiusRange } = require('../controllers/resturantController');

router.post('/create', authMiddleware, createresturant);
router.post('/search-radius', authMiddleware, getresturantsByRadius);
router.post('/search-radius-range', authMiddleware, getresturantsByRadiusRange);

module.exports = router;