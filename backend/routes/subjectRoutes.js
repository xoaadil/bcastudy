const Router= require("express").Router();
const {createSubject,getSubjectBySemester,subjectsWithMaterials ,getSubject } = require("../controllers/subjectController")

Router.post("/:id/create",createSubject)
Router.get("/:id",getSubjectBySemester)
Router.get("/single/:id",getSubject)

module.exports=Router;