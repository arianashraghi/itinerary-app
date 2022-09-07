import styles from "./Flight.module.css";

const { Fragment } = require("react");
const Flight = (props) => {
  return (
    <Fragment>
      <div className="container">
        <table className={styles.content}>
          <tr>
            <td className={styles.icon}>
              <img src="http://localhost/images/delta.png" />
            </td>
            <td>
              <div className={styles.name}>
                Delta
                <div className={styles.date}>
                  Sunday, January 1 - Saturday, January 4
                </div>
              </div>
            </td>
            <td className={styles.price}>$299.99</td>
          </tr>
        </table>
      </div>
    </Fragment>
  );
};

export default Flight;
