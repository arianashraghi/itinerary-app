import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  data: {
    restaurants: {},
    hotels: {},
    leisures: {},
  },
  itinerary: {
    hotelId: 0,
    activities: {},
    selectedHotel: {},
    selectedActivities: {},
  },
};

const itinerarySlice = createSlice({
  name: "itinerary",
  initialState: initalState,
  reducers: {
    updateData(state, action) {
      state.data = action.payload.data;
      state.itinerary = action.payload.itinerary;

      // Find selected hotel
      state.itinerary.selectedHotel =
        action.payload.data.hotels[action.payload.itinerary.hotelId];

      // Find selected activities for each day
      const selectedActivities = {};
      for (const [dayNum, dayActivities] of Object.entries(
        action.payload.itinerary.activities
      )) {
        selectedActivities[dayNum] = {
          restaurant:
            action.payload.data.restaurants[dayActivities.restaurantId],
          leisure: action.payload.data.leisures[dayActivities.leisureId],
        };
      }
      state.itinerary.selectedActivities = selectedActivities;
    },
    changeHotel(state, action) {
      console.log(action.payload.hotelId);
      state.itinerary.selectedHotel = state.data.hotels[action.payload.hotelId];
    },
  },
});

export const reducer = itinerarySlice.reducer;
export const actions = itinerarySlice.actions;
export default itinerarySlice;
