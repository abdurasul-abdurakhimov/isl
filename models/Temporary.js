const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TemporarySchema = new Schema({
  createdBy: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
  termID: {
    type: String,
    required: true
  },
  definition: {
    type: String,
    required: true
  },
  term: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("temporary", TemporarySchema);
