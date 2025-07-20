const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const materialSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  subject: {
    type: ObjectId,
    ref: "Subjectdb",
    required: true,
  },
  category: {
    type: String,
    enum: ["notes", "video", "6in1", "pyq"],
    required: true,
  },
  
  subtype: {
    type: String,
    enum: ["typed", "handwritten"], 
  },
});

module.exports = mongoose.model("Materialdb", materialSchema);
