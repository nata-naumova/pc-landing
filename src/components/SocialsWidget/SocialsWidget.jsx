import { socialList } from "../../constants";
import styles from "./SocialsWidget.module.css";

const SocialsWidget = () => {
  return (
    <section className={styles.section}>
      <div className={styles.list}>
        {socialList &&
          socialList.map((item, index) => (
            <a href={item.link} className={styles.link} key={index}>
              <img src={item.icon} alt={item.name} className={styles.icon} />
            </a>
          ))}
      </div>
    </section>
  );
};

export default SocialsWidget;
