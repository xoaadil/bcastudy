const Advice = require("../models/Advise");

let getAllAdvice = async (req, res, next) => {
  try {
    const tips = await Advice.find();
    res.status(200).json({
      success: true,
      advices : tips,
    });
  } catch (err) {
    res.status(500);
    next(err);
  }
};

let createAdvice = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const tip = await Advice.create({ title, description });

    res.status(201).json({
      success: true,
      message: "Advice created successfully",
      tip,
    });
  } catch (err) {
    res.status(500);
    next(err);
  }
};

let deleteAdvice = async (req, res, next) => {
  try {
    await Advice.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Advice deleted",
    });
  } catch (err) {
    res.status(500);
    next(err);
  }
};
module.exports = { deleteAdvice, createAdvice, getAllAdvice };
