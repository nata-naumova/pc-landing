import React from "react";
import { socialList } from "../../constants";
import styles from "./Socials.module.css";

const SocialsList = () => {
  return (
    <>
      <div className={styles.list}>
        {socialList &&
          socialList.map((item, index) => (
            <a href={item.link} className={styles.link} key={index}>
              <img src={item.icon} alt={item.name} className={styles.icon} />
            </a>
          ))}
      </div>
    </>
  );
};

export default SocialsList;
