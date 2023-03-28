const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    airport: { 
        type: String, 
        required: true, 
        enum: ['AUS', 'DAL','LAX', 'SAN','SEA'] }, 
    arrival: { type: Date }
  },
);


const flightSchema = new Schema(
  {
    airline: { 
        type: String, 
        required: true, 
        enum: ['American', 'Southwest','United']}, 
    flightNo: { 
        type: Number, 
        required: 10 <= 9999 },
    departs: { 
        type: Date, 
        required: true,
        default: (`Date + 1`)},
    airport: { 
        type: String, 
        required: true, 
        enum: ['AUS', 'DAL','LAX', 'SAN','SEA']}, 
    destinations: [destinationSchema]
  },
  { timestamps: true }
  );



const Flights = mongoose.model('flights', flightSchema);

const Destinations = mongoose.model('destinations', destinationSchema);


module.exports = { Flights, Destinations }