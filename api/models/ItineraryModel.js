const database = require("../util/database");

const getHotels = async () => {
  const [rows, fields] = await database.execute("SELECT * FROM hotels");
  const hotels = {};
  rows.forEach((row) => {
    hotels[row["id"]] = row;
  });
  return hotels;
};

const getRestaurants = async () => {
  const [rows, fields] = await database.execute("SELECT * FROM restaurants");
  const restaurants = {};
  rows.forEach((row) => {
    restaurants[row["id"]] = row;
  });
  return restaurants;
};

const getLeisures = async () => {
  const [rows, fields] = await database.execute("SELECT * FROM leisures");
  const leisures = {};
  rows.forEach((row) => {
    leisures[row["id"]] = row;
  });
  return leisures;
};

const getItinerary = async () => {
  const [rows, fields] = await database.execute("SELECT * FROM itinerary");
  return rows[0];
};

const getActivities = async () => {
  const [rows, fields] = await database.execute("SELECT * FROM activities");
  const leisures = {};
  rows.forEach((row) => {
    leisures[row["dayNumber"]] = row;
  });
  return leisures;
};

exports.getData = async () => {
  const response = {
    data: {},
    itinerary: {},
  };
  try {
    response["data"]["hotels"] = await getHotels();
    response["data"]["restaurants"] = await getRestaurants();
    response["data"]["leisures"] = await getLeisures();
    response["data"]["itinerary"] = await getItinerary();
    response["data"]["itinerary"] = await getActivities();
  } catch (err) {
    console.log(err);
  }
  console.log("here");
  return response;
};
