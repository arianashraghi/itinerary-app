import { useSelector } from "react-redux";
import styles from "./Hotel.module.css";

const Hotel = (props) => {
  // TODO check in and check out date
  const selectedHotel = useSelector(
    (state) => state.itinerary.itinerary.selectedHotel
  );
  if (selectedHotel.name == undefined) return <div></div>;

  const imageLink = "http://localhost" + selectedHotel.imageLink;
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
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Hotel;
