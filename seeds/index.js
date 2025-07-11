if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("✅ Seed DB connected");
    })
    .catch(err => {
        console.error("❌ Connection error in seed file:", err);
    });

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let campData of cities) {
        const camp = new Campground({
            author: '686d0d7b10c386153ca2aa43', // replace with your actual user ID
            location: `${campData.city}, ${campData.state}`,
            title: campData.title,
            description: campData.description,
            price: campData.price,
            geometry: {
                type: "Point",
                coordinates: [campData.longitude, campData.latitude]
            },
            images: []

        });
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});
