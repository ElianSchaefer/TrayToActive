const ListsService = require('../services/ListsService');

exports.getLists = async(req, res) => {
    try {
        const ret = await ListsService.GetLists(req);
        return res.status(res.statusCode).json({ message:  ret });
    }
    catch (error) {
        return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
    }
}

exports.AddToList = async(req, res) => {
    try {
        const { contactList } = req.body;

        const ret = await ListsService.AddToList(contactList);
        return res.status(res.statusCode).json({ message:  ret });
    }
    catch (error) {
        return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
    }
}

// exports.RemoveFromList = async (req, res) => {
//     try {
//         const { contactList } = req.body;

//         const ret = await TagsService.RemoveFromList(contactTagId);
//         return res.status(res.statusCode).json({ message:  ret });
//     }
//     catch (error) {
//         return res.status(res.statusCode).send({ message: "Internal Server Error - " + error.message });
//     }
// }