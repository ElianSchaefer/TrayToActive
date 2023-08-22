const dotenv = require('dotenv');
const path = require('path');

const envPath = path.resolve(__dirname, '../.env');

dotenv.config({
    path: envPath,
});

module.exports ={
AWS_ACCESS_kEY: process.env.AWS_ACCESS_kEY
};