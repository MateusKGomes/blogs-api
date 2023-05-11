const displayNameValidation = (req, res, next) => {
    const { displayName, password } = req.body;
    if (displayName.length < 8) {
        return res
            .status(400)
            .json({ message: '"displayName" length must be at least 8 characters long' });
    }

    if (password.length < 6) {
        return res
            .status(400)
            .json({ message: '"password" length must be at least 6 characters long' });
    }

    return next();
};

const emailValidation = (req, res, next) => {
    const { email } = req.body;
    const regexEmail = /\S+@\S+\.\S+/i;
    if (!regexEmail.test(email)) {
        return res.status(400).json({
            message: '"email" must be a valid email',
        });
    }
    return next();
};

module.exports = {
    displayNameValidation,
    emailValidation,
};