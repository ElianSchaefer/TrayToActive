const express = require('express');
const router = express.Router();
const activeCampaignController = require("../controller/AvtiveCampaignController");



router.post("/create", activeCampaignController.createAccount)



module.exports = router;