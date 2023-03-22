require('dotenv').config()

const connectDB = require('./config/db')
const express = require('express');

const app = express();
const PORT = 3000;

connectDB()



const { createEngine } = require('jsx-view-engine')

const pokemon = require('./models/pokemon')

const pokemonRoute = require('./routes/pokemonRoute')

app.set('view engine', 'jsx')

app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
})

// app.get('/pokemon', (req, res) => {
//     res.render(pokemon)
// })

app.use('/pokemon', pokemonRoute)

app.listen(PORT, () => {
    console.log('listening on port 3000');
})

