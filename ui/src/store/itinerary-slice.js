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
  },
};

const itinerarySlice = createSlice({
  name: "itinerary",
  initialState: initalState,
  reducers: {
    updateData(state, action) {
      state.data = action.payload.data;
      state.itinerary = action.payload.itinerary;

      // Update current hotel name, imageLink, overallRating, price, best review
      console.log(action.payload.data.hotels[action.payload.itinerary.hotelId]);
      state.itinerary.selectedHotel =
        action.payload.data.hotels[action.payload.itinerary.hotelId];
    },
  },
});

export const reducer = itinerarySlice.reducer;
export const actions = itinerarySlice.actions;
export default itinerarySlice;
