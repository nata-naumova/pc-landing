import React from "react";
import styles from "./Services.module.css";

const Buttons = ({ servicesFiltered, selectedPrice, setSelectedPrice }) => {
  return (
    <div className={styles.buttons}>
      {servicesFiltered.map((price) => (
        <button
          key={price}
          type="button"
          onClick={() => setSelectedPrice(price)}
          className={selectedPrice === price ? styles.buttonActive : styles.button}
        >
          {price}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
