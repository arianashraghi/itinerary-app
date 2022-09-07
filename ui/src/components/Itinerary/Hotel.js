import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./Hotel.module.css";
import { actions as itineraryActions } from "../../store/itinerary-slice";

const Hotel = (props) => {
  // TODO check in and check out date

  const dispatch = useDispatch();

  const selectedHotel = useSelector(
    (state) => state.itinerary.itinerary.selectedHotel
  );

  const availableHotels = useSelector((state) => state.itinerary.data.hotels);

  const [showDropDown, setShowDropDown] = useState(false);
  if (selectedHotel.name == undefined) return <div></div>;

  const imageLink = "http://localhost" + selectedHotel.imageLink;

  const toggleDropDown = () => {
    setShowDropDown((prevState) => {
      return !prevState;
    });
  };

  const changeHotel = (event) => {
    const hotelId = event.target.getAttribute("hotelId");
    dispatch(itineraryActions.changeHotel({ hotelId: hotelId }));
  };

  return (
    <div className="container">
      <table>
        <tr>
          <td>
            <img src={imageLink} className={styles.hotelImage} />
          </td>
          <td>
            <div className={styles.description}>
              <div className={styles.descItem}>{selectedHotel.name}</div>
              <div className={styles.descItem}>
                <span className={styles.label}>Rating:</span>{" "}
                {selectedHotel.overallRating}
              </div>
              <div className={styles.descItem}>
                <span className={styles.label}>Price: </span>$
                {selectedHotel.price}/night
              </div>
              <div className={styles.descItem}>
                <span className={styles.label}>Best Review:</span>{" "}
                {selectedHotel.bestReview}
              </div>
              <div
                className={
                  styles.dropdown +
                  " " +
                  (showDropDown ? styles.dropdownShow : "")
                }
              >
                <button className={styles.button} onClick={toggleDropDown}>
                  Change Hotel
                </button>
                <div className={styles.dropdownContent}>
                  {Object.keys(availableHotels).map((key) => {
                    return (
                      <button onClick={changeHotel} hotelId={key}>
                        {availableHotels[key].name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Hotel;
