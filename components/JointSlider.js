import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '@/app/partners/joint-ventures/jointVentures.module.css'
import jointVenturesBnr from '@/public/assets/images/joint-ventures-banner2.png'

const JointSlider = () => {

  // const swiperPrev = document.querySelector('.swiper-button-prev')
  // console.log(swiperPrev);
  // const [imagesAdded, setImagesAdded] = useState(false);


  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const imgElement = document.createElement('img')
  //     imgElement.src = '/assets/icons/arrowRightGreen.png'
  //     imgElement.alt = 'Arrow Right'
  //     const divElement = document.querySelector('.swiper-button-next')
  //     divElement.appendChild(imgElement)

  //     const imgElement2 = document.createElement('img')
  //     imgElement2.src = '/assets/icons/arrowLeftGreen.png'
  //     imgElement2.alt = 'Arrow Left'
  //     const divElement2 = document.querySelector('.swiper-button-prev')
  //     divElement2.appendChild(imgElement2)
  //   }
  // }, [])

  return (
    <>
      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        navigation
        slidesPerView={1}
      >
        <SwiperSlide>
          <Row>
            <Col lg={4}>
              <div className='jointVentureSliderDiv'>
                <div>
                  <h2 className={styles.h2 + ' beba pb-1'}>Projects</h2>
                  <p>
                    At LML Prakriti, every day offers a new opportunity to
                    immerse yourself in an extravagant lifestyle.
                  </p>
                </div>

                <div>
                  <h3 className='beba'>LML PRAKRITI?</h3>
                  <p>
                    Naturally set in an enchanting destination and
                    advantageously located at just 2 kms to the Tambaram Railway
                    Station and the Tambaram Main Bus Terminus. Travelling to
                    different parts of the city from Prakriti gets easier and
                    faster thanks to the double connectivity by rail and by road
                    too.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={8}>
              <div className={styles.carouselImgContainer}>
                <Image src={jointVenturesBnr} alt='joint-Ventures' />
              </div>
            </Col>
          </Row>
        </SwiperSlide>

        <SwiperSlide>
          <Row>
            <Col lg={4}>
              <div className='jointVentureSliderDiv'>
                <div>
                  <h2 className={styles.h2 + ' beba pb-1'}>Projects</h2>
                  <p>
                    At LML Prakriti, every day offers a new opportunity to
                    immerse yourself in an extravagant lifestyle.
                  </p>
                </div>

                <div>
                  <h3 className='beba'>Why LML PRAKRITI?</h3>
                  <p>
                    Naturally set in an enchanting destination and
                    advantageously located at just 2 kms to the Tambaram Railway
                    Station and the Tambaram Main Bus Terminus. Travelling to
                    different parts of the city from Prakriti gets easier and
                    faster thanks to the double connectivity by rail and by road
                    too.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={8}>
              <div className={styles.carouselImgContainer}>
                <Image src={jointVenturesBnr} alt='joint-Ventures' />
              </div>
            </Col>
          </Row>
        </SwiperSlide>

        <SwiperSlide>
          <Row>
            <Col lg={4}>
              <div className='jointVentureSliderDiv'>
                <div>
                  <h2 className={styles.h2 + ' beba pb-1'}>Projects</h2>
                  <p>
                    At LML Prakriti, every day offers a new opportunity to
                    immerse yourself in an extravagant lifestyle.
                  </p>
                </div>

                <div>
                  <h3 className='beba'>Why LML PRAKRITI?</h3>
                  <p>
                    Naturally set in an enchanting destination and
                    advantageously located at just 2 kms to the Tambaram Railway
                    Station and the Tambaram Main Bus Terminus. Travelling to
                    different parts of the city from Prakriti gets easier and
                    faster thanks to the double connectivity by rail and by road
                    too.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={8}>
              <div className={styles.carouselImgContainer}>
                <Image src={jointVenturesBnr} alt='joint-Ventures' />
              </div>
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default JointSlider
