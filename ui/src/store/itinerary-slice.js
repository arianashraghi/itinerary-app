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
  },
};

const itinerarySlice = createSlice({
  name: "itinerary",
  initialState: initalState,
  reducers: {},
});

export const reducer = itinerarySlice.reducer;
export const actions = itinerarySlice.actions;
export default itinerarySlice;
