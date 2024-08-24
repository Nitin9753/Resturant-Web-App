const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createresturant, getresturantsByRadius, getresturantsByRadiusRange } = require('../controllers/resturantController');
const resturantsList = require('./resturant');
const Resturant = require('../models/resturant');
router.post('/create', authMiddleware, createresturant);
router.post('/search-radius', authMiddleware, getresturantsByRadius);
router.post('/search-radius-range', authMiddleware, getresturantsByRadiusRange);
router.post('/default-data', async(req, res) => {
    try {
        // for (const resturant of resturantsList) {
        //     const newResturant = new Resturant({ resturant });
        //     await newResturant.save();
        // }
        await Resturant.insertMany(resturantsList);
        res.status(200).send("Defautl data has been added to resturants collection in mongoDB");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error encoutered at making default data of resturant collections");
    }
})
module.exports = router;