import React, { useEffect, useState } from "react";
import styles from "./amenities.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { usePathname } from "next/navigation";

export default function Amenities({ projectDetailPages }) {
  const pathname = usePathname();

  const [currPathname, setCurrentPathname] = useState("");

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [currPathname]);

  return (
    <section>
      <div className={styles.amenities_content}>
        <div className={styles.amenities_title}>
          {currPathname == "/prakriti"
            ? "25+ Amenities"
            : currPathname === "/league-one"
            ? "40+ Amenities / Facilities"
            : "10+ Amenities"}
        </div>
        <div className={styles.amenities_desc}>
          <p>{projectDetailPages?.amenities?.description}</p>
          <div className={styles.navigators}>
            <div className={`prev ${styles.navigators_link}`}>
              <img src={`/assets/icons/ArrowLeftDark.svg`} />
            </div>
            <div className={`next ${styles.navigators_link}`}>
              <img src={`/assets/icons/ArrowRightDark.svg`} />
            </div>
          </div>
        </div>

        <div className={"amenities_slider"}>
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2000 }}
            pagination={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            {projectDetailPages?.amenities?.amenityList?.map((amenities, index) => (
              <SwiperSlide key={index}>
                <div className={styles.amenities_box}>
                  <img src={`${amenities?.image}`} />
                  <div className={styles.overlay_layer}></div>
                  <div className={styles.overlay_content}>{amenities?.label}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.mob_navigators}>
          <div className={`prev ${styles.navigators_link}`}>
            <img src={`/assets/icons/ArrowLeftDark.svg`} />
          </div>
          <div className={`next ${styles.navigators_link}`}>
            <img src={`/assets/icons/ArrowRightDark.svg`} />
          </div>
        </div>
      </div>
    </section>
  );
}
