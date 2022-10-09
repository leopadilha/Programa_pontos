const ErrorResponse = require("../utils/errorResponse")
const { verify } = require('jsonwebtoken')

exports.auth = async (req,res,next) => {

    let authHeaders = req.headers.authorization

    if (!authHeaders) throw ErrorResponse('JWT inválido', 401)

    let [, token] = authHeaders.split(' ')
    console.log(token)
    
    try{
        let tokenIsvlaid =  verify(token, 'HJGTLSKSHTU5567G8DHGHYS8647HFFH')
        return next()
    }catch(err){
        console.log(err)
        throw new ErrorResponse('Token inválido', 401)
    }
    
}