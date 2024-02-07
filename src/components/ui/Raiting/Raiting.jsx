import styles from "./Raiting.module.css";

const Raiting = ({ count }) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<i key={i}>★</i>);
  }
  return <div className={styles.star}>{stars}</div>;
};

export default Raiting;
