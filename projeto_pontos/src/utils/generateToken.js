const jwt = require('jsonwebtoken')

module.exports = generateToken = (id,name,role) => {
    return jwt.sign({
        id,
        name,
        role
    }, 
    'HJGTLSKSHTU5567G8DHGHYS8647HFFH',
    {
        expiresIn: 1000
    })

}