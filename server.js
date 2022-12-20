require('dotenv').config()
const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')


const app = express()
app.use(cors())
const PORT = process.env.PORT || 9000

app.set('port', PORT)

const dbOptions = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

// -------------middelwares-------------------------

app.use( myconn(mysql, dbOptions, 'single') )
app.use( express.json() )
app.use('/api', routes)


// ----------------Routes------------------------
app.get('/', (req, res) => {
    res.send("<h1>"+'Welcome to my APP 2022 UNAB  - Backend mysql - Marcadores Deportivos' + "</h1>")
})



app.listen(PORT, () => {
    console.log(`Server runing on port ${PORT}`)
})