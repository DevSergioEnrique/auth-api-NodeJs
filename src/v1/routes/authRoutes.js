const express = require("express");
const authController = require("../../controllers/authController");
const router = express.Router();

router
    .get("/", authController.methodOne)
    .post("/", authController.methodTwo)
    .patch("/", authController.methodThree)
    .delete("/", authController.methodFour);

module.exports = router;