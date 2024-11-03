const authService = require("../services/authService");

const methodOne = (req, res) => {
    const output = authService.methodOne();
    res.send({status: "OK", data: output});
}

const methodTwo = (req, res) => {
    const output = authService.methodTwo();
    res.send({status: "OK", data: output});
}

const methodThree = (req, res) => {
    const output = authService.methodThree();
    res.send({status: "OK", data: output});
}

const methodFour = (req, res) => {
    const output = authService.methodFour();
    res.send({status: "OK", data: output});
}

module.exports = {
    methodOne,
    methodTwo,
    methodThree,
    methodFour
}