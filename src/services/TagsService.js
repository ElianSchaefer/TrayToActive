const ContactTagResponseError = require('../entities/ContactResponseError');
const RemoveContactTagResponseError = require('../entities/RemoveContactTagResponseError');
const ContactTagResponse = require('../entities/ContactResponse');
const ContactTag = require('../entities/ContactTag');
const request = require('request');


//colocar nas configs? .env
const BASE_URL = 'https://elian1692147924.api-us1.com/api/3';
const COMMON_HEADERS = { 'Api-Token': '05688b886205fe84e315d0bb890e74b849410a7c435ee546145eca151f6e32a127bb3030' }

async function makeRequestAsyncPost(options, data) {

    return new Promise((resolve, reject) => {
        request.post(options, (err, res, body) => {
            if (err) {
                console.log('erro 01', url)
                return reject(err);
            }
            resolve(body);
            console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
        });
    });
}

async function makeRequestAsyncDelete(options, data) {

    return new Promise((resolve, reject) => {
        request.delete(options, (err, res, body) => {
            if (err) {
                console.log('erro 01', url)
                return reject(err);
            }
            resolve(body);
            console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
        });
    });
}

const AddTag = async (contactTag) => {

    const options = {
        url: `${BASE_URL}/contactTags`,
        json: true,
        body: new ContactTag(contactTag),
        headers: COMMON_HEADERS
    };

    try {
        const response = await makeRequestAsyncPost(options);

        console.log("StatusCode: ", response.statusCode)
        //validar statusCode
        if (response.statusCode !== 201) {
            console.log('Não foi possovel adicionar um Tag: ', new ContactTagResponseError(response));
            return response;
        }
        else {
            console.log('Tag adicionada: ', new ContactTagResponse(response));
            return response;
        }
    }
    catch (error) {
        console.error('Erro ao criar contato: ', error);
    }

}

const RemoveTag = async (contactTagId) => {
       const options = {
        url: `${BASE_URL}/contactTags/${contactTagId}`,
        json: true,
        headers: COMMON_HEADERS
    };

    try {
        // response esta chegando  como undefined
        const response = await makeRequestAsyncDelete(options);

        console.log("StatusCode: ", response.statusCode)
        //validar statusCode
        if (response.statusCode === 200) {
            console.log('Tag removida: ', new ContactTagResponse(response));
            const resp ="Tag Removida!"
            return resp;
        }
        else {
            console.log('Não foi possovel remover a Tag: ', new RemoveContactTagResponseError(response));
            return response;
        }
    }
    catch (error) {
        console.error('Erro ao criar contato: ', error);
    }

}
module.exports = { AddTag, RemoveTag };