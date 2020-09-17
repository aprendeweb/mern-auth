const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    username: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

const model = mongoose.model('users', schema);
module.exports = model;
