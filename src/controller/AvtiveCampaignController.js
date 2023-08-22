async function teste(request, reply){
    const{
        email,
        fristName,
        lastName,
    }= request.body

    try{

        return reply.code(200).send();
    }
    catch{
        return reply.code(500).send("Internal Server Error");
    }
}

module.exports = {
    teste,
}