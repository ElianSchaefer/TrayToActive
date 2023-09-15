const request = require('request');
const ContactList = require('../entities/ContactList');


//colocar nas configs? .env
const BASE_URL = 'https://elian1692147924.api-us1.com/api/3';
const COMMON_HEADERS = { 'Api-Token': '05688b886205fe84e315d0bb890e74b849410a7c435ee546145eca151f6e32a127bb3030' }

async function makeRequestAsyncGet(options) {

    return new Promise((resolve, reject) => {
        request.get(options, (err, res, body) => {
            if (err) {
                console.log('erro 01', url)
                return reject(err);
            }
            resolve(body);

            console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
            
            console.log('Retorno: ', body);
        });
    });
}

async function makeRequestAsyncPost(options) {

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

// async function makeRequestAsyncDelete(options) {

//     return new Promise((resolve, reject) => {
//         request.delete(options, (err, res, body) => {
//             if (err) {
//                 console.log('erro 01', url)
//                 return reject(err);
//             }
//             resolve(body);
//             console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
//         });
//     });
// }

const GetLists = async () => {

    const options = {
        url: `${BASE_URL}/lists`,
        json: true,
        headers: COMMON_HEADERS
    };
    
    try {
        const response = await makeRequestAsyncGet(options);

        //validar statusCode
        if (response.statusCode !== 200) {
            console.log('Não foi possovel obter as listas: ', response);
            return response;
        }
        else {
            console.log('Listas: ', response);
            return response;
        }
    }
    catch (error) {
        console.error('Erro ao obter listas: ', error);
    }
}

const AddToList = async (contactList) => {

    const options = {
        url: `${BASE_URL}/contactLists`,
        json: true,
        body: new ContactList(contactList),
        headers: COMMON_HEADERS
    };

    try {
        const response = await makeRequestAsyncPost(options);

        console.log("StatusCode: ", response.statusCode)
        //validar statusCode
        if (response.statusCode !== 201) {
            console.log('Não foi possovel adicionar um Tag: ', response);
            return response;
        }
        else {
            console.log('Tag adicionada: ', response);
            return response;
        }
    }
    catch (error) {
        console.error('Erro ao criar contato: ', error);
    }
}

// const RemoveTag = async (contactTagId) => {
//        const options = {
//         url: `${BASE_URL}/contactTags/${contactTagId}`,
//         json: true,
//         headers: COMMON_HEADERS
//     };

//     try {
//         // response esta chegando  como undefined
//         const response = await makeRequestAsyncDelete(options);

//         console.log("StatusCode: ", response.statusCode)
//         //validar statusCode
//         if (response.statusCode === 200) {
//             console.log('Tag removida: ', new ContactTagResponse(response));
//             const resp ="Tag Removida!"
//             return resp;
//         }
//         else {
//             console.log('Não foi possovel remover a Tag: ', new RemoveContactTagResponseError(response));
//             return response;
//         }
//     }
//     catch (error) {
//         console.error('Erro ao criar contato: ', error);
//     }
// }

module.exports = { GetLists, AddToList};