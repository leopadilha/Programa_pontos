class ErrorResponse{
    constructor(msg, statusCode){
        this.msg = msg
        this.statusCode = statusCode
    }
}

module.exports = ErrorResponse