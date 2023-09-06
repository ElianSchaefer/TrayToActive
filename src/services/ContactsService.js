const { ContactResponse, ContactResponseError } = require('../entities/ContactResponse');
const Contact = require('../entities/Contact');
const Object = require('../entities/Object');
const request = require('request');
const { response } = require('express');


//colocar nas configs? .env
const BASE_URL = 'https://elian1692147924.api-us1.com/api/3';
const COMMON_HEADERS = { 'Api-Token': '05688b886205fe84e315d0bb890e74b849410a7c435ee546145eca151f6e32a127bb3030' }

async function makeRequestAsync(options, data) {

    return new Promise((resolve, reject) => {
        request.post(options, (err, res, body) => {
            if (err) {
                console.log('erro 01', url)
                return reject(err);
            } else{
                const response = {
                    statusCode : res.statusCode,
                    statusMessage : res.statusMessage,
                    body : body
                }
            }
            console.log(`Status: ${res.statusCode} - ${res.statusMessage}`);
            resolve(response);
        });
    });
}



const CreateContact = async (contact) => {

    const options = {
        url: `${BASE_URL}/contacts`,
        json: true,
        body: new Object(contact),
        headers: COMMON_HEADERS
    };


    try {
        // response esta chegando  como undefined
        const response = await makeRequestAsync(options);


        console.log("ret", response)
        if (response.statusCode === 422) {
            const result = new ContactResponseError(response);
            console.log('Contato já existe: ', result);
            return result;
        }
        else {
            const result = new ContactResponse(response);
            console.log('Contato Criado: ', result);
            return result;
        }
    }
    catch (error) {
        console.error('Erro ao criar contato: ', error);
    }

}
module.exports = { CreateContact };