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
            <div className="activityContainer"></div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Activities;
