const { request } = require('http');
const ContactsService = require('../services/ContactsService');

exports.createContact = (req, res) => {
    try {
        const { contact } = req.body;
        //console.log("Contato request - " + JSON.stringify(req.body))
        // res.send(ACService.CreateAccount(nome, accountUrl));
        ContactsService.CreateContact(contact);

        console.log("Contato retorno - " + res.body)
        return res.status(res.statusCode).json({ message: "Contato Criado - " + JSON.stringify(res.body) });
    }
    catch (error) {
        return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
    }
}