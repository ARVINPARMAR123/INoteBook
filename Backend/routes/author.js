const express = require('express');
const User = require('../models/User'); // Ensure path is correct
const router = express.Router();
const { body, validationResult } = require('express-validator');

// validation checks can be added here later using express-validator

router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => { // Added 'async'
        console.log(req.body);
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

    try {
        // Check if user with this email already exists
            let user = await User.findOne({email: req.body.email});
            if(user){
                return res.status(400).json({error: "Sorry a user with this email already exists"})
            }
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
            res.json(user);
        }

    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;