import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Activities.module.css";
import Dropdown from "../../../ui/dropdown";
import { actions as itineraryActions } from "../../../store/itinerary-slice";

const Activities = () => {
  const dispatch = useDispatch();

  // Track selected activities
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

  function changeActivity(type, activityId, dayNumber, callback) {
    // Hardcoded to localhost for testing only
    fetch("http://localhost/itinerary/activity/change", {
      method: "POST",
      body: JSON.stringify({
        itineraryId: 1, // Hardcoded for prototype
        activityId: activityId,
        dayNumber: dayNumber,
        type: type,
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
        callback();
      })
      .catch((err) => {
        // TODO handle errors
        alert(err);
      });
  }

  // TODO Move Restaurant to it's own component
  const changeRestaurant = (event) => {
    const restaurantId = event.currentTarget.getAttribute("restaurantid");
    const dayNumber = event.currentTarget.getAttribute("daynumber");

    const callback = () => {
      dispatch(
        itineraryActions.changeRestaurant({
          restaurantId: restaurantId,
          dayNumber: dayNumber,
        })
      );
      dispatch(itineraryActions.updatePrice());
    };

    changeActivity("restaurant", restaurantId, dayNumber, callback);
  };

  // TODO Move Leisure to it's own component
  const changeLeisure = (event) => {
    const leisureId = event.currentTarget.getAttribute("leisureid");
    const dayNumber = event.currentTarget.getAttribute("daynumber");
    const callback = () => {
      dispatch(
        itineraryActions.changeLeisure({
          leisureId: leisureId,
          dayNumber: dayNumber,
        })
      );
      dispatch(itineraryActions.updatePrice());
    };
    changeActivity("leisure", leisureId, dayNumber, callback);
  };

  return (
    <Fragment>
      {Object.keys(activities).map((key) => {
        return (
          <div className={"container " + styles.activityContainer} key={key}>
            <h4 className={styles.dayTitle}>Day {key}</h4>
            <table className={styles.activityContainer}>
              <thead></thead>
              <tbody>
                <tr>
                  <td className={styles.imageContainer}>
                    <img
                      className={styles.activityImage}
                      src={
                        "http://localhost/" +
                        activities[key].restaurant.imageLink
                      }
                    />
                  </td>
                  <td>
                    <div>Restaurant </div>
                    <div>{activities[key].restaurant.name}</div>
                    <div>
                      Rating: {activities[key].restaurant.overallRating}
                    </div>
                    <div>
                      Best Review: {activities[key].restaurant.bestReview}
                    </div>
                    <div>Price: ${activities[key].restaurant.price}</div>
                    <div>
                      <Dropdown buttonName="Change Restaurant">
                        {Object.keys(availableRestaurants).map(
                          (restaurantKey) => {
                            return (
                              <div
                                key={restaurantKey}
                                onClick={changeRestaurant}
                                restaurantid={restaurantKey}
                                daynumber={key}
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
                                  {
                                    availableRestaurants[restaurantKey]
                                      .bestReview
                                  }
                                </div>
                                <div>
                                  Price: $
                                  {availableRestaurants[restaurantKey].price}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </Dropdown>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
            <table className={styles.activityContainer}>
              <thead></thead>
              <tbody>
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
                    <div>Price: ${activities[key].leisure.price}</div>
                    <div>
                      <Dropdown buttonName="Change Leisure">
                        {Object.keys(availableLeisures).map((leisureKey) => {
                          return (
                            <div
                              key={leisureKey}
                              onClick={changeLeisure}
                              leisureid={leisureKey}
                              daynumber={key}
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
                              <div>
                                Price: ${availableLeisures[leisureKey].price}
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
      })}
    </Fragment>
  );
};

export default Activities;
