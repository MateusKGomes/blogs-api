const userServices = require('../services/user');
const { createToken } = require('../auth/authFunctions');

const createUser = async (req, res) => {
    const user = req.body;
    const verifyEmail = await userServices.findUser(user.email, user.password);
    if (!verifyEmail) {
        await userServices.createUser(user);
    const { password: _password, ...userWithoutpassword } = user;
        const token = createToken(userWithoutpassword);
        return res.status(201).json({ token });
    } if (verifyEmail.dataValues.email === user.email) {
        return res
            .status(409)
            .json({ message: 'User already registered' });
    }
};

const findAll = async (req, res) => {
    const users = await userServices.users;
    return res.status(200).json(users);
};

module.exports = {
    createUser,
    findAll,
};
