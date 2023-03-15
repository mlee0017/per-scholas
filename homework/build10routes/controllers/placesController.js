const places = require('../models/places')

module.exports.index = (req, res) => {
    res.render('/Index', { places })
}

module.exports.show = (req, res) => {
    console.log(req.params.index)
    res.render('/Show', { place: places[req.params.index] })
}