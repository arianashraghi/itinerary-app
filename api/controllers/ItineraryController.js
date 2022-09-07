const itineraryModel = require("../models/ItineraryModel");

exports.get = async (req, res, next) => {
  const response = await itineraryModel.getData();
  return res.json(response);
};

exports.save = (req, res, next) => {
  // TODO
  return res.json({
    result: "Save",
  });
};

exports.changeHotel = (req, res, next) => {
  itineraryModel.changeHotel(req.body.hotelId, req.body.itineraryId);
  return res.json({
    success: true,
  });
};
