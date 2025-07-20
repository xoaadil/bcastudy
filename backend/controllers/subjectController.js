const Semesterdb = require("../models/Semester");
const Subjectdb = require("../models/Subject");

let createSubject = async (req, res, next) => {
  let { name ,code,short } = req.body;
  let semId = req.params.id;
  try {
    let existing = await Subjectdb.findOne({ name: name });
    if (existing) {
      res.status(400);
      return next(new Error("user already exist"));
    } else {
      let newSubject = await Subjectdb.create({
        name: name,
        semester: semId,
        short : short,
        code  : code
      });
      return res.status(201).json({
        message: "new subject is created",
        subject: newSubject,
      });
    }
  } catch (err) {
    res.status(500);
    next(err);
  }
};

let getSubjectBySemester = async (req, res, next) => {
  let semId = req.params.id;
  try {
    let allSubject = await Subjectdb.find({semester: semId,});
    return res.status(200).json({
        message : "here are your all subject of your semseter",
        subjects : allSubject
    })
  } catch (err) {
    res.status(500);
    next(err);
  }
};

let getSubject= async(req,res,next)=>{
let subId=req.params.id;
try{
let subject= await Subjectdb.findOne({_id : subId});
let semester= await Semesterdb.findOne({_id :subject.semester});
console.log(semester);
console.log(semester.name);
return res.status(200).json({
  message : "here is your subject",
  subject : subject,
  semester :semester,
})
}
catch(err){
  return res.status(500).json({
    message : "internal server side error ",
    error : err,
  })
}
}


module.exports= { getSubjectBySemester,createSubject ,getSubject};
