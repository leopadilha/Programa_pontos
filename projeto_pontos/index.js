const express = require('express')
const router = require('./src/routes/clientRoutes')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const errorHandler = require('./src/middlewares/errorHandle')

class App{ 
    constructor(){
        this.server = express()
        this.middlewares()
        this.routes()
        this.morgan()
    }

    middlewares(){
        this.server.use(express.json())
        this.server.use(bodyParser.urlencoded({ extended: false }))
        this.server.use(bodyParser.json())
        this.server.use(errorHandler)  
    }

    routes(){
        this.server.use('/api/v1', router)
    }

    morgan(){
        this.server.use(morgan('dev'))
    }

}
module.exports = new App().server;



