const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  age: Number,
  id: Number,
});

const User = mongoose.model('User',UserSchema);

module.exports = {User}