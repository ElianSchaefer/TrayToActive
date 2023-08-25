const { request } = require('http');
const ACService = require('../services/ActiveCampaignService');

exports.createAccount = (req, res) => {
    try {
        const { nome, accountUrl } = req.body;

        // res.send(ACService.CreateAccount(nome, accountUrl));
        ACService.CreateAccount(nome, accountUrl);

        console.log("retorno - " + res.body)
        return res.status(res.statusCode).json({ message: "Conta Criada " + res.body });
    }
    catch (error) {
        return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
    }
}

