const Logs = require("../models/logsModels");

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {
  try {
    // Use the capLog model to interact with the database
    // find will get all documents from the capLog collection
    const logs = await Logs.find();
    console.log(logs);

    // Looks in the views folder for "Logs/Index" and passes { Logs } data to the view (kind of like a server props object)
    res.render("logs/Index", { logs });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
  try {
    const capLog = await Logs.findById(req.params.id);
    res.render("logs/Show", { capLog });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// GET /Logs/new
module.exports.new = (req, res) => {
  res.render("logs/New");
};

// POST /Logs
module.exports.create = async (req, res) => {
  console.log("POST /logs");
  if (req.body.shipIsBroken) {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  try {
    // use the model to interact with db and create a new document in the capLog collection
    const result = await Logs.create(req.body);
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  res.redirect("/logs");
};

// DELETE /Logs/:name
module.exports.delete = async(req, res) => {
  try {
    console.log("DELETE /logs/:id");
    await Logs.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.redirect("/logs");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// GET /Logs/:name/edit
module.exports.edit = async (req, res) => {
  console.log("GET /logs/:id/edit");
  try {
    // const capLog = await Logs.findById(req.params.id);
    const capLog = await Logs.findByIdAndUpdate(req.params.id, req.body);
    res.render("logs/Edit", { capLog });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// PUT /Logs/:id
module.exports.update = async (req, res) => {
  console.log("PUT /logs/:id");
  console.log(req.body);

  if (req.body.readyToEat) {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  try {
    // pass the id to find the document in the db and the form data (req.body) to update it
    await Logs.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/Logs/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.seed = async (req, res) => {
  console.log("POST /logs/seed");
  try {
    await Logs.deleteMany({}); // Keep empty to delete everything
    Logs.create(Logs);
    res.redirect("/logs");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.clear = async (req, res) => {
  console.log("DELETE /logs/clear");
  try {
    await Logs.deleteMany({});
    res.redirect("/logs");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};