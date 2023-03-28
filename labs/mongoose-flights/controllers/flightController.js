const { Flights, Destinations } = require("../models/FlightsModel");

module.exports.index = async (req, res) => {
  try {
    // .find() gets all documents from the flight collection
    const flights = await Flights.find();
    console.log(flights);

    // passes { flight } data to the view
    res.render("flights/Index", { flights });
  } catch(err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.show = async (req, res) => {
  try {
    const flight = await Flights.findById(req.params.id).populate(
      "destinations"
    );
    res.render("flights/Show", { flight });
  } catch(err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.new = (req, res) => {
  const newFlight = new Flights({
    airline: req.body.airline,
    flightNo: req.body.flightNo,
    departs: req.body.departs,
    airport: req.body.airport,
  });

  // Obtain the default date
  const dt = newFlight.departs;
  // Format the date for the value attribute of the input
  const departsDate = dt.toISOString().slice(0, 16);
  res.render('flights/new', {departsDate});
};

module.exports.create = async (req, res) => {
    try {
    console.log("flight /flights");
    // use the model to interact with db and create a new document in the flight collection
    console.log('create', req.body)
    const destinations = Destinations.create(req.body);
    const result = await Flights.create(req.body);
    await Flights.findByIdAndUpdate(req.params.id, {
      // push the new destination document's id to flight destination property
      $push: {
        destinations: destinations._id,
      },
    });
    console.log(result);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
  res.redirect("/flights");
};

module.exports.delete = async (req, res) => {
  try {
    console.log("DELETE /flights/:id");
    await Flights.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.edit = async (req, res) => {
    try {
    console.log("GET /flights/:id/edit");
    // const flight = await Flights.findById(req.params.id);
    const flight = await Flights.findByIdAndUpdate(req.params.id, req.body);
    res.render("flights/Edit", { flight });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.update = async (req, res) => {
    try {
    console.log("PUT /flights/:id");
    console.log(req.body);
    // pass the id to find the document in the db and the form data (req.body) to update it
    console.log("inside update");
    console.log(req.body);
    await Flights.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/flights/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.seed = async (req, res) => {
    try {
    const flight = await Flights.findById(req.params.id);
    console.log("flight /flights/seed");
    await Flights.deleteMany({});
    Flights.create(flight);
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.clear = async (req, res) => {
  console.log("DELETE /flights/clear");
  try {
    await Flights.deleteMany({});
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.createDestination = async (req, res) => {
  await Flights.findByIdAndUpdate(req.params.id, {
      $push: {
          destinations: req.body
      }
  })
  res.redirect(`/flights/${req.params.id}`)
}

module.exports.deleteDestination = async (req, res) => {
  await Flights.findByIdAndUpdate(req.params.id, {
      $pull: {
          destinations: {
              _id: req.params.cid
          }
      }
  })
  res.redirect(`/flights/${req.params.id}`)
}

module.exports.indexDestination = async (req, res) => {
  const flight = await Flights.findById(req.params.id)
  res.send(flight.destinations)
}

module.exports.showDestination = async (req, res) => {
  const flight = await Flights.findById(req.params.id)
  const [ destination ] = flight.destinations.filter(destination => destination._id.toString() === req.params.cid) 
  res.render('destinations/Edit', { flightId: req.params.id, destination })
}

module.exports.updateDestination = async (req, res) => {
  console.log(req.body) 
  await Flights.updateOne({ 
    _id: req.params.id, 
    'destinations._id': req.params.cid 
}, {
      $set: {
          'destinations.$.body': req.body.body 
          // req.body is the form data and req.body.body is the updated value of the destination
    }
  })
  res.redirect(`/flights/${req.params.id}`)
}

