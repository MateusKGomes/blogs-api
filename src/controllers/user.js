const userServices = require('../services/user');

const createUser = async (req, res) => {
    const user = req.body;
    const verifyEmail = await userServices.findUser(user.email, user.password);
    if (verifyEmail.dataValues.email === user.email) {
        return res
            .status(409)
            .json({ message: 'User already registered' });
    } 
    const newUser = await userServices.createUser(user);
    console.log('email', user.email);

    return res.status(201).json(newUser);
};

module.exports = {
    createUser,
};
