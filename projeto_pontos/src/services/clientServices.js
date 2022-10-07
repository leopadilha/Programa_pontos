const client = require('../models/client')
const ErrorResponse = require('../utils/errorResponse')

const getClientById = async ( id ) => {
    let clientResponse = await client.findById(id)
    if (!clientResponse){
        throw new ErrorResponse("Usuário não existe", 404)
    }
    return clientResponse
}
const getAllClients = async () => {
    return await client.find({})
}

const createClient = async ( request ) => {
  let clientCreated = await client.create(request)
  return clientCreated    
}
 module.exports = { getClientById, getAllClients, createClient }