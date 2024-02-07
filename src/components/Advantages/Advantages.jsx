import { advantagesList } from "../../constants";
import styles from "./Advantages.module.css";

const Advantages = () => {
  return (
    <section className="section">
      <h2 className={`section__title ${styles.title}`}>НАШИ ПРЕИМУЩЕСТВА</h2>
      <ul className={styles.list}>
        {advantagesList &&
          advantagesList.map((item, index) => (
            <li className={styles.item} key={index}>
              <div className={styles.iconbox}>
                <img src={item.icon} alt="icon" className={styles.icon} />
              </div>
              <h3 className={styles.name}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Advantages;
