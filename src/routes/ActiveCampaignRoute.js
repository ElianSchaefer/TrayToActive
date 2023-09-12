const express = require('express');
const router = express.Router();
const accountsController = require("../controller/AccountsController");
const contactsController = require("../controller/ContactsController");
const tagController = require("../controller/TagController");

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

router.post("/Accounts", accountsController.createAccount);
router.post("/Contacts", contactsController.createContact);
router.get("/GetContacts", contactsController.getContactByEmail);
router.put("/UpdateContacts", contactsController.updateContact);
router.post("/ContactsTag", tagController.AddTag);
router.delete("/RemoveContactsTag", tagController.RemoveTag);


module.exports = router;