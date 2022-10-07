const validate = (req,res,next) => {
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

module.exports = { validate }