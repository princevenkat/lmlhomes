import React, { useState } from "react";
import sideImage from "@/public/assets/images/gallery.png";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./styles.module.css";

const Gallery = ({ projectDetailPages }) => {
  const [activeTab, setActiveTab] = useState(0);

  const [show, setShow] = useState(false);

  const handleModal = () => setShow(!show);

  return (
    <Container className={"pt-5 " + styles.galleryAftrImg}>
      <div className="row">
        <div className="col-12 col-md-10">

          <div className="col-12 col-md-9">
            <p className={styles.galleryHeading}>Gallery</p>
            {/* <p className={styles.heading}>
              {projectDetailPages?.gallery?.heading}
            </p> */}
            <p className={styles.description}>
              {projectDetailPages?.gallery?.subHeading}
            </p>
          </div>

          <div className={`d-flex overflow-auto ${styles.borderBottom}`}>
            {projectDetailPages?.gallery?.list.map((data, index) => {
              return (
                <p
                  className={
                    activeTab === index ? styles.activeTab : styles.tab
                  }
                  onClick={() => {
                    setActiveTab(index);
                  }}
                >
                  {data?.name}
                </p>
              );
            })}
          </div>


          <div className="projectPageGallery">
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={1}
            >

              {projectDetailPages?.gallery?.list[activeTab]?.images?.map((item) => {
                return (
                  <SwiperSlide>
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
                )
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
      </div>

      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {projectDetailPages?.gallery?.list[activeTab]?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Swiper
            modules={[Pagination, Navigation]}
            Navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {projectDetailPages?.gallery?.list[activeTab]?.images?.map(
              (data) => {
                return (
                  <SwiperSlide>
                    <div className="position-relative">
                      <img
                        src={`/assets/${data.image}`}
                        className={`${styles.imageStyle} cursor-pointer`}
                        alt="Floor plans"
                      />
                      {/* <div className={styles.labelContainer}>
                        <p className={styles.galleryLabelSm}>{data?.label}</p>
                      </div> */}
                    </div>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </Modal.Body>
      </Modal>
    </Container >
  );
};

export default Gallery;
