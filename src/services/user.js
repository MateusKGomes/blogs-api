const { User } = require('../models');

const createUser = async (body) => {
    const newUser = await User.create(body);
    return newUser;
};

const findUser = (email, password) => User.findOne({ where: { email, password },
attributes: {
    exclude: ['password'],
} });

const users = User.findAll({
    attributes: {
        exclude: ['password'],
    },
});

const findById = (id) => User.findByPk(id, { attributes: { exclude: ['password'] },
});

module.exports = {
    createUser,
    findUser,
    users,
    findById,
};