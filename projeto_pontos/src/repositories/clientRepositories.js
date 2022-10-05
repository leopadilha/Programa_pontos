const clientModel = require('../models/client')

class userRepository{

    async findAll(){
        return await clientModel.find()
    }
}
module.exports = {userRepository}