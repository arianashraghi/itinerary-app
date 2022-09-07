const express = require("Express");
const itineraryController = require("../controllers/ItineraryController");

const router = express.Router();

// Load all data
// Should be based on destination - Not required for prototyping.
router.get("/itinerary", itineraryController.get);

// TODO add validation for hotelId and itineraryId
router.post("/itinerary/hotel/change", itineraryController.changeHotel);

// TODO add validation for activityId, type, dayNumber and itineraryId
router.post("/itinerary/activity/change", itineraryController.changeActivity);

module.exports = router;
