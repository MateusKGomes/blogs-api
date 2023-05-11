const { createToken } = require('../auth/authFunctions');
const userServices = require('../services/user');

const login = async (req, res) => {
    const { email, password } = req.body;

    const userEmail = await userServices.findUser(email, password);

    if (!userEmail) {
        return res
            .status(400)
            .json({ message: 'Invalid fields' });
    }
    const token = createToken(email);
    return res.status(200).json({ token });
};

module.exports = { login };