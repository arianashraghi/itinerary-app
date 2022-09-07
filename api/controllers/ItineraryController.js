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
  itineraryModel.changeHotel(req.body.itineraryId, req.body.hotelId);
  return res.json({
    success: true,
  });
};

exports.changeActivity = (req, res, next) => {
  itineraryModel.changeActivity(
    req.body.itineraryId,
    req.body.dayNumber,
    req.body.type,
    req.body.activityId
  );
  return res.json({
    success: true,
  });
};
