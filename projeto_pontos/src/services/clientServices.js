const client = require('../models/client')
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

    return await client.deleteOne({id: existClient.id})
}
 module.exports = { getClientById, getAllClients, createClient, deleteClientByDocument }