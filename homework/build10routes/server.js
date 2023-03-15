const express = require('express')

const app = express()

const PORT = 3001

const placesRoute = require('./routes/placesRoute')

const { createEngine } = require('jsx-view-engine')
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())

app.use(express.urlencoded({ extended: true }))
app.use('/', placesRoute)

app.listen(PORT, (req, res) => {
    console.log('listening on port ' + PORT)
})