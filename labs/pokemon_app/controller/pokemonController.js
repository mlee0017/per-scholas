// const pokemon = require('../models/pokemon')
const Pokemon = require('../models/pokemonModel')

module.exports.index = async (req, res) => {

    try {

        const pokemon = await Pokemon.find() 
        console.log('inside controller')

        res.render('Index', { pokemon })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}


module.exports.show = async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        res.render('Show', { pokemon })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.create = async (req, res) => {
    try {
        // use the model to interact with db and create a new document in the fruit collection
        req.body.img = "http://img.pokemondb.net/artwork/"+req.body.name.toLowerCase()+".jpg"
        const result = await Pokemon.create(req.body)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
    
    res.redirect('/pokemon')
}

module.exports.new = (req, res) => {
    res.render('New')
}