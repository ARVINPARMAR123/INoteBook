const express = require('express');
const User = require('../models/User'); // Ensure path is correct
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = "ThisIsASecretKey"; // Ideally, store this in an environment variable

// validation checks can be added here later using express-validator

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => { // Added 'async'
        console.log(req.body);
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
    try {
        // Check if user with this email already exists
            let user = await User.findOne({email: req.body.email});
            
            if(user){
                return res.status(400).json({error: "Sorry a user with this email already exists"})
            }
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            });
            
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, JWT_SECRET, {expiresIn: '1d'});
            //console.log(jwtData);

            res.json({token});
            //res.json(user);
        }

    // others error occured than this msg will be shown    
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;