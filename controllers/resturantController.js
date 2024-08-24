const Resturant = require('../models/resturant');
const { calculateDistance } = require('../utils/helper');

exports.createresturant = async(req, res) => {
    try {
        const { name, description, latitude, longitude, ratings } = req.body;
        console.log(name, description, latitude, longitude, ratings);
        const resturant = new Resturant({
            name,
            description,
            location: {
                latitude,
                longitude
            },
            ratings: ratings || []
        });
        await resturant.save();
        res.status(201).send(resturant);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
};

exports.getresturantsByRadius = async(req, res) => {
    try {
        const { latitude, longitude, radius } = req.body;
        const resturants = await Resturant.find({
            $and: [
                { "location.longitude": { $gt: -180, $lt: 180 } },
                { "location.latitude": { $gt: -90, $lt: 90 } },
            ]
        });
        console.log(resturants);
        const allResturants = [];
        for (const resturant of resturants) {
            // console.log(latitude, longitude, resturant.location.latitude, resturant.location.longitude);
            const distance = calculateDistance(latitude, longitude, resturant.location.latitude, resturant.location.longitude);
            // console.log('the value of the distance', parseInt(distance));
            if (parseInt(distance) <= radius) {
                allResturants.push(resturant);
            }
        }
        // console.log(allResturants.length);

        const response = allResturants.map(r => ({
            name: r.name,
            description: r.description,
            location: r.location.coordinates,
            averageRating: r.ratings.reduce((a, b) => a + b, 0) / r.ratings.length,
            numberOfRatings: r.ratings.length
        }));

        res.send(response);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.getresturantsByRadiusRange = async(req, res) => {
    try {
        const { latitude, longitude, minimumDistance, maximumDistance } = req.body;
        const resturants = await Resturant.find({
            $and: [
                { "location.longitude": { $gt: -180, $lt: 180 } },
                { "location.latitude": { $gt: -90, $lt: 90 } },
            ]
        });
        const allResturants = [];
        for (const resturant of resturants) {
            // console.log(latitude, longitude, resturant.location.latitude, resturant.location.longitude);
            const distance = calculateDistance(latitude, longitude, resturant.location.latitude, resturant.location.longitude);
            // console.log('the value of th distance', parseInt(distance));
            if (distance >= minimumDistance && distance <= maximumDistance) {
                allResturants.push(resturant);
            }
        }
        const response = allResturants.map(r => ({
            name: r.name,
            description: r.description,
            location: r.location.coordinates,
            averageRating: r.ratings.reduce((a, b) => a + b, 0) / r.ratings.length,
            numberOfRatings: r.ratings.length
        }));

        res.send(response);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};