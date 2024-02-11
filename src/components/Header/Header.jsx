import { useLayoutEffect, useRef } from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.css";

const Header = () => {
  const stickyHeader = useRef();
  useLayoutEffect(() => {
    const mainHeader = document.getElementById("mainHeader");
    let fixedTop = stickyHeader.current.offsetTop;
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        mainHeader.classList.add("fixedTop");
      } else {
        mainHeader.classList.remove("fixedTop");
      }
    };
    window.addEventListener("scroll", fixedHeader);
  }, []);

  return (
    <header ref={stickyHeader} id="mainHeader" className={styles.header}>
      <div className={`container ${styles.container}`}>
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
        <nav className={styles.nav}>
          <ul className={styles.list}>          
            <li className={styles.item}>
              <Link
                activeClass={styles.linkActive}
                className={styles.link}
                to="services"
                spy={true}
                smooth={true}
                offset={-220}
                duration={500}
              >
                Услуги
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                activeClass={styles.linkActive}
                className={styles.link}
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-550}
                duration={500}
              >
                Отзывы
              </Link>
            </li>
          </ul>
          <div className={styles.buttonBox}>
            <a href="#" className={styles.button}>
              Связь с менеджером
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
