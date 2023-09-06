const { request } = require('http');
const AccountsService = require('../services/AccountsService');

exports.createAccount = (req, res) => {
    try {
        const { nome, accountUrl } = req.body;

        // res.send(ACService.CreateAccount(nome, accountUrl));
        AccountsService.CreateAccount(nome, accountUrl);

        console.log("retorno - " + res.body)
        return res.status(res.statusCode).json({ message: "Conta Criada " + res.body });
    }
    catch (error) {
        return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
    }
}

