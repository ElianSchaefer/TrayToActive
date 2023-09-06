const { request } = require('http');
const TagsService = require('../services/TagsService');

exports.AddTag = (req, res) => {
    try {
        const { Tag } = req.body;

        // res.send(ACService.CreateAccount(nome, accountUrl));
        TagsService.AddTag(Tag);

        console.log("retorno - " + res.body)
        return res.status(res.statusCode).json({ message: "Tag Adicionada" + res.body });
    }
    catch (error) {
        return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
    }
}