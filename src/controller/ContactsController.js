const { request } = require('http');
const ContactsService = require('../services/ContactsService');

exports.createContact = async (req, res) => {
    try {
        const { contact } = req.body;
        const ret = await ContactsService.CreateContact(contact);
        return res.status(res.statusCode).json({ message:  ret });
    }
    catch (error) {
        return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
    }
}

exports.getContactByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        const ret = await ContactsService.getContactByEmail(email);
        return res.status(res.statusCode).json({ message:  ret });
    }
    catch (error) {
        return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
    }
}

exports.updateContact = async (req, res) => {
    try {
        const { contact } = req.body;
        const ret = await ContactsService.updateContact(contact);
        return res.status(res.statusCode).json({ message:  ret });
    }
    catch (error) {
        return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
    }
}