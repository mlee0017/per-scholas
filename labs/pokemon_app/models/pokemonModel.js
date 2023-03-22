// Load mongoose
const mongoose = require('mongoose')

// Pointing to the schema property (shortcut) (Schema is a class)
const Schema = mongoose.Schema

// Instantiate a new Schema object for pokemon and structure our data
const pokemonSchema = new Schema({
    name: { 
        
        type: String,
        required: true
    },
    img: { type: String },
    
})

// create our model using our pokemonSchema and give our collection a name of "fruits"
const Pokemon = mongoose.model('pokemons', pokemonSchema)

// exporting the Pokemon model as a module
module.exports = Pokemon