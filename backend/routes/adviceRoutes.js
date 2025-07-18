const express = require("express");
const router = express.Router();
const {
  getAllAdvice,
  createAdvice,
  deleteAdvice,
} = require("../controllers/adviceController");

router.get("/", getAllAdvice);
router.post("/create", createAdvice);
router.delete("/:id", deleteAdvice);

module.exports = router;
