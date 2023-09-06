const { ContactResponse, ContactResponseError } = require('../entities/ContactResponse');
const Contact = require('../entities/Contact');
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
            resolve(JSON.stringify(body));
            console.log(`Status: ${res.statusCode} - ${res.statusMessage}`);
            //console.log('das',JSON.stringify(res.body));
            //até aqui OK!!
        });
    });
}



const CreateContact = async (contact) => {

    const options = {
        url: `${BASE_URL}/contacts`,
        json: true,
        body: new Object(new Contact(contact)),
        headers: COMMON_HEADERS
    };


    try {
        // response esta chegando  como undefined
        //console.log(`Body:$ ${JSON.stringify(contact)}`)
        const response = await makeRequestAsync(options);

        //console.log('response - ',response, '..')
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