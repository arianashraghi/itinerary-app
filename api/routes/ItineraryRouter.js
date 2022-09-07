const express = require("Express");
const itineraryController = require("../controllers/ItineraryController");

const router = express.Router();

router.get("/itinerary", itineraryController.get);
router.post("/itinerary", itineraryController.save);

// TODO add validation for hotelId and itineraryId
router.post("/itinerary/hotel/change", itineraryController.changeHotel);

module.exports = router;
