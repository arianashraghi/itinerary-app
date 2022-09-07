import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Activities.module.css";
import Dropdown from "../../../ui/dropdown";
import { actions as itineraryActions } from "../../../store/itinerary-slice";

const Activities = () => {
  const dispatch = useDispatch();

  const activities = useSelector(
    (state) => state.itinerary.itinerary.selectedActivities
  );

  // Populating dropdowns for edit
  const availableRestaurants = useSelector(
    (state) => state.itinerary.data.restaurants
  );
  const availableLeisures = useSelector(
    (state) => state.itinerary.data.leisures
  );

  // TODO Move Restaurant to it's own component
  const changeRestaurant = (event) => {
    const restaurantId = event.currentTarget.getAttribute("restaurantId");
    const dayNumber = event.currentTarget.getAttribute("dayNumber");
    dispatch(
      itineraryActions.changeRestaurant({
        restaurantId: restaurantId,
        dayNumber: dayNumber,
      })
    );
  };

  // TODO Move Leisure to it's own component
  const changeLeisure = (event) => {
    const leisureId = event.currentTarget.getAttribute("leisureId");
    const dayNumber = event.currentTarget.getAttribute("dayNumber");
    dispatch(
      itineraryActions.changeLeisure({
        leisureId: leisureId,
        dayNumber: dayNumber,
      })
    );
  };

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
                  <div>
                    <Dropdown buttonName="Change Restaurant">
                      {Object.keys(availableRestaurants).map(
                        (restaurantKey) => {
                          return (
                            <div
                              onClick={changeRestaurant}
                              restaurantId={restaurantKey}
                              dayNumber={key}
                              className={styles.listItem}
                            >
                              <div>
                                <img
                                  className={styles.listItemImage}
                                  src={
                                    "http://localhost" +
                                    availableRestaurants[restaurantKey]
                                      .imageLink
                                  }
                                />{" "}
                                {availableRestaurants[restaurantKey].name} ({" "}
                                {
                                  availableRestaurants[restaurantKey]
                                    .overallRating
                                }
                                )
                              </div>
                              <div>
                                Best Review:{" "}
                                {availableRestaurants[restaurantKey].bestReview}
                              </div>
                            </div>
                          );
                        }
                      )}
                    </Dropdown>
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
                  <div>
                    <Dropdown buttonName="Change Leisure">
                      {Object.keys(availableLeisures).map((leisureKey) => {
                        return (
                          <div
                            onClick={changeLeisure}
                            leisureId={leisureKey}
                            dayNumber={key}
                            className={styles.listItem}
                          >
                            <div>
                              <img
                                className={styles.listItemImage}
                                src={
                                  "http://localhost" +
                                  availableLeisures[leisureKey].imageLink
                                }
                              />{" "}
                              {availableLeisures[leisureKey].name}
                            </div>
                          </div>
                        );
                      })}
                    </Dropdown>
                  </div>
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
