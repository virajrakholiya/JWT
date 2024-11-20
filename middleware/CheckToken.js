const jwt = require("jsonwebtoken");

// Middleware to check for a valid JWT
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.sendStatus(401); // Unauthorized
    }
    
    jwt.verify(token, 'Demo@123', (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user; // Attach user info to request object
        next(); // Proceed to the next middleware or route handler
    });
};

// Export the middleware
module.exports = { verifyToken };