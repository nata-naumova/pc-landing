import { testimonialsList } from "../../constants";
import Raiting from "../ui/Raiting/Raiting";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className="section">
      <h2 className={`section__title ${styles.title}`}>НАШИ КЕЙСЫ</h2>
      <ul className={styles.list}>
        {testimonialsList &&
          testimonialsList.map((item, index) => (
            <li className={styles.item} key={index}>
              <img
                src={item.image}
                alt={item.author}
                className={styles.image}
              />
              <div className={styles.box}>
                <div className={styles.top}>
                  <h3 className={styles.author}>{item.author}</h3>
                  <Raiting count={item.rating} />
                </div>
                <p className={styles.text}>{item.text}</p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Testimonials;
