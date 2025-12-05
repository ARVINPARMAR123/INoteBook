const express = require('express');
const User = require('../models/User'); // Ensure path is correct
const router = express.Router();

// validation checks can be added here later using express-validator

router.post('/', async (req, res) => { // Added 'async'
    try {
        console.log(req.body);
        
        // Check if user with this email already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry, a user with this email already exists" });
        }

        // Create new user
        user = new User(req.body);
        await user.save(); // Added 'await' to ensure it saves before responding
        
        res.json(user); // Send back the saved user
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;