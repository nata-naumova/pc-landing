import SocialsList from "../Socials/SocialsList";
import Tooltip from "../ui/Tooltip/Tooltip";

import styles from "./DetailService.module.css";

const DetailService = ({ service }) => {
  return (
    <div>
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
        <div className={`${styles.content} ${styles.info}`}>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.desc}>{service.desc}</p>
          <div className={styles.prices}>
            <span className={styles.price}>от {service.price} ₽</span>
            <button className={styles.button}>Связь с менеджером</button>
          </div>

          <div className={styles.socials}>
            <SocialsList />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.name}>Характеристики:</h2>
        <ul className={styles.list}>
          <li>Чипсет</li>
          <li>{service.chipset}</li>
          <li>Блок питания</li>
          <li>{service.powerSupply}</li>
          <li>Корпус</li>
          <li>{service.case}</li>
          <li>Материнская плата</li>
          <li>{service.motherboard}</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailService;
