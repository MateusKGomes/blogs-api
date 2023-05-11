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

const findById = async (req, res) => {
    const { id } = req.params;
    const user = await userServices.findById(id);
    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
};

module.exports = {
    createUser,
    findAll,
    findById,
};
