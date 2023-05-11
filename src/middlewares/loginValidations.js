const loginValidation = async (req, res, next) => {
    const { email, password } = req.body;

    if (email === undefined || email.length === 0) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    if (password === undefined || password.length === 0) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    return next();
};

module.exports = loginValidation;