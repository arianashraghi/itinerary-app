import { useState } from "react";
import styles from "./dropdown.module.css";

const Dropdown = (props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown((prevState) => {
      return !prevState;
    });
  };
  return (
    <div
      className={
        styles.dropdown + " " + (showDropDown ? styles.dropdownShow : "")
      }
    >
      <button className={styles.button} onClick={toggleDropDown}>
        {props.buttonName}
      </button>
      <div className={styles.dropdownContent}>{props.children}</div>
    </div>
  );
};

export default Dropdown;
