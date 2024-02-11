import SocialsList from "../Socials/SocialsList";
import Tooltip from "../ui/Tooltip/Tooltip";

import styles from "./DetailService.module.css";

const DetailService = ({ service }) => {
  return (
    <div className={styles.detail}>
      <div className={styles.img}>
        <img src="/demo.jpg" className={styles.image} alt={service.title} />
        <Tooltip
          title="Кулер"
          text="описание"
          bottom="23"
          left="6"
          height="140"
        />
        <Tooltip
          title="БП"
          text="описание"
          bottom="40"
          left="23"
          height="100"
        />
        <Tooltip
          title="SSD"
          text="описание"
          bottom="20"
          left="30"
          height="230"
        />
        <Tooltip
          title="Видеокарта"
          text="описание"
          bottom="54"
          left="39"
          height="100"
        />
        <Tooltip
          title="Процессор"
          text="описание"
          bottom="20"
          left="47"
          height="200"
        />
        <Tooltip
          title="Материнская плата"
          text="описание"
          bottom="47"
          left="55"
          height="100"
        />
        <Tooltip
          title="Оперативная память"
          text="описание"
          bottom="17"
          right="35"
          height="250"
        />
        <Tooltip
          title="Корпус"
          text="описание"
          bottom="58"
          right="25"
          height="100"
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
