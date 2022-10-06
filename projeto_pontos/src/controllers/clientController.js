const { 
    getClientById,
    getAllClients,
    createClient, 
} = require('../services/clientServices')

const getAll = async (req,res) =>{
    let clients = await getAllClients()
    !clients ? res.status(204).send(clients) : res.status(200).json(clients)
}

const getById = async (req,res,next) => {
    try{
       let clientRequest = await getClientById(req.params.id)
       return res.status(200).json(clientRequest)
    }catch(err){
        next(err)
    }

}
const createClientController = (req,res,next) => {
    try{
        let clientCreated = createClient(req.body)
        return res.status(200).json(clientCreated)
    }catch(err){
        next(err)
    }
}

module.exports = { getAll, getById, createClientController }