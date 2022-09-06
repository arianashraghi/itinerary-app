import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions as itineraryActions } from "../../store/itinerary-slice";
import Flight from "./Flight";
import Hotel from "./Hotel";

const Itinerary = (props) => {
  const dispatch = useDispatch();

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
      <Flight></Flight>
      <Hotel></Hotel>
    </div>
  );
};

export default Itinerary;
