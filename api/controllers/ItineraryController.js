exports.get = (req, res, next) => {
  return res.json({
    result: "Hello",
  });
};

exports.save = (req, res, next) => {
  return res.json({
    result: "Save",
  });
};
