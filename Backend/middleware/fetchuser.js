const jwt = require('jsonwebtoken');

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const JWT_SECRET = "ThisIsASecretKey"; // Ideally, store this in an environment variable

    const token = req.header('auth-token');
    // If no token found, send error
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    // Verify the token
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}

module.exports = fetchuser;