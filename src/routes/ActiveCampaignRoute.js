const express = require('express');
const router = express.Router();
const accountsController = require("../controller/AccountsController");
const contactsController = require("../controller/ContactsController");
const tagController = require("../controller/ContactsController");

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

router.post("/Accounts", accountsController.createAccount);
router.post("/Contacts", contactsController.createContact);
router.post("/ContactsTag", tagController.createContact);



module.exports = router;