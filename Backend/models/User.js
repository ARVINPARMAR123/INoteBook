const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { // Changed Name to name
        type: String,
        required: true
    },
    email: { // Changed Email to email
        type: String,
        required: true,
        unique: true
    },
    password: { // Changed Password to password
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);