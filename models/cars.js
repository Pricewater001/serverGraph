const { default: mongoose } = require("mongoose");

const CarSchema = new mongoose.Schema({
  date: Number,
  name: String,
});

const Car = mongoose.model('Car',CarSchema);

module.exports = {Car}
