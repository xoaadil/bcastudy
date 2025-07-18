const express = require("express");
const router = express.Router();
const { getAllAdvice, createAdvice } = require("../controllers/codingAdviceController");

router.get("/", getAllAdvice);
router.post("/", createAdvice);

module.exports = router;
