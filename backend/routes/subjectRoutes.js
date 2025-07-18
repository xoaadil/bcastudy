const Router= require("express").Router();
const {createSubject,getSubjectBySemester,subjectsWithMaterials} = require("../controllers/subjectController")

Router.post("/:id/create",createSubject)
Router.get("/:id",getSubjectBySemester)

module.exports=Router;