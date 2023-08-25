const Account= require('../entities/Account');
const Object= require('../entities/Object');
const request = require('request');

const CreateAccount = (name,accountUrl)=>{
const options = {
    url: 'https://elian1692147924.api-us1.com/api/3/accounts',
    json: true,
    body:new Object(new Account(name,accountUrl)),
    headers:{'Api-Token': '05688b886205fe84e315d0bb890e74b849410a7c435ee546145eca151f6e32a127bb3030'}
    
};
//console.log(JSON.stringify(options))
request.post(options, (err, res) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Status: ${res.statusCode}`);
    console.log(res.body);
});
}
module.exports ={CreateAccount}