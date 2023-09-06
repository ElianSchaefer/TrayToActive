const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const rotas = require('./routes/ActiveCampaignRoute')


app.use(bodyParser.json());
app.use(express.json());
app.use('/', rotas );

app.listen(process.env.port || 3200);

console.log('Server Online!')