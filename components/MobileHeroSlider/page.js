import React, { useEffect, useState } from "react";
import $ from "jquery";
import Image from "next/image";
import styles from "@/components/HeroSlider/page.module.css";
import { homeSlider } from "@/data/homeSlider";
import HomeBannerForm from '@/components/HomeBannerForm'

const HeroSlider = () => {
  useEffect(() => {
    let sliderElement = null;
    let thumbnailSliderElement = null;

    import("slick-carousel").then((slick) => {
      if (typeof window !== "undefined") {
        sliderElement = $("#slider");
        thumbnailSliderElement = $("#thumbnail_slider");

        sliderElement.slick({
          autoplay: false,
          arrows: false,
          dots: false,
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: true,
          vertical: true,
          asNavFor: "#thumbnail_slider",
          cssEase: "ease",
          initialSlide: 0,
          swipeToSlide: false,
          touchMove: true,
          touchThreshold: 5,
          useCSS: true,
          useTransform: true,
          variableWidth: false,
        });

        thumbnailSliderElement.slick({
          autoplay: false,
          arrows: false,
          dots: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: "#slider",
          centerMode: false,
          centerPadding: "60px",
          cssEase: "linear",
          vertical: false,
          verticalSwiping: false,
          swipeToSlide: true,
          focusOnSelect: true,
        });

        thumbnailSliderElement.on("wheel", function (e) {
          if (e.originalEvent.deltaX !== 0) {
            e.preventDefault();
            if (e.originalEvent.deltaX >= 10) {
              $(this).slick("slickPrev");
            }
            if (e.originalEvent.deltaX <= -10) {
              $(this).slick("slickNext");
            }
          }
        });
      }
    });

    // Cleanup function
    return () => {
      if (sliderElement && typeof sliderElement.slick === "function") {
        sliderElement.slick("unslick");
      }
      if (
        thumbnailSliderElement &&
        typeof thumbnailSliderElement.slick === "function"
      ) {
        thumbnailSliderElement.slick("unslick");
      }
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }
  function handleClose() {
    setIsActive(false);
  }

  return (
    <section className={styles.hero} id="">

      <div id="slider" className="test">
        {homeSlider.map((item) => {
          return (
            <div className={styles.contentContainer} key={item.title}>
              <Image src={item.imageSrc} width={1920} height={1080} loading="eager" alt={item.title} />
              <div className={styles.BannerContentHolder}>
                <div className={styles.BannerContent1}>
                    <h1 className="text-white">
                    Yes! We have nature in the
                    middle of our namma Chennai
                    </h1>
                  <hr />
                  <p className="mb-0">
                    <span className="fw600">Actual Location</span> -{" "}
                    {item.location}
                  </p>
                  <p className="mb-4">{item.price}</p>
                  <a href={item.slug} className="btn text-white">
                    Explore Project
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.thumbnailSlider}>
        <div id="thumbnail_slider">
          <div className="sliderDiv">
            <h1>LML Iconia</h1>
            <p>Location - Kattupakkam</p>
          </div>
          <div className="sliderDiv">
            <h1>LML Prakriti</h1>
            <p>Location - Tambaram</p>
          </div>
          <div className="sliderDiv">
            <h1>LML Arshiya</h1>
            <p>Location - Kattupakkam</p>
          </div>
          <div className="sliderDiv">
            <h1>LML Skyliving</h1>
            <p>Location - Tambaram</p>
          </div>
        </div>

      </div>

      {/* <div className={styles.HomeBannerForm}>
          {isActive ? <HomeBannerForm closeForm={handleClose} /> : <button className={styles.enquire + ` btn`} onClick={handleClick} >Enquire</button>}
        </div> */}

    </section>
  );
};

export default HeroSlider;
