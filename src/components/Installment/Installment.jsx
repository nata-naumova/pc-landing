import styles from "./Installment.module.css";

const Installment = () => {
  return (
    <section className={styles.box}>
      <div className={styles.banner}>
        <img src="https://i.ytimg.com/vi/U-RvzuAPrTg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgZShlMA8=&rs=AOn4CLD8aybyrwwJI8z8uY0uDGxr4l_zBw" alt="Карта" />
      </div>
      <div className={styles.content}>
        <h2 className={`section__title ${styles.title}`}>РАССРОЧКА</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.number}>1.</span>
            <span className={styles.text}>
              Оставьте заявку у нашего менеджера, указав вид оплаты “рассрочка”.
            </span>
          </li>
          <li className={styles.item}>
            <span className={styles.number}>2.</span>
            <span className={styles.text}>
              Получите ссылку на оформление рассрочки.
            </span>
          </li>
          <li className={styles.item}>
            <span className={styles.number}>3.</span>
            <span className={styles.text}>Получите одобрение.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Installment;
