const itineraryModel = require("../models/ItineraryModel");
exports.get = async (req, res, next) => {
  const response = await itineraryModel.getData();
  return res.json(response);
};

exports.save = (req, res, next) => {
  return res.json({
    result: "Save",
  });
};
