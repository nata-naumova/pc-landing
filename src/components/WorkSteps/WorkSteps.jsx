import styles from "./WorkSteps.module.css";

const WorkSteps = () => {
  return (
    <section className="section">
      <h2 className="section__title">ЭТАПЫ РАБОТЫ</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.number}>1</div>
          <p className={styles.text}>
            Оставьте заявку на сайте или свяжитесь с нашим менеджером.
          </p>
        </li>
        <li className={styles.item}>
          <div className={styles.number}>2</div>
          <p className={styles.text}>
            Подробно обсудим ход выполнения сборки и подберем необходимые
            комплектующие под ваш запрос.
          </p>
        </li>
        <li className={styles.item}>
          <div className={styles.number}>3</div>
          <p className={styles.text}>
            Собирем ПК вашей мечты, сделаем все необходимые тесты, бережно
            упакуем и доставим.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default WorkSteps;
