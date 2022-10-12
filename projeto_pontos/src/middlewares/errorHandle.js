const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
         message: err.msg || 'Internal server error'
        })   
}

module.exports = errorHandler;