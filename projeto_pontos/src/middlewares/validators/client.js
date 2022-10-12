const validateNameAndDocument = (req,res,next) => {
    
    let { name, document } = req.body

    let nameIsValid = name == '' || name == undefined || name == null
    let documentIsvalid = document == '' || document == undefined || document == null
   
    if (nameIsValid){
        return res.status(400).json({msg: "Por favor verificar o campo nome"})
    }
    if (documentIsvalid){
        return res.status(400).json({msg: "Por favor verificar o campo document"})
    }
    if (document.length != 11){
        return res.status(400).json({msg: "Por favor informar 11 digitos no campo cpf"})
    }
    if (document.includes('.')){
        return res.status(400).json({msg: "Por favor não informar pontos no campo cpf"})
    }

    next()
}

const validateSpots = (req,res, next) => {
    let { spots } = req.body

    let spotsIsvalid = spots == '' || spots == undefined || spots == null
    
    if (spotsIsvalid){
        return res.status(400).json({msg: "Por favor verifique os campos informados"})
    }
    if (isNaN(spots)){
        return res.status(400).json({msg: "Por favor informar somente caracteres númericos"})
    }
    next()
}

module.exports = { validateNameAndDocument, validateSpots }