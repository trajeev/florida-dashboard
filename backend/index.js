const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

// THis is used to create connection with MySQL database 
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})
// cors policy and other requirements for frontend and backend wiring.
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

// this method is used to retrieve data from crash event table
app.get('/api/get', (req, res) => {
    const sqlSelect = 'SELECT * FROM crashdatabase.CRASH_EVENT'
    db.query(sqlSelect, (error, result) => {
        res.send(result)
    })
})

// this method is used to retrieve data from driver table
app.get('/api/driver', (req, res) => {
    const sqlSelect = 'SELECT * FROM crashdatabase.DRIVER'
    db.query(sqlSelect, (error, result) => {
        res.send(result)
    })
})

app.get('/', (req, res) => {
    res.send('hello from server')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server listening to port ${PORT}`)
})