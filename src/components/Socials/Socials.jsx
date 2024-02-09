import SocialsList from "./SocialsList";
import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <section className={`section ${styles.section}`}>
      <h2 className={`section__title ${styles.title}`}>Мы в соц сетях</h2>

      <SocialsList />
    </section>
  );
};

export default Socials;
