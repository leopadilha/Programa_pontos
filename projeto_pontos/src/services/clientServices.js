const client = require('../models/client')
const ErrorResponse = require('../utils/errorResponse')

const getClientById = async ( id ) => {
    try{
        return await client.findOne({ _id: id})
    }catch(err){
        new ErrorResponse("Not found", 404)
    } 
}

const getAllClients = async () => {
    try{
        let clients = await client.find({})
        return clients
    }catch(err){
        return err
    }
}

const createClient = async (req,res,next) => {
    let clientRequest = req.body

    if (!clientRequest.document){
        next(new ErrorResponse("Por favor preencher todos os campos"), 400)
    }
    let clientCreated = await client.create(clientRequest)
    return clientCreated
}
 module.exports = { getClientById, getAllClients, createClient }