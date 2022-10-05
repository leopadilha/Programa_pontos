const app = require('./index')
const dotenv = require('dotenv')
const connection = require('./src/config/database')

dotenv.config({ path: 'src/config/config.env'})
const PORT  = process.env.PORT

connection()


app.listen(PORT, ()=>{
    console.log(`servidor rodando na porta ${PORT}`)
})
