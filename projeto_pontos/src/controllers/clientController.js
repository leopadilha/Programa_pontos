const { 
    getClientById,
    getAllClients,
    createClient, 
}= require('../services/clientServices')

const getAll = async (req,res) =>{
    let clients = await getAllClients()
    !clients ? res.status(204).send(clients) : res.status(200).json(clients)
}

const getById = async (req,res) => {
    try{
        let client = await getClientById(req.params.id)
        client ? res.status(200).send(client) : res.status(204).send()
    }catch(err){
        console.log(err)
    }

}
const createClientController = (req,res,next) => {
    let client = req.body
    let clientCreated = createClient(client)
    res.status(201).send(clientCreated)
}

module.exports = { getAll, getById, createClientController }