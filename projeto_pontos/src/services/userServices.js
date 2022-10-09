const user = require('../models/user')
//const trim = require('../utils/trim')
const ErrorResponse = require('../utils/errorResponse')
const bcrypt = require('bcrypt')

const getUserByIdService = async ( userId ) => {
    let userResponse = await user.findById(userId)
    if (!userResponse){
        throw new ErrorResponse("Esse usuário não consta no nosso sistema", 404)
    }
    return userResponse
}

const getAllUserService = async () => {
    return await user.find({})
}

const createUserService = async ( data ) => {
    let existUser = await user.findOne({document : data.document})

    if (existUser) throw new ErrorResponse("Usuário já cadastrado no sistema", 409) 

    let userCreated = await user.create(data)
    return userCreated    
}

const deleteUserByDocumentService = async ( userDocument ) => {

    let existUser = await user.findOne({document : userDocument})

    if (!existUser) throw new ErrorResponse("Esse usuário não consta no nosso sistema", 404)

    return await user.findByIdAndDelete(existUser.id)
}

const updateUserService = async (userId, data) => {

    let existUser= await user.findById(userId)

    if (!existUser) throw new ErrorResponse("Esse usuário não consta no nosso sistema", 404)

    let existDocument = await user.findOne({document : data.document})

    if(existDocument && existDocument.id != userId){
        throw new ErrorResponse("Não foi possível alterar o usuário, pois esse cpf já está cadastrado no sistema", 400)
    }

    await user.updateOne({_id: userId}, data)
    return data
}

const loginService = async ( document, password ) => {

    let existsUser = await user.findOne({ document: document  })

    if(!existsUser) throw new ErrorResponse("Usuário ou senha inválidos", 400)

    let passwordInformed = await bcrypt.compare(password, existsUser.password)

    if (!passwordInformed) throw new ErrorResponse("Usuário ou senha inválidos", 400)

    return existsUser
}

module.exports = { 
    createUserService,
    getUserByIdService,
    getAllUserService,
    updateUserService,
    deleteUserByDocumentService,
    loginService
 }