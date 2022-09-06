const itineraryModel = require("../models/ItineraryModel");
exports.get = (req, res, next) => {
  itineraryModel
    .get()
    .then((rows) => {
      return res.json({
        result: rows[0],
      });
    })
    .catch((err) => {
      return res.json({
        result: err,
      });
    });
};

exports.save = (req, res, next) => {
  return res.json({
    result: "Save",
  });
};
