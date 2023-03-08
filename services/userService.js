const User = require('../models/user')

const createUser = async (user) => {
    return await User.create(user)
}

const getAllUser = async () => {
    return await User.find();
}

const getUserById = async (id) => {
    return await User.findById(id);
};

const updateUser = async (id, user) => {
    return await User.findByIdAndUpdate(id, user);
};

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

module.exports = {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
}