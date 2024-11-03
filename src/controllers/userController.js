const userService = require("../services/userService");

const getUserById = async (req, res) => {
    try {
        const output = await userService.getUserById(req.params.id_user);
        res.send({status: "OK", data: output}); // Express convierte `output` a JSON automáticamente :D

    } catch (error) {
        res.status(500).send({status: "ERROR", message: "Error finding user", error});
    }
}

const getAllUsers = (req, res) => {
    const output = userService.getAllUsers();
    res.send({status: "OK", data: output});
}

const createUser = (req, res) => {
    const output = userService.createUser();
    res.send({status: "OK", data: output});
}

const updateUser = (req, res) => {
    const output = userService.updateUser(req.params.id_user);
    res.send({status: "OK", data: output});
}

const deleteUser = (req, res) => {
    const output = userService.deleteUser(req.params.id_user);
    res.send({status: "OK", data: output});
}

module.exports = {
    getUserById,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}