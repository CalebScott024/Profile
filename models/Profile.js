const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  imgUrl: {
    type: String
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  // company: {
  //   type: String
  // },
  // website: {
  //   type: String
  // },
  // location: {
  //   type: String
  // },
  // status: {
  //   type: String,
  //   required: true
  // },
  // skills: {
  //   type: [String],
  //   required: true
  // },
  bio: {
    type: String
  },
 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
