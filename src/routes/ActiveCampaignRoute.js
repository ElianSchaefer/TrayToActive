const activeCampaignController = require("../controller/AvtiveCampaignController");

async function ActiveCampaignRoutes(server){
    server.post("/teste", activeCampaignController.teste)
}

module.exports = ActiveCampaignRoutes;