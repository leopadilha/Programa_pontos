const user = require('../models/user')
const { 
    createUserService, 
    getUserByIdService,
    getAllUserService,
    deleteUserByDocumentService,
    updateUserService,
 } = require('../services/userServices')

const getAllController = async (req,res) =>{
    let users = await getAllUserService()
    !users ? res.status(204).json(users) : res.status(200).json(users)
}

const getByIdController = async (req,res,next) => {
    try{
       let userRequest = await getUserByIdService(req.params.id)
       return res.status(200).json(userRequest)
    }catch(err){
        next(err)
    }

}
const createUserController = async (req,res,next) => {
    try{
        let userRequest = await createUserService(req.body)
        return res.status(200).json({
            msg: `Usuário ${userRequest.name} cadastrado com sucesso`
        })
    }catch(err){
        console.log(err)
        next(err)
    }
}

const deleteUserByDocumentController = async (req,res,next) => {
    try{
        await deleteUserByDocumentService(req.params.document)
        return res.status(200).json({
            msg: `Usuário deletado com sucesso`
        })
    }catch(err){
        next(err)
    }
}

const updateUserController = async (req,res,next) => {
    try{
        let userUpdated = await updateUserService(req.params.id, req.body)
        return res.status(200).json({
            msg: `Usuário ${userUpdated.name} alterado com sucesso `
        })
    }catch(err){
        console.log(err)
        next(err)
    }
}

module.exports = { 
    createUserController,
    getAllController,
    getByIdController,
    updateUserController,
    deleteUserByDocumentController,
 }