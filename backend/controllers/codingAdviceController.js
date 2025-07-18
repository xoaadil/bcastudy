const CodingAdvice = require("../models/CodingAdvice");

exports.getAllAdvice = async (req, res, next) => {
  try {
    const advice = await CodingAdvice.find();
    res.status(200).json({ success: true, coding : advice, });
  } catch (err) {
    res.status(500);
    next(err);
  }
};

exports.createAdvice = async (req, res, next) => {
  try {
    const { title, description, link, category } = req.body;
    const tip = await CodingAdvice.create({ title, description, link, category });
    res.status(201).json({ success: true, message: "Coding advice added", tip });
  } catch (err) {
    res.status(500);
    next(err);
  }
};
