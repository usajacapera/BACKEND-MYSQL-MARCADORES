require('dotenv').config()
const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')

const conexion = process.env.DB_HOST || process.env.MYSQLDATABASE
const port_DB = process.env.PORT_DB || process.env.MYSQLPORT
const user_DB = process.env.DB_USER || process.env.MYSQLUSER
const password_DB = process.env.DB_PASSWORD || process.env.MYSQLPASSWORD
const name_DB = process.env.DB_NAME || process.env.MYSQLDATABASE
const port_server = process.env.PORT_SERVER || process.env.MYSQLPORT


const app = express()
app.use(cors())

app.set('port', port_server)

const dbOptions = {
    host: conexion,
    port: port_DB,
    user: user_DB,
    password: password_DB,
    database: name_DB
}

// -------------middelwares-------------------------

app.use( myconn(mysql, dbOptions, 'single') )
app.use( express.json() )
app.use('/api', routes)


// ----------------Routes------------------------
app.get('/', (req, res) => {
    res.send("<h1>"+'Welcome to my APP 2022 UNAB  - Backend mysql - Marcadores Deportivos' + "</h1>")
})



app.listen(port_server || 9000, () => {
    console.log(`Server runing on port ${app.get('port')}`)
})