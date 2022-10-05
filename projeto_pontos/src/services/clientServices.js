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
    try{
        console.log(req.body.name)
    }catch(err){
        return err
    }
   // let clientCreated = await client.create(clientRequest)
    //return clientCreated
}
 module.exports = { getClientById, getAllClients, createClient }