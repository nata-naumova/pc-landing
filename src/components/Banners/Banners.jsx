import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Banners.module.css";
import { bannersList } from "../../constants";

const Banners = () => {
  return (
    <div className={styles.banners}>
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.slider}
      >
        {bannersList.map((banner, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <a href={banner.link} className={styles.link}>
              <img className={styles.img} src={banner.img} alt={banner.name} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banners;
