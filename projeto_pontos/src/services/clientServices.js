const client = require('../models/client')
const trim = require('../utils/trim')
const ErrorResponse = require('../utils/errorResponse')

const getClientById = async ( clientId ) => {
    let clientResponse = await client.findById(clientId)
    if (!clientResponse){
        throw new ErrorResponse("Esse usuário não consta no nosso sistema", 404)
    }
    return clientResponse
}

const getAllClients = async () => {
    return await client.find({})
}

const createClient = async ( data ) => {

    let existClient = await client.findOne({document : data.document})

    let getClients = await client.find()

    let lastSpotsCreated = [...getClients].pop()

    if (existClient){
        throw new ErrorResponse("Cliente já cadastrado no sistema", 409)
    }
    
    data.identifierSpots = lastSpotsCreated.identifierSpots + 1

    let clientCreated = await client.create(data)
    return clientCreated    
}

const deleteClientByDocument = async ( clientDocument ) => {

    let existClient = await client.findOne({document : clientDocument})
    if (!existClient){
        throw new ErrorResponse("Esse usuário não consta no nosso sistema", 404)
    }

    return await client.findByIdAndDelete(existClient.id)
}

const updateClient = async (clientId, data) => {

    let existClient = await client.findById(clientId)

    if (!existClient){
        throw new ErrorResponse("Esse usuário não consta no nosso sistema", 404)
    }

    let existDocument = await client.findOne({document : data.document})

    if(existDocument){
        throw new ErrorResponse("Não foi possível alterar o usuário, pois esse cpf já está cadastrado no sistema", 400)
    }

    await client.updateOne({_id: clientId}, data)
    return data
}

const updateSpots = async (clientId, spots) => {

    let existClient = await client.findById(clientId)

    if (!existClient) throw new ErrorResponse("Esse usuário não consta no nosso sistema", 404)
    
    spots < 0 ? existClient.spots -= -spots : existClient.spots += spots

    if (existClient.spots < 0) throw new ErrorResponse("O saldo de pontos do cliente não pode ser menor que 0",400)

    await client.updateOne({_id: clientId}, existClient)
    return existClient
}
 module.exports = { 
    getClientById, 
    getAllClients, 
    createClient, 
    deleteClientByDocument,
    updateClient,
    updateSpots,
 }