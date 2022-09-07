const database = require("../util/database");

// Could improve by combining some of the queries or all of them but for testing purposes will keep it the way it is.
// TODO optimize queries
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
    response["itinerary"] = await getItinerary();
    response["itinerary"]["activities"] = await getActivities();
  } catch (err) {
    // TODO handle errors
    console.log(err);
  }
  return response;
};

exports.changeHotel = (itineraryId, hotelId) => {
  database
    .execute("UPDATE itinerary SET hotelId=? WHERE id=?", [
      hotelId,
      itineraryId,
    ])
    .then(() => {
      // Ignore for now
    })
    .catch((err) => {
      console.log("Oh no something went wrong", err);
    });
};

exports.changeActivity = (itineraryId, dayNumber, type, activityId) => {
  const newValues = [activityId, itineraryId, dayNumber];
  let sql = "";
  if (type == "restaurant") {
    sql =
      "UPDATE activities SET restaurantId=? WHERE itineraryId=? AND dayNumber=?";
  } else if (type == "leisure") {
    sql =
      "UPDATE activities SET leisureId=? WHERE itineraryId=? AND dayNumber=?";
  } else {
    throw Error("Not supported");
  }
  database
    .execute(sql, newValues)
    .then(() => {
      // Ignore for now
    })
    .catch((err) => {
      console.log("Oh no something went wrong", err);
    });
};
