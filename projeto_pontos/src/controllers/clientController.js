const client = require('../models/client')
const { 
    getClientById,
    getAllClients,
    createClient,
    deleteClientByDocument,
    updateClient,
    updateSpots
} = require('../services/clientServices')

const getAll = async (req,res) =>{
    let clients = await getAllClients()
    !clients ? res.status(204).json(clients) : res.status(200).json(clients)
}

const getById = async (req,res,next) => {
    try{
       let clientRequest = await getClientById(req.params.id)
       return res.status(200).json(clientRequest)
    }catch(err){
        next(err)
    }

}
const createClientController = async (req,res,next) => {
    try{
        let clientRequest = await createClient(req.body)
        return res.status(200).json({
            msg: `Cliente ${clientRequest.name} cadastrado com sucesso`
        })
    }catch(err){
        next(err)
    }
}

const deleteClientByDocumentController = async (req,res,next) => {
    try{
        await deleteClientByDocument(req.params.document)
        return res.status(200).json({
            msg: `Cliente deletado com sucesso`
        })
    }catch(err){
        next(err)
    }
}

const updateClientController = async (req,res,next) => {
    try{
        let clientUpdated = await updateClient(req.params.id, req.body)
        return res.status(200).json({
            msg: `Cliente alterado com sucesso ${clientUpdated.name}`
        })
    }catch(err){
        console.log(err)
        next(err)
    }
}

const updateSpotsController = async (req,res,next) => {
    try{
        let clientUpdated = await updateSpots(req.params.id, req.body.spots)
        return res.status(200).json({
            msg: `Cliente alterado com sucesso ${clientUpdated.name}`
        })
    }catch(err){
        console.log(err)
        next(err)
    }
}

module.exports = { 
    getAll, 
    getById, 
    createClientController, 
    deleteClientByDocumentController, 
    updateClientController,
    updateSpotsController
}