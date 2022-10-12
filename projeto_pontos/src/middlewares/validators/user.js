const userValidateNameAndDocument = (req,res,next) => {
    
    let { name, document, password, roles } = req.body

    let nameIsValid = name == '' || name == undefined || name == null
    let documentIsvalid = document == '' || document == undefined || document == null
    let passwordIsvalid = password == '' || password == undefined || password == null 
    
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
        return res.status(400).json({msg: "Por favor informar somente números no campo cpf"})
    }
    if (passwordIsvalid){
        return res.status(400).json({msg: "Por favor verificar o campo senha"})
    }
    if (password.length != 6){
        return res.status(400).json({msg: "Por favor informar 6 digitos no campo senha"})
    }
    if (password.includes('.')){
        return res.status(400).json({msg: "Por favor informar somente números no campo senha"})
    }
    if (roles && roles != 'Admin' && roles != 'Employee'){
        return res.status(400).json({msg: "Por favor informar 'Admin' ou 'Employee' "})
    }
    
    next()
}

module.exports = { userValidateNameAndDocument }