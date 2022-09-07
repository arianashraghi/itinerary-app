import { createSlice, current } from "@reduxjs/toolkit";

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
      state.itinerary.selectedHotel = state.data.hotels[action.payload.hotelId];
    },
    changeRestaurant(state, action) {
      const newRestaurant =
        current(state).data.restaurants[action.payload.restaurantId];
      state.itinerary.selectedActivities[action.payload.dayNumber].restaurant =
        newRestaurant;
    },
    changeLeisure(state, action) {
      const newLeisure = current(state).data.leisures[action.payload.leisureId];
      state.itinerary.selectedActivities[action.payload.dayNumber].leisure =
        newLeisure;
    },
  },
});

export const reducer = itinerarySlice.reducer;
export const actions = itinerarySlice.actions;
export default itinerarySlice;
