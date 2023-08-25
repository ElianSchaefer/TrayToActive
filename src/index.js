const express = require('express');
const app = express();
const path = require('path');
const { CreateAccount, TesteSistema } = require('./services/ActiveCampaignService');
const router = express.Router();


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})
router.post('/', function (req,res){
    res.send(CreateAccount('Testando pelo sistema', 'https://www.example.com'));
})
app.use('/',router);
app.listen(process.env.port || 3000);

console.log('Server ssssssOnline!')