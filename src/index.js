const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const rotas = require('./routes/ActiveCampaignRoute')


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})



app.use(bodyParser.json());
app.use(express.json());
app.use('/Accounts', rotas );

app.listen(process.env.port || 3000);

console.log('Server Online!')