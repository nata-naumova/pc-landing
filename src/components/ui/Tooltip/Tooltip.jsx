import { useState } from "react";
import styles from "./Tooltip.module.css";

const Tooltip = ({ title, text, top, left, right, bottom, height }) => {
  const [isVisible, setVisible] = useState(false);

  const positionTooltip = {
    position: "absolute",
    top: top ? top + "%" : "auto",
    right: right ? right + "%" : "auto",
    bottom: bottom ? bottom + "%" : "auto",
    left: left ? left + "%" : "auto",
  };

  return (
    <div className={styles.box} style={positionTooltip}>
      <div
        className={styles.container}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <button type="button" className={styles.button}></button>
        {isVisible && (
          <span
            className={styles.line}
            style={{
              height: height ? height + "px" : "auto",
            }}
          ></span>
        )}
        {isVisible && (
          <div
            className={styles.content}
            style={{
              position: "absolute",
              top: height ? `calc(-100% - ${height}px)` : "auto",
              left: "20px",
            }}
          >
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
