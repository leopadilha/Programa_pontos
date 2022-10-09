const jwt = require('jsonwebtoken')

module.exports = generateToken = (id,name) => {
    return jwt.sign({
        id,
        name
    }, 
    'HJGTLSKSHTU5567G8DHGHYS8647HFFH',
    {
        expiresIn: 60
    })

}