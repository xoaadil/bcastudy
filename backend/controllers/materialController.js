let Materialdb = require("../models/StudyMaterial");

let createMaterial = async (req, res, next) => {
  let subjectId = req.params.id;
  let { title, link, category, subtype } = req.body;

  if (category === "notes" && !subtype) {
    return res.status(400).json({ error: "Subtype is required for notes category" });
  }

  try {
    let newStudyMaterial = await Materialdb.create({
      title: title,
      category: category,
      link: link,
      subject: subjectId,
      subtype: subtype, 
    });

    return res.status(201).json({
      message: "New Material has been created",
      Material: newStudyMaterial,
    });
  } catch (err) {
    res.status(500);
    next(err);
  }
};


let getAllMaterialOfThisSubject = async (req, res, next) => {
  console.log("getting all material");
  let subjectId = req.params.id;
  try {
    let AllMaterialOfThisSubject = await Materialdb.find({subject : subjectId});
    return res.status(200).json({
      message: "here is your study material",
      Materail: AllMaterialOfThisSubject,
    });
  } catch (err) {
    res.status(500);
    next(err);
  }
};
module.exports = { createMaterial, getAllMaterialOfThisSubject };
