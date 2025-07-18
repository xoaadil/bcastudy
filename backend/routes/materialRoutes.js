const Router= require("express").Router();
const {getAllMaterialOfThisSubject,createMaterial}=require("../controllers/materialController")
Router.get("/:id/",getAllMaterialOfThisSubject)
Router.post("/:id/create",createMaterial)


module.exports=Router;