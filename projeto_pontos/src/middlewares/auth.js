const ErrorResponse = require("../utils/errorResponse")
const { verify } = require('jsonwebtoken')

const auth = async (req,res,next) => {

    let authHeaders = req.headers.authorization
    
    if (!authHeaders) return res.status(401).json({msg: "Token inválido"})
 
    let [, token] = authHeaders.split(' ')

    try{
        let tokenIsvlaid =  verify(token, 'HJGTLSKSHTU5567G8DHGHYS8647HFFH')
        return next()
    }catch(err){
        res.status(401).json({msg: "Token inválido"})
    }
    
}

module.exports = { auth }