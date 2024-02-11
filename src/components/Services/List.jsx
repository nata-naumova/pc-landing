import React from "react";
import { Link } from "react-router-dom";

import styles from "./Services.module.css";

const List = ({ filteredProducts }) => {
  return (
    <ul className={styles.list}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <li key={product.id} className={styles.item}>
            <div className={styles.itemTop}>
              <img src={product.img} alt={product.title} />
            </div>
            <div className={styles.content}>
              <div className={styles.top}>
                <div className={styles.wrapper}>
                  <h3 className={styles.name}>{product.title}</h3>
                  <p className={styles.desc}>В кредит или рассрочку</p>
                </div>
                <div className={styles.wrapper}>
                  <span className={styles.price}>от {product.price} ₽</span>
                  <span className={styles.price}> 4 207 ₽/мес</span>
                </div>
              </div>
              <ul className={styles.bottom}>
                <li className={styles.bottomItem}>
                  <span className={styles.bottomItemIcon}>ic</span>
                  <span className={styles.bottomItemText}>Графическая карта Geforce RTX 4060</span>
                </li>
                <li className={styles.bottomItem}>
                  <span className={styles.bottomItemIcon}>ic</span>
                  <span className={styles.bottomItemText}>Процессоры 4 и 10 ядерные Intel</span>
                </li>
                <li className={styles.bottomItem}>
                  <span className={styles.bottomItemIcon}>ic</span>
                  <span className={styles.bottomItemText}>Метеринские платы на чиспесе</span>
                </li>
                <li className={styles.bottomItem}>
                  <span className={styles.bottomItemIcon}>ic</span>
                  <span className={styles.bottomItemText}>Оперативная память от 16 до 32 GB</span>
                </li>
                <li className={styles.bottomItem}>
                  <span className={styles.bottomItemIcon}>ic</span>
                  <span className={styles.bottomItemText}>Накопители SSD на 512 GB / 1TB</span>
                </li>
              </ul>
              <Link to={`/service/${product.id}`} className={styles.buttonBuy}>
                Подробнее о модели
              </Link>
            </div>
          </li>
        ))
      ) : (
        <li className={styles.empty}>По вашему запросу ничего не найдено</li>
      )}
    </ul>
  );
};

export default List;
