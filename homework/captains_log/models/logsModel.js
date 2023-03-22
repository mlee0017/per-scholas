const mongoose = require('mongoose')

// Pointing to the schema property (shortcut) (Schema is a class)
const Schema = mongoose.Schema

// Instantiate a new Schema object for fruit and structure our data
const captainLogSchema = new Schema({
    title : {
        type: String,
        required: true 
    },
    entry : {
         type: String,
         required: true
    },
    shipIsBroken: { 
        type: Boolean,
        required: true 
    }, 
    timestamps: {
        type: String,
        required: true
    }

})

// create our model using our fruitSchema and give our collection a name of "fruits"
const Logs = mongoose.model('logs', captainLogSchema)

// exporting the Fruit model as a module
module.exports = Logs