const { 
    getClientById,
    getAllClients,
    createClient,
    deleteClientByDocument, 
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

module.exports = { getAll, getById, createClientController, deleteClientByDocumentController }