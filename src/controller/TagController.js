const TagsService = require('../services/TagsService');

exports.GetTag = async(req, res) => {
    try {
        const ret = await TagsService.GetTag(req);
        return res.status(res.statusCode).json({ message:  ret });
    }
    catch (error) {
        return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
    }
}


exports.AddTag = async(req, res) => {
    try {
        const { contactTag } = req.body;

        const ret = await TagsService.AddTag(contactTag);
        return res.status(res.statusCode).json({ message:  ret });
    }
    catch (error) {
        return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
    }
}

exports.RemoveTag = async (req, res) => {
    try {
        const { contactTagId } = req.body;

        const ret = await TagsService.RemoveTag(contactTagId);
        return res.status(res.statusCode).json({ message:  ret });
    }
    catch (error) {
        return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
    }
}