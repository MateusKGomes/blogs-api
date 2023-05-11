const { User } = require('../models');

const createUser = async (body) => {
    const newUser = await User.create(body);
    return newUser;
};

const findUser = (email, password) => User.findOne({ where: { email, password } });

module.exports = {
    createUser,
    findUser,
};