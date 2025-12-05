const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://arvinp498:Arvin304@arvin.wtvusze.mongodb.net/inotebook?retryWrites=true&w=majority';

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongo;
