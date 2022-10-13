const client = require('../models/client')

const { 
    getClientByIdService,
    getAllClientService,
    createClientService,
    deleteClientByDocumentService,
    updateClientService,
    updateSpotsService,
    deleteClientByIdService
} = require('../services/clientServices')

const getAllClientController = async (req,res) =>{
    let clients = await getAllClientService()
    !clients ? res.status(204).json(clients) : res.status(200).json(clients)
}

const getByIdClientController = async (req,res,next) => {
    try{
       let clientRequest = await getClientByIdService(req.params.id)
       return res.status(200).json(clientRequest)
    }catch(err){
        next(err)
    }

}
const createClientController = async (req,res,next) => {
    try{
        let clientRequest = await createClientService(req.body)
        return res.status(200).json({
            msg: `Cliente ${clientRequest.name} cadastrado com sucesso`
        })
    }catch(err){
        next(err)
    }
}

const deleteClientByDocumentController = async (req,res,next) => {
    try{
        await deleteClientByDocumentService(req.params.document)
        return res.status(200).json({
            msg: `Cliente deletado com sucesso`
        })
    }catch(err){
        next(err)
    }
}

const deleteClientByIdController = async (req,res,next) => {
    try{
        console.log(req.params.id)
        await deleteClientByIdService(req.params.id)
        return res.status(200).json({
            msg: `Cliente deletado com sucesso`
        })
    }catch(err){
        next(err)
    }
}

const updateClientController = async (req,res,next) => {
    try{
        let clientUpdated = await updateClientService(req.params.id, req.body)
        return res.status(200).json({
            msg: `Cliente alterado com sucesso ${clientUpdated.name}`
        })
    }catch(err){
        next(err)
    }
}

const updateSpotsController = async (req,res,next) => {
    try{
        let clientUpdated = await updateSpotsService(req.params.id, req.body.spots)
        return res.status(200).json({
            msg: `Cliente alterado com sucesso ${clientUpdated.name}`
        })
    }catch(err){
        next(err)
    }
}



module.exports = { 
    getAllClientController, 
    getByIdClientController, 
    createClientController, 
    deleteClientByDocumentController, 
    updateClientController,
    updateSpotsController,
    deleteClientByIdController
}