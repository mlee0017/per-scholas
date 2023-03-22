require('dotenv').config()

const express = require('express')

const connectDB = require('./config/db')

const app = express()

connectDB()

const PORT = 8083 

const logsRoute = require('./routes/logsRoute')

const { createEngine } = require('jsx-view-engine')

const methodOverride = require('method-override')

app.set('view engine', 'jsx')

app.engine('jsx', createEngine())

app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))

app.use(express.static('public'))

app.use((req, res, next)=> {
    console.log('inside middleware')
    console.log(`${req.method} ${req.path}`)     
    next()
})

app.use('/logs', logsRoute)

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})

// npm init -y
// npm i express
// npm i mongoose
// npm i dotenv
// npm i method-override
// npm i jsx-view-engine react react-dom