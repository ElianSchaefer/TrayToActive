const Account = require('../entities/Account');
const { AccountResponse, AccountResponseError } = require('../entities/AccountResponse');
const Object = require('../entities/Object');
const request = require('request');


//colocar nas configs? .env
const BASE_URL = 'https://elian1692147924.api-us1.com/api/3';
const COMMON_HEADERS = { 'Api-Token': '05688b886205fe84e315d0bb890e74b849410a7c435ee546145eca151f6e32a127bb3030' }

async function makeRequestAsync(options, data) {

    return new Promise((resolve, reject) => {
        request.post(options, (err, res, body) => {
            if (err) {
                console.log('erro 01', url)
                return reject(err);
            }
            resolve(body);
            console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
            console.log(res.body);
            //até aqui OK!!
        });
    });
}



const CreateAccount = async (name, accountUrl) => {

    const options = {
        url: `${BASE_URL}/accounts`,
        json: true,
        body: new Object(new Account(name, accountUrl)),
        headers: COMMON_HEADERS
    };


    try {
        // response esta chegando  como undefined
        const response = await makeRequestAsync(options);
        if (response.statusCode === 422) {
            console.log('Conta já existe: ', new AccountResponseError(response));
        }
        else {
            console.log('Conta Criada: ', new AccountResponse(response));
        }
    }
    catch (error) {
        console.error('Erro ao criar conta: ', error);
    }

}
module.exports = { CreateAccount };