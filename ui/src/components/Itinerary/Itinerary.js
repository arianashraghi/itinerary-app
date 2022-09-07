import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions as itineraryActions } from "../../store/itinerary-slice";
import Flight from "./Flight";
import Hotel from "./Hotel";
import Activities from "./Activities/Activities";

const Itinerary = (props) => {
    // TODO to add pricing to all activities, hotel rooms, flights to calculate total price
    // TODO Loading data based on the destination. Lazy loading
  const dispatch = useDispatch();

  // TODO would be good to not hard code the host name to make it more flexible. 
  useEffect(() => {
    fetch("http://localhost/itinerary", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        // Update data
        dispatch(itineraryActions.updateData(data));
      })
      .catch((err) => {
        // TODO handle errors
      });
  }, []);

  return (
    <div>
        <div className={}></div>
        <h3>Travel Itinerary</h3>
      <Flight></Flight>
      <Hotel></Hotel>
      <Activities></Activities>
    </div>
  );
};

export default Itinerary;
