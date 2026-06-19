if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const mongoose = require('mongoose');
const Campground = require('../models/campground');
const User = require('../models/user');
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
    const sampleUser = await User.findOne({});
    
    if (!sampleUser) {
        console.log("❌ ERROR: No users found in the database! Go register a user via the UI first before running the seed script.");
        return;
    }

    console.log(`🌱 Seeding campgrounds linked to user: ${sampleUser.username} (${sampleUser._id})`);

    for (let campData of cities) {
        const camp = new Campground({
            author: sampleUser._id, 
            location: `${campData.city}, ${campData.state}`,
            title: campData.title,
            description: campData.description,
            price: campData.price,
            geometry: {
                type: "Point",
                coordinates: [campData.longitude, campData.latitude]
            },
            images: [
                {
                    url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                    filename: 'CampConnect/seed_default_image'
                }
            ]
        });
        await camp.save();
    }
    console.log("✅ Database successfully re-seeded!");
};

seedDB().then(() => {
    mongoose.connection.close();
});