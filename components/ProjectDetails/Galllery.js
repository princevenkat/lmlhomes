import React, { useState } from "react";
import sideImage from "@/public/assets/images/gallery.png";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";

const Lightbox = dynamic(() => import("./Lightbox"));

const Gallery = ({ projectDetailPages }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleModal = () => setShow(!show);

  const openLightbox = (index) => {
    setIndex(index);
    setOpen(true);
  };

  function assetLink(image) {
    return `/assets/${image}`;
  }
  const slides = projectDetailPages?.gallery?.list[activeTab]?.images.map(({ image }) => ({
    src: assetLink(image),
  }));

  return (
    <Container className={"pt-5 " + styles.galleryAftrImg}>
      <div className="row">
        <div className="col-12 col-md-10">
          <div className="col-12 col-md-9">
            <p className={styles.galleryHeading}>Gallery</p>
            {/* <p className={styles.heading}>
              {projectDetailPages?.gallery?.heading}
            </p> */}
            <p className={styles.description}>{projectDetailPages?.gallery?.subHeading}</p>
          </div>

          <div className={`d-flex overflow-auto ${styles.borderBottom}`}>
            {projectDetailPages?.gallery?.list.map((data, index) => {
              return (
                <p
                  className={activeTab === index ? styles.activeTab : styles.tab}
                  onClick={() => {
                    setActiveTab(index);
                  }}
                >
                  {data?.name}
                </p>
              );
            })}
          </div>

          {/* Desktop View  */}
          <div className={styles.GalleryDesktopView}>
            <div className="projectPageGallery row gap-4">
              {projectDetailPages?.gallery?.list[activeTab]?.images?.map((item, i) => {
                return (
                  <div
                    className={`${styles.ImageItem} shadow col-md-3 p-0 position-relative`}
                    onClick={() => openLightbox(i)}
                  >
                    <img src={`/assets/${item.image}`} alt="Floor plans" className="w-100 h-100 object-fit-cover object-center" />
                    <div className={styles.ImageOverlay}></div>
                  </div>
                );
              })}
              <Lightbox open={open} index={index} close={() => setOpen(false)} slides={slides} />
            </div>
          </div>
          {/* End Desktop View  */}

          {/* Mobile View  */}
          <div className={styles.GalleryMobileView}>
            <div className="projectPageGallery">
              <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true }} navigation slidesPerView={1}>
                {projectDetailPages?.gallery?.list[activeTab]?.images?.map((item) => {
                  return (
                    <SwiperSlide className=" pb-5">
                      <div className="position-relative" key={item.image}>
                        <img
                          src={`/assets/${item.image}`}
                          onClick={handleModal}
                          className={`${styles.imageStyle} cursor-pointer`}
                          alt="Floor plans"
                        />

                        {/* <div className={styles.labelContainer}>
                        <p className={styles.galleryLabel}>
                          {projectDetailPages?.gallery?.list[activeTab]?.images[0]?.label}
                        </p>
                      </div> */}
                      </div>
                    </SwiperSlide>
                  );
                })}

                {/* <div className="swiper-button-next">
                <img src='/assets/icons/arrowRightGreen.png' alt="Arrow Right" />
              </div>
              <div className="swiper-button-prev">
                <img src='/assets/icons/arrowLeftGreen.png' alt="Arrow Left" />
              </div> */}
              </Swiper>
            </div>
          </div>
          {/* End Mobile View  */}
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
