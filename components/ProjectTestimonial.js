import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { usePathname } from "next/navigation";

export default function ProjectTestimonial({ projectDetailPages }) {
  const pathname = usePathname();

  // useEffect(() => {
  //     if (typeof window !== 'undefined') {
  //         const imgElement = document.createElement('img')
  //         imgElement.src = '/assets/icons/arrowRightGreen.png'
  //         imgElement.alt = 'Arrow Right'
  //         const divElement = document.querySelector('.swiper-button-next')
  //         divElement.appendChild(imgElement)

  //         const imgElement2 = document.createElement('img')
  //         imgElement2.src = '/assets/icons/arrowLeftGreen.png'
  //         imgElement2.alt = 'Arrow Left'
  //         const divElement2 = document.querySelector('.swiper-button-prev')
  //         divElement2.appendChild(imgElement2)
  //     }
  // }, [])

  return (
    <div className="testimonailSection">
      <Container>
        <Row>
          <Col lg={5}>
            <h3>Hear from our extended family.</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={11}>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={10}
              slidesPerView={4}
              autoplay={{
                delay: 2500,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                720: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {projectDetailPages?.testimonial.map((item) => {
                return (
                  <SwiperSlide key={item.name}>
                    <div className="testimonialBox projectTestimonial" key={item.name}>
                      {pathname === "/league-one" ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/s5L1p_4k6s0?si=wc3IPZKGf5ZctQrM`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <p>{item.description}</p>
                      )}

                      <div className="testimonialTxtCntr">
                        <div>
                          <h6>{item.name}</h6>
                          <h5>{item.location}</h5>
                          <h4>
                            <span className="fw600">Property</span> - {item.property}
                          </h4>
                        </div>

                        <div>
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <div className="swiper-button-next">
                <img src="/assets/icons/arrowRightGreen.png" alt="Arrow Right" />
              </div>
              <div className="swiper-button-prev">
                <img src="/assets/icons/arrowLeftGreen.png" alt="Arrow Left" />
              </div>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
