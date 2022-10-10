const { decode } = require('jsonwebtoken')

const role = (req,res,next) => {
    let tokenHeader = req.headers.authorization
    let [, token] = tokenHeader.split(' ')

    let decoded = decode(token)
    if (decoded.role !== 'Admin'){
        return res.status(403).json({msg:"Você não possui autorização para esta ação"})
    }

    next()
}

module.exports = { role }
