const { verifyToken } = require('../auth/authFunctions');

const validateJwt = (req, res, next) => {
    try {
        const { authorization: token } = req.headers;
        if (!token) { return res.status(401).json({ message: 'Token not found' }); }
        const payload = verifyToken(token);
        req.payload = payload;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = validateJwt;
