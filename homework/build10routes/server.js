const express = require('express')

const app = express()

const PORT = 3001

const placesRoute = require('./routes/placesRoute')

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

app.use('/', placesRoute)

app.get('/', (req, res) => {
    res.send('<h1>10 places I would like to visit</h1>')

})

app.get('/route2', (req, res) => {

})

app.get('/route3', (req, res) => {

})

app.get('/route4', (req, res) => {

})

app.get('/route5', (req, res) => {

})

app.get('/route6', (req, res) => {

})

app.get('/route7', (req, res) => {

})

app.get('/route8', (req, res) => {

})

app.get('/route9', (req, res) => {

})

app.get('/route10', (req, res) => {

})



app.listen(PORT, (req, res) => {
    res.send('listening on port ' + PORT)
})