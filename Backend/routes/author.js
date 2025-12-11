const express = require('express');
const User = require('../models/User'); // Ensure path is correct
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "ThisIsASecretKey"; // Ideally, store this in an environment variable

// validation checks can be added here later using express-validator
// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
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
            const authtoken = jwt.sign(data, JWT_SECRET, {expiresIn: '1d'});
            //console.log(jwtData);

            res.json({authtoken});
            //res.json(user);
        }

    // others error occured than this msg will be shown    
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});
 
// Route 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    
    // If there are validation errors, return Bad request and the errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Destructure email and password from request body
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Please try to login with correct credentials"});
        } 

        // Compare the provided password with the hashed password in the database
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }
        const data = {
            user: {
                id: user.id
            }
        }
        // Generate JWT token
        const authtoken = jwt.sign(data, JWT_SECRET, {expiresIn: '1d'});
        res.json({authtoken});
    // Catch any other errors
    }catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }  
});

// Route 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;