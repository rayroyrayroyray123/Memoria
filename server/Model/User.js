const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {type: String, require: true},
    // lastName: {type: String, require: true},
    about: {type:String},
    password: {type: String, require: true}, 
    email: { type: String, required: true, unique: true }
  },
  { collection: "users" },
  { timestamps: true }
);
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
