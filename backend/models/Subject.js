const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const SubjectSchema = new Schema({
  name: {
    type: String,
    required: true, 
  },
  short: {
    type: String,
    required: true, 
  },
  code: {
    type: String,
    required: true, 
  },
  semester: {
    type: ObjectId,
    ref: "Semesterdb", 
    required: true,
  },
});

module.exports = mongoose.model("Subjectdb", SubjectSchema);
