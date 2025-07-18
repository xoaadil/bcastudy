const Semesterdb = require("../models/Semester");
const Materialdb = require("../models/StudyMaterial");
const Subjectdb = require("../models/Subject");
let getAllSemesters = async (req, res, next) => {
  try {
    let AllSemesters = await Semesterdb.find();
    return res.status(200).json({
      message: "here is your all semesters",
      semesters: AllSemesters,
    });
  } catch (err) {
    res.status(500);
    next(err);
  }
};

let createSemester = async (req, res, next) => {
  let { name } = req.body;

  try {
    let existing = await Semesterdb.findOne({ name });
    if (existing) {
      res.status(400);
      return next(new Error("Semester already exists"));
    }

    let semester = await Semesterdb.create({ name });

    res.status(201).json({
      message: "Semester created successfully",
      semester,
    });
  } catch (err) {
    res.status(500);
    next(err);
  }
};

let subjectsWithMaterials = async (req, res, next) => {
  let semId = req.params.id;
  try {
    let subjects = await Subjectdb.find({ semester: semId });
    let result = [];
    for (let sub of subjects) {
      let materials = await Materialdb.find({ subject: sub._id });
      result.push({
        _id: sub._id,
        name: sub.name,
        code: sub.code,
        short: sub.short,
        materials: materials,
      });
    }
    return res.status(200).json({
      message : "subject with materials",
      data : result
    })
  } catch (err) {
    res.status(500);
    next(err);
  }
};

module.exports = {
  getAllSemesters,
  createSemester,
  subjectsWithMaterials
};
