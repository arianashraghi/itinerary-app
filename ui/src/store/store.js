import { configureStore } from "@reduxjs/toolkit";
import { reducer as itineraryReducer } from "./itinerary-slice";

const store = configureStore({
  reducer: { itinerary: itineraryReducer },
});

export default store;
