const express = require('express')
const routerClient = require('./src/routes/clientRoutes')
const routerUser = require('./src/routes/userRoutes')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('express-async-errors')
const errorHandler = require('./src/middlewares/errorHandle')

class App{ 
    constructor(){
        this.server = express()
        this.middlewares()
        this.morgan()
        this.routes()
        this.errorHandler()
        
    }

    middlewares(){
        this.server.use(express.json())
        // this.server.use(bodyParser.urlencoded({ extended: false }))
        // this.server.use(bodyParser.json())
    }

    routes(){
        this.server.use('/api/v1', routerClient)
        this.server.use('/api/v1', routerUser)
    }

    morgan(){
        this.server.use(morgan('dev'))
    }

    errorHandler(){
        this.server.use(errorHandler)  
    }

}
module.exports = new App().server;



