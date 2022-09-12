import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as itineraryActions } from "../../store/itinerary-slice";
import Flight from "./Flight";
import Hotel from "./Hotel";
import Activities from "./Activities/Activities";

const Itinerary = (props) => {
  // TODO to add pricing to all activities, hotel rooms, flights to calculate total price
  // TODO Loading data based on the destination. Lazy loading
  const dispatch = useDispatch();

  const total = useSelector((state) => state.itinerary.itinerary.total);
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
        dispatch(itineraryActions.updatePrice());
      })
      .catch((err) => {
        // TODO handle errors
      });
  }, []);

  return (
    <div>
      <div></div>
      <h3>
        Travel Itinerary{" "}
        <span style={{ float: "right", fontWeight: "bold" }}>${total}</span>
      </h3>
      <Flight></Flight>
      <Hotel></Hotel>
      <Activities></Activities>
    </div>
  );
};

export default Itinerary;
