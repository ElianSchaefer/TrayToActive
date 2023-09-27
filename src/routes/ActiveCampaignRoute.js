const express = require('express');
const app = express();
const router = express.Router();
const accountsController = require("../controller/AccountsController");
const contactsController = require("../controller/ContactsController");
const tagController = require("../controller/TagController");
const listController = require("../controller/ListController");
const authController = require("../controller/TrayAuthController");

const path = require("path");


router.get('/', function (req, res) {
    res.sendFile(path.normalize(__dirname+'/../views/index.html'));
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


//Tela de Autorização Tray

router.get("/Auth", authController.getAuth);

router.get('/Autorization', function (req, res) {
    res.sendFile(path.normalize(__dirname+'/../views/aceite.html'));
});


module.exports = router;