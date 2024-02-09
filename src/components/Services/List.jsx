import React from "react";
import styles from "./Services.module.css";
import { Link } from "react-router-dom";

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
              <h3 className={styles.name}>{product.title}</h3>
              <span className={styles.price}>{product.price} RUB</span>
              <p className={styles.desc}>В кредит или рассрочку</p>
              <Link to={`/service/${product.id}`} className={styles.buttonBuy}>Купить</Link>
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
