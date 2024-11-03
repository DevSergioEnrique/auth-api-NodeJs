const express = require("express");
const userController = require("../../controllers/userController");
const router = express.Router();

router
    .get("/:id_user", userController.getUserById)
    .get("/", userController.getAllUsers)
    .post("/", userController.createUser)
    .patch("/:id_user", userController.updateUser)
    .delete("/:id_user", userController.deleteUser);

module.exports = router;