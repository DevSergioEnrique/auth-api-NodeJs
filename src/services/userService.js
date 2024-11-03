const userModel = require("../models/userModel");

const getUserById = async (idUser) => {
    try {
        const user = await userModel.getUserById(idUser);
        return user;

    } catch (error) {
        throw new Error(`Error fetching user with ID ${idUser}: ${error.message}`);
    }
}

const getAllUsers = async () => {
    try {
        const user = await userModel.getAllUsers();
        return user;
    } catch (error) {
        throw new Error(`Error fetching users: ${error.message}`);
    }
}

const createUser = () => {
    return `user created`;
}

const updateUser = (idUser) => {
    return `user ${idUser} updated`;
}

const deleteUser = (idUser) => {
    return `user ${idUser} deleted`;
}

module.exports = {
    getUserById,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}
