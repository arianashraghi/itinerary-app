import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./Hotel.module.css";
import { actions as itineraryActions } from "../../store/itinerary-slice";
import Dropdown from "../../ui/dropdown";

const Hotel = (props) => {
  // TODO check in and check out date

  const dispatch = useDispatch();

  const selectedHotel = useSelector(
    (state) => state.itinerary.itinerary.selectedHotel
  );

  const availableHotels = useSelector((state) => state.itinerary.data.hotels);

  if (selectedHotel.name == undefined) return <div></div>;

  const imageLink = "http://localhost" + selectedHotel.imageLink;

  const changeHotel = (event) => {
    const hotelId = event.currentTarget.getAttribute("hotelid");
    // Hardcoded to localhost for testing only
    fetch("http://localhost/itinerary/hotel/change", {
      method: "POST",
      body: JSON.stringify({
        itineraryId: 1, // Hardcoded for prototype
        hotelId: hotelId,
      }),
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
        dispatch(itineraryActions.changeHotel({ hotelId: hotelId }));
      })
      .catch((err) => {
        // TODO handle errors
        alert(err);
      });
  };

  return (
    <div className="container">
      <table>
        <thead></thead>
        <tbody>
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
                <Dropdown buttonName="Change Hotel">
                  {Object.keys(availableHotels).map((key) => {
                    return (
                      <div
                        key={key}
                        onClick={changeHotel}
                        hotelid={key}
                        className={styles.listItem}
                      >
                        <div>
                          <img
                            className={styles.listItemImage}
                            src={
                              "http://localhost" +
                              availableHotels[key].imageLink
                            }
                          />{" "}
                          {availableHotels[key].name} ({" "}
                          {availableHotels[key].overallRating})
                        </div>
                        <div>
                          Best Review: {availableHotels[key].bestReview}
                        </div>
                      </div>
                    );
                  })}
                </Dropdown>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default Hotel;
