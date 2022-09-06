import { Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./Activities.module.css";

const Activities = () => {
  const activities = useSelector(
    (state) => state.itinerary.itinerary.selectedActivities
  );
  return (
    <Fragment>
      {Object.keys(activities).map((key) => {
        return (
          <div className={"container " + styles.activityContainer}>
            <h4 className={styles.dayTitle}>Day {key}</h4>
            <table className={styles.activityContainer}>
              <tr>
                <td className={styles.imageContainer}>
                  <img
                    className={styles.activityImage}
                    src={
                      "http://localhost/" + activities[key].restaurant.imageLink
                    }
                  />
                </td>
                <td>
                  <div>Restaurant </div>
                  <div>{activities[key].restaurant.name}</div>
                  <div>Rating: {activities[key].restaurant.overallRating}</div>
                  <div>
                    Best Review: {activities[key].restaurant.bestReview}
                  </div>
                </td>
              </tr>
            </table>
            <table className={styles.activityContainer}>
              <tr>
                <td className={styles.imageContainer}>
                  <img
                    className={styles.activityImage}
                    src={
                      "http://localhost/" + activities[key].leisure.imageLink
                    }
                  />
                </td>
                <td>
                  <div>Leisure </div>
                  <div>{activities[key].leisure.name}</div>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Activities;
