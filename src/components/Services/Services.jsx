import { useState } from "react";

import List from "./List";
import Buttons from "./Buttons";
import { servicesList, servicesFiltered } from "../../constants";

import styles from "./Services.module.css";

const Services = () => {
  const [selectedPrice, setSelectedPrice] = useState("Все");

  const filteredProducts = servicesList.filter((product) => {
    if (selectedPrice === "Все") return true;
    const [min, max] = selectedPrice.split("-").map(Number);
    return product.price >= min && product.price <= max;
  });

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Лучшее решение для вас</h2>
        <Buttons
          servicesFiltered={servicesFiltered}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
        <List filteredProducts={filteredProducts} />
      </div>
    </section>
  );
};

export default Services;
