// const express = require('express');
// const app = express();
// const path = require('path');
// const router = express.Router();


// router.get('/',function(req,res){
//     res.sendFile(path.join(__dirname+'/index.html'));
// })

// app.use('/',router);
// app.listen(process.env.port || 3000);

// console.log('Server Online!')


const fastify = require("fastify");
const server = fastify();
const ActiveCampaignRoutes = require("./routes/ActiveCampaignRoute");

server.register(ActiveCampaignRoutes);

server.listen({
    port: process.env.PORT || 3200
})
