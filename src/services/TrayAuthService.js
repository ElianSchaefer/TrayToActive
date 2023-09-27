const url = require('url');

const getAuth = async (trayAuth) => {
   
   

    const query = url.parse(trayAuth.url, true).query;
    console.log('Trays url',query);

    const keys = ['adm_user','code','api_address','store','store_host']

    for (const key of keys) {

        //if (!query[key]) throw new Error(`Missing ${key} in tray auth`);
      
        console.log(key, ':',  query.key);
      }
      
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


module.exports = { getAuth};