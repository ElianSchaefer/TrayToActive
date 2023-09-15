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
            } else {
                const response = {
                    statusCode: res.statusCode,
                    statusMessage: res.statusMessage,
                    body: body
                }
                console.log(`Status: ${res.statusCode} - ${res.statusMessage}`);
                resolve(response);
            }
        });
    });
}

async function makeRequestAsyncGet(options, data) {

    return new Promise((resolve, reject) => {
        request.get(options, (err, res, body) => {
            if (err) {
                console.log('erro 01', url)
                return reject(err);
            } else {
                const response = {
                    statusCode: res.statusCode,
                    statusMessage: res.statusMessage,
                    body: body
                }
                console.log(`Status: ${res.statusCode} - ${res.statusMessage}`);
                resolve(response);
            }
        });
    });
}

async function makeRequestAsyncPut(options, data) {

    return new Promise((resolve, reject) => {
        request.put(options, (err, res, body) => {
            if (err) {
                console.log('erro 01', url)
                return reject(err);
            } else {
                const response = {
                    statusCode: res.statusCode,
                    statusMessage: res.statusMessage,
                    body: body
                }
                console.log(`Status: ${res.statusCode} - ${res.statusMessage}`);
                resolve(response);
            }
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
        const response = await makeRequestAsync(options);

        console.log("ret - ", response)
        if (response.statusCode === 422) {
            return response;
        }
        else {
            const { contact } = response.body
            const result = contact;
            return result;
        }
    }
    catch (error) {
        console.error('Erro ao criar contato: ', error);
    }

}

const getContactByEmail = async (emailContact) => {
    console.log('email - ', emailContact)
    const options = {
        url: `${BASE_URL}/contacts?filters[email]=${emailContact}&include=contactTags.tag`,
        json: true,
        headers: COMMON_HEADERS
    };

    console.log(options.url)
    //precisa retornar as informações das tags this.tag = contact.contactTags.tag, this.contactTags = contact.contactTags.id 
    try {
        const response = await makeRequestAsyncGet(options);

        if (response.statusCode === 422) {
            return response;
        }
        else if (response.statusCode === 200) {
            const { contacts } = response.body
            if (contacts.length === 0) {
                return "Contato não encontrado!";
            }
            console.log("Contato: ",contacts[0]);
            const result = contacts[0];


            return result;
        }
        else {
            throw new Error('erro');
        }
    }
    catch (error) {
        console.error('Erro ao encontrar contato: ', error);
    }
}

const updateContact = async (contact) => {

    const id = (await getContactByEmail(contact.email)).id;
    if (id === undefined) {
        return "Conta não encontrada";
    }

    const options = {
        url: `${BASE_URL}/contacts/${id}`,
        json: true,
        body: new Object(contact),
        headers: COMMON_HEADERS
    };

    try {
        // response esta chegando  como undefined
        const response = await makeRequestAsyncPut(options);

        console.log("ret up - ", response)
        if (response.statusCode === 422) {
            return response;
        }
        else {
            const { contact } = response.body
            const result = contact;
            return result;
        }
    }
    catch (error) {
        console.error('Erro ao atualizar contato: ', error);
    }

}
module.exports = { CreateContact, getContactByEmail, updateContact };