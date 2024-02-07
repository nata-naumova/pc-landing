import { useEffect, useState } from "react";
import styles from "./FilterServices.module.css";

const FilterServices = ({ filtered, min, max }) => {
  const [from, setFrom] = useState(min);
  const [to, setTo] = useState(max);

  const handleChange = (e) => {
    if (e.target.name === "from") {
      setFrom(e.target.value);
    } else if (e.target.name === "to") {
      setTo(e.target.value);
    }
  };

  useEffect(() => {
    filtered({from, to});
  }, [from, to]);

  return (
    <div className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label}>от</label>
        <input
          name="from"
          type="number"
          className={styles.input}
          placeholder={from}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>до</label>
        <input
          name="to"
          type="number"
          className={styles.input}
          placeholder={to}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FilterServices;
