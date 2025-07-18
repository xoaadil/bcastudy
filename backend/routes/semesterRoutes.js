const express = require("express");
const Router = express.Router();
const {
  getAllSemesters,
  createSemester,
  subjectsWithMaterials
} = require("../controllers/semesterController");

Router.get("/", getAllSemesters);
Router.post("/createSemester", createSemester);
Router.get("/:id/subjects-with-materials",subjectsWithMaterials)
module.exports = Router;


