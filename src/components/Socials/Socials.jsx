import { socialList } from "../../constants";
import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <section className="section">
      <h2 className={`section__title ${styles.title}`}>Мы в соц сетях</h2>
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

export default Socials;
