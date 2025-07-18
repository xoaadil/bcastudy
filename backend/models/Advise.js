const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adviceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Advice", adviceSchema);
