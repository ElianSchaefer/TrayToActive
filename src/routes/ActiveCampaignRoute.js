const express = require('express');
const router = express.Router();
const accountsController = require("../controller/AccountsController");
const contactsController = require("../controller/ContactsController");
const tagController = require("../controller/TagController");
const listController = require("../controller/ListController");

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

//Contas
router.post("/Accounts", accountsController.createAccount);

//Contatos
router.post("/Contacts", contactsController.createContact);
router.get("/GetContacts", contactsController.getContactByEmail);
router.put("/UpdateContacts", contactsController.updateContact);

//Tags
router.get("/GetTags", tagController.GetTag);
router.post("/AddContactsTag", tagController.AddTag);
router.delete("/RemoveContactsTag", tagController.RemoveTag);

//Listas
router.get("/GetLists", listController.getLists);
router.post("/ContactsToList", listController.AddToList);
//router.delete("/RemoveContactsFromList", listController.RemoveFromList);


module.exports = router;