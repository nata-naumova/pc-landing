import styles from "./DetailService.module.css";
import SocialsList from "../Socials/SocialsList";

const DetailService = ({ service }) => {
  console.log(service.img)
  return (
    <div className={styles.detail}>
      <div className={styles.img}>
        <img
          src={service.img}
          alt={service.title}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.name}>{service.title}</h1>
        <p className={styles.desc}>{service.desc}</p>
        <h2 className={styles.name}>Характеристики:</h2>
        <ul>
          <li>Чипсет: {service.chipset}</li>
          <li>Блок питания: {service.powerSupply}</li>
          <li>Корпус: {service.case}</li>
          <li>Материнская плата: {service.motherboard}</li>
        </ul>
        <div className={styles.prices}>
          <span className={styles.price}>{service.price} рублей</span>
          <button className={styles.button}>Узнать подробности</button>
        </div>
        <h2 className={styles.name}>Наши соц сети:</h2>
        <SocialsList />
      </div>
    </div>
  );
};

export default DetailService;
