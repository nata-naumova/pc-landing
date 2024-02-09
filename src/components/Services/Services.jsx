import { useState } from "react";

import List from "./List";
import FilterServices from "../FilterServices/FilterServices";
import { servicesList } from "../../constants";

import styles from "./Services.module.css";

const Services = () => {
  const [filtered, setFiltered] = useState(servicesList);

  // получаем массив значений price
  const prices = filtered.map((product) => product.price);
  // находим минимальное значение
  const minPrice = Math.min(...prices);
  // находим максимальное значение
  const maxPrice = Math.max(...prices);

  const filteredByPrice = ({ from, to }) => {
    setFiltered(
      servicesList.filter((p) => {
        return p.price >= from && p.price <= to;
      })
    );
  };

  return (
    <section className="section">
      <div className={styles.container}>
        <h2 className={`section__title ${styles.title}`}>
          Лучшее решение для вас
        </h2>
        <div className={styles.box}>
          <button
            key="Все"
            type="button"
            onClick={() => setSelectedPrice("Все")}
            className={styles.button}
          >
            Все
          </button>

          <FilterServices
            filtered={filteredByPrice}
            min={minPrice}
            max={maxPrice}
          />
        </div>
        <List filteredProducts={filtered} />
      </div>
    </section>
  );
};

export default Services;
