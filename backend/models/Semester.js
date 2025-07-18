const mongoose=require("mongoose");
const Schema = mongoose.Schema;

let semesterSchema= new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
})
 let Semesterdb =mongoose.model("Semesterdb",semesterSchema);
 module.exports=Semesterdb;