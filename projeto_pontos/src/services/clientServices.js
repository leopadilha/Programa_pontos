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
  let clientRequest = request
  console.log(clientRequest)
//   if (clientRequest.name == 'leo'){
//     throw new ErrorResponse("Not found", 400)
//   }
  let clientCreated = await client.create(clientRequest)

  return clientCreated    
}
 module.exports = { getClientById, getAllClients, createClient }