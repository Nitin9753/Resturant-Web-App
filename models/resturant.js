const mongoose = require('mongoose');

const resturantSchema = new mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    location: {
        longitude: { type: Number, require: true },
        latitude: { type: Number, require: true }
    },
    ratings: [{ type: Number }]
});

resturantSchema.index({ location: '2dsphere' });

const resturant = mongoose.model('resturant', resturantSchema);

module.exports = resturant;