const express = require('express')
const router = require('./src/routes/clientRoutes')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('express-async-errors')
const errorHandler = require('./src/middlewares/errorHandle')

class App{ 
    constructor(){
        this.server = express()
        this.morgan()
        this.routes()
        this.errorHandler()
        this.middlewares()
    }

    middlewares(){
        this.server.use(express.json())
        this.server.use(bodyParser.urlencoded({ extended: false }))
        this.server.use(bodyParser.json())
    }

    routes(){
        this.server.use('/api/v1', router)
    }

    morgan(){
        this.server.use(morgan('dev'))
    }

    errorHandler(){
        this.server.use(errorHandler)  
    }

}
module.exports = new App().server;



