const express = require("Express");
const itineraryController = require("../controllers/ItineraryController");

const router = express.Router();

router.get("/itinerary", itineraryController.get);

router.post("/itinerary", itineraryController.save);

module.exports = router;
