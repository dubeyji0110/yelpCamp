const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Database Connected!');
});

const sample = array => array[Math.floor(Math.random() * array.length)]; 

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const rand = Math.floor(Math.random() * 200);
        const price = Math.floor(Math.random() * 20 + 10); 
        const camp = new Campground({
            author: '5fe752b80ef0ec1964549f0a',
            location: `${cities[rand].name}, ${cities[rand].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dolor aperiam ipsa officiis sequi est cum recusandae ex nobis explicabo? Magni quisquam recusandae deserunt quas eveniet hic nisi corrupti error!',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/dyekojods/image/upload/v1609162088/YelpCamp/ahfnenvca4tha00h2ubt_wwobds.png',
                    filename: 'YelpCamp/ahfnenvca4tha00h2ubt_wwobds'
                },
                {
                    url: 'https://res.cloudinary.com/dyekojods/image/upload/v1609162092/YelpCamp/ruyoaxgf72nzpi4y6cdi_trycfn.png',
                    filename: 'YelpCamp/ruyoaxgf72nzpi4y6cdi_trycfn'
                },
                {
                    url: 'https://res.cloudinary.com/dyekojods/image/upload/v1609162691/YelpCamp/8_dhhrl0.jpg',
                    filename: 'YelpCamp/8_dhhrl0'
                },
                {
                    url: 'https://res.cloudinary.com/dyekojods/image/upload/v1609162691/YelpCamp/5_bq7icw.jpg',
                    filename: 'YelpCamp/5_bq7icw'
                },
                {
                    url: 'https://res.cloudinary.com/dyekojods/image/upload/v1609162691/YelpCamp/6_sjiqgp.jpg',
                    filename: 'YelpCamp/6_sjiqgp'
                },
                {
                    url: 'https://res.cloudinary.com/dyekojods/image/upload/v1609162691/YelpCamp/4_bpkbsw.jpg',
                    filename: 'YelpCamp/4_bpkbsw'
                },
                {
                    url: 'https://res.cloudinary.com/dyekojods/image/upload/v1609162690/YelpCamp/1_aojdp0.jpg',
                    filename: 'YelpCamp/1_aojdp0'
                },
                {
                    url: 'https://res.cloudinary.com/dyekojods/image/upload/v1609162687/YelpCamp/7_w5qoas.jpg',
                    filename: 'YelpCamp/7_w5qoas'
                },
                {
                    url: 'https://res.cloudinary.com/dyekojods/image/upload/v1609162687/YelpCamp/3_gbkvop.jpg',
                    filename: 'YelpCamp/3_gbkvop'
                },
                {
                    url: 'https://res.cloudinary.com/dyekojods/image/upload/v1609162686/YelpCamp/2_tyme0x.jpg',
                    filename: 'YelpCamp/2_tyme0x'
                }
            ]
        });
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})