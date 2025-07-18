const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const codingAdviceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String, // optional longer explanation
  link: String,         // optional YouTube/Blog/Course link
  category: {
    type: String,
    enum: ["dsa", "web", "c", "placement", "general"],
    default: "general"
  }
});

module.exports = mongoose.model("CodingAdvice", codingAdviceSchema);
