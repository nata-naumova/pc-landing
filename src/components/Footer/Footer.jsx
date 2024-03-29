import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.box}`}>
        <div className={styles.logotype}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 22h10" />
              <path d="M2 17V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 10.5l2 2l4-4"
              />
            </g>
          </svg>
        </div>
        <div className={styles.info}>
          <p>с 10:00 - 22:00 пн-пт</p>
          <p>г. Москва</p>
        </div>
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            Политика конфиденциальности
          </a>
          <a href="#" className={styles.link}>
            Договор оферта
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
