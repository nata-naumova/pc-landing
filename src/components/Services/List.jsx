import React from "react";
import styles from "./Services.module.css";

const List = ({ filteredProducts }) => {
  return (
    <ul className={styles.list}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <li key={product.id} className={styles.item}>
            <div className={styles.itemTop}>
              <img src="card-img.png" alt={product.title} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.name}>{product.title}</h3>
              <span className={styles.price}>{product.price} RUB</span>
              <p className={styles.desc}>В кредит или рассрочку</p>
              <button className={styles.buttonBuy}>Купить</button>
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
