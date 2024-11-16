'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '@/app/page.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import Image from 'next/image'
import homeAbtBnr from '@/public/assets/images/home-about-banner.png'
import ProjectArrow from '@/public/assets/images/green-icon.png'
import homeIcon from '@/public/assets/icons/home.png'
import locationIcon from '@/public/assets/icons/location.png'
import Testimonial from '@/components/Testimonial'
import Promise from '@/components/Promise'
import BlogsGrid from '@/components/BlogsGrid'
import FollowYourJourney from '@/components/FollowYourJourney'
import { motion } from 'framer-motion'
// import HeroSlider from '@/components/HeroSlider/page'
import HeroSliderNew from '@/components/HeroSliderNew/page'
import ArrowAnimate from '@/components/ArrowAnimate'
import ArrowAnimateDown from '@/components/ArrowAnimateDown'
import { PageWrapper } from '@/components/PageWrapper'
import MobileHeroSlider from '@/components/MobileHeroSlider/page'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import HomeSeo from './HomeSeo'
import Script from 'next/script'
export default function Home() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const imgElement = document.createElement('img')
      imgElement.src = '/assets/icons/arrowRightGreen.png'
      imgElement.alt = 'Arrow Right'
      const divElement = document.querySelector('.swiper-button-next')
      divElement.appendChild(imgElement)

      const imgElement2 = document.createElement('img')
      imgElement2.src = '/assets/icons/arrowLeftGreen.png'
      imgElement2.alt = 'Arrow Left'
      const divElement2 = document.querySelector('.swiper-button-prev')
      divElement2.appendChild(imgElement2)
    }
  }, [])





  return (
    <PageWrapper>
      
      <HomeSeo />
      <section className={styles.homeSection}>
        {/* <HeroSlider /> */}
        <HeroSliderNew />

        <div className={styles.home2}>

          <aside className={styles.aside}>
            <div className={styles.aside_title}>OVERVIEW</div>
          </aside>

          <Container className='position-relative'>
            <Row className='align-items-center mobReverseCol'>
              <Col lg={4}>
                <Image
                  src={homeAbtBnr}
                  alt='Lml Banner'
                  className={styles.homeAbtBnr}
                />
              </Col>
              <Col lg={6}>
                <div className={styles.ps5}>
                  <h3>About LML Homes</h3>
                  <p>
                    We welcome to your new life at the home you always dreamt on.
                    LML Homes balances simplicity and opulence across all its
                    spaces by creating environments that appeals to the senses,
                    imagination and lifestyle of our customers across diverse
                    segments. We hand-pick the best locations in Chennai to create
                    beautiful homes with great values for our buyers.</p>
                  <p>We take
                    great pride in our superior quality homes crafted and
                    architected to perfection that will last for generations in
                    build quality and style. We believe, healthy living begins
                    with a happy & healthy home; which is why our projects
                    integrate open spaces, provisions for natural lighting &
                    engineered wind channels to help keep healthy energy flowing
                    into your home.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>

        </div>

        <div className='runningTxtSection'>
          <div className='runningTxt'>
            <div className="runningTxtContent">
              CMDA Approved | RERA Approved | On-Time Constructions | Luxury Amenities | Vaastu Compliant | Gated Communities | Spacious 2, 3 & 4 BHK Apartments |
              CMDA Approved | RERA Approved | On-Time Constructions | Luxury Amenities | Vaastu Compliant | Gated Communities | Spacious 2, 3 & 4 BHK Apartments |
              CMDA Approved | RERA Approved | On-Time Constructions | Luxury Amenities | Vaastu Compliant | Gated Communities | Spacious 2, 3 & 4 BHK Apartments |
              CMDA Approved | RERA Approved | On-Time Constructions | Luxury Amenities | Vaastu Compliant | Gated Communities | Spacious 2, 3 & 4 BHK Apartments |
              CMDA Approved | RERA Approved | On-Time Constructions | Luxury Amenities | Vaastu Compliant | Gated Communities | Spacious 2, 3 & 4 BHK Apartments |
            </div>

          </div>
        </div>

        <div className={styles.home3}>
          <Container>

            <Row>
              <Col lg={4}>
                <h3 className='mb-0 pb-0 '>Featured Projects</h3>
                <p style={{ color: '#999', fontSize: '12px', marginTop: '5px', marginBottom: '2 rem' }}>Building Homes over decades</p>
              </Col>
            </Row>

            <Row className='pb-3'>
              <Col lg={4}>
                <p style={{ fontSize: '1rem' }}>
                  The construction of LML homes is an endeavor that spans generations, with each passing decade
                  bringing forth new innovations, materials, and designs. LML Homes has consistently
                  evolved with the times, crafting homes that reflect the changing needs and aspirations
                  of homeowners. From their beginnings in classic luxury homes to their current focus on
                  sustainability and community living, LML Homes has demonstrated a commitment to
                  excellence that spans decades.
                </p>
              </Col>

              <Col lg={4}></Col>

              <Col lg={4}>
                <div className='d-flex align-items-center position-relative'>
                  <p className='fw600'>
                    OUR <br />
                    ON-GOING
                    <br />
                    PROJECTS
                  </p>

                  <Link href='#prjctCarouselRow'>
                    <Image
                      src={ProjectArrow}
                      alt=''
                      className={styles.ProjectArrowImg}
                    />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className='prjctCarouselContainer'>
            <Row className='py-3' id='prjctCarouselRow'>

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                spaceBetween={30}
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
                    slidesPerView: 3,
                  },
                }}
              >

                <SwiperSlide>
                  <a href='/league-one'>
                    <div className={`${styles.projectCarouselContainer} projectCarouselContainer`}>
                      <div className='projectCarouselImg leagueone'>
                        <h2>LML The League One</h2>

                        <div className='d-flex align-items-center projectCarouseTxtCtr'>
                          <Image src={locationIcon} alt='' className='' />
                          <p className='fw600'>Location -</p>
                          <p>Kattupakkam</p>
                        </div>

                        <div className='d-flex align-items-center projectCarouseTxtCtr'>
                          <Image src={homeIcon} alt='' className='' />
                          <p className='fw600'>2 & 3 BHK </p>
                        </div>

                        <ArrowAnimate />

                      </div>

                      <div className='Prjctaccordion'>
                        <h3>Project Highlights</h3>
                        <p>Premium, Spacious 2 & 3 BHK Apartments for sale in Kattupakkam.</p>

                        <div className='position-relative'>

                          <ul>
                            <li>
                              {' '}
                              <span>Project Name :</span> LML The League One
                            </li>
                            <li>
                              {' '}
                              <span>Approval :</span> CMDA & RERA
                            </li>
                            <li>
                              {' '}
                              <span>Structure :</span> Stilt + 5 Floors
                            </li>
                            <li>
                              {' '}
                              <span>Saleable Area :</span>  993 sq.ft - 1426 sq.ft
                            </li>
                            <li>
                              {' '}
                              <span>Total Units :</span> 125 Units
                            </li>
                            <li>
                              {' '}
                              <span>Possession :</span> Under Construction.
                            </li>
                          </ul>

                          <ArrowAnimateDown />


                        </div>

                      </div>

                      <Link href='/league-one' aria-label="Explore League One Property">
                        <div className={styles.explorePrptyBtn}>
                          EXPLORE PROPERTY
                          <HiOutlineArrowLongRight />
                        </div>
                      </Link>

                    </div>
                  </a>
                </SwiperSlide>
                
                <SwiperSlide>
                  <a href='/prakriti'>
                    <div className={`${styles.projectCarouselContainer} projectCarouselContainer`}>
                      <div className='projectCarouselImg prakriti'>
                        <h2>LML PRakriti</h2>

                        <div className='d-flex align-items-center projectCarouseTxtCtr'>
                          <Image src={locationIcon} alt='' className='' />
                          <p className='fw600'>Location -</p>
                          <p>Tambaram</p>
                        </div>

                        <div className='d-flex align-items-center projectCarouseTxtCtr'>
                          <Image src={homeIcon} alt='' className='' />
                          <p className='fw600'>2 ,3 & 4 BHK </p>
                        </div>

                        <ArrowAnimate />

                      </div>

                      <div className='Prjctaccordion'>
                        <h3>Project Highlights</h3>
                        <p>Premium, Spacious 2, 3, & 4 BHK Apartments for sale in Tambaram.</p>

                        <div className='position-relative'>

                          <ul>
                            <li>
                              {' '}
                              <span>Project Name :</span> LML Prakriti
                            </li>
                            <li>
                              {' '}
                              <span>Approval :</span> CMDA & RERA
                            </li>
                            <li>
                              {' '}
                              <span>Structure :</span> Stilt + 4 Floors
                            </li>
                            <li>
                              {' '}
                              <span>Saleable Area :</span>  600 - 2019 sq. ft
                            </li>
                            <li>
                              {' '}
                              <span>Total Units :</span> 231 Units
                            </li>
                            <li>
                              {' '}
                              <span>Possession :</span> Ready to occupy.
                            </li>
                          </ul>

                          <ArrowAnimateDown />


                        </div>

                      </div>

                      <Link href='/prakriti' aria-label="Explore Prakriti Property">
                        <div className={styles.explorePrptyBtn}>
                          EXPLORE PROPERTY
                          <HiOutlineArrowLongRight />
                        </div>
                      </Link>

                    </div>
                  </a>
                </SwiperSlide>

                <SwiperSlide>
                  <a href='/arshiya'>
                    <div className={`${styles.projectCarouselContainer} projectCarouselContainer`}>
                      <div className='projectCarouselImg arshiya'>
                        <h2>LML Arshiya</h2>

                        <div className='d-flex align-items-center projectCarouseTxtCtr'>
                          <Image src={locationIcon} alt='' className='' />
                          <p className='fw600'>Location -</p>
                          <p>Kattupakkam</p>
                        </div>

                        <div className='d-flex align-items-center projectCarouseTxtCtr'>
                          <Image src={homeIcon} alt='' className='' />
                          <p className='fw600'>2 & 3 BHK </p>
                        </div>

                        <ArrowAnimate />


                      </div>

                      <div className='Prjctaccordion'>
                        <h3>Project Highlights</h3>
                        <p>Premium 2BHK & 3BHK apartments for sale in Kattupakkam.</p>
                        <div className='position-relative'>
                          <ul>
                            <li>
                              {' '}
                              <span>Project Name :</span> LML Arshiya
                            </li>
                            <li>
                              {' '}
                              <span>Approval :</span> CMDA & RERA
                            </li>
                            <li>
                              {' '}
                              <span>Structure :</span> Stilt + 5 Floors
                            </li>
                            <li>
                              {' '}
                              <span>Saleable Area :</span> 836 sqft to 1115 sqft,
                              1243 sqft - 1411 sqft
                            </li>
                            <li>
                              {' '}
                              <span>Total Units :</span> 74
                            </li>
                            <li>
                              {' '}
                              <span>Possession :</span> Nearing Completion.
                            </li>
                          </ul>
                          <ArrowAnimateDown />
                        </div>
                      </div>

                      <Link href='/arshiya'aria-label="Explore Arshiya Property">
                        <div className={styles.explorePrptyBtn}>
                          EXPLORE PROPERTY
                          <HiOutlineArrowLongRight />
                        </div>
                      </Link>
                    </div>
                  </a>
                </SwiperSlide>

                <SwiperSlide>
                  <a href='/iconia'>
                    <div className={`${styles.projectCarouselContainer} projectCarouselContainer`}>
                      <div className='projectCarouselImg iconia'>
                        <h2>LML Iconia</h2>

                        <div className='d-flex align-items-center projectCarouseTxtCtr'>
                          <Image src={locationIcon} alt='' className='' />
                          <p className='fw600'>Location -</p>
                          <p>Kattupakkam</p>
                        </div>

                        <div className='d-flex align-items-center projectCarouseTxtCtr'>
                          <Image src={homeIcon} alt='' className='' />
                          <p className='fw600'>2 BHK </p>
                        </div>

                        <ArrowAnimate />

                      </div>

                      <div className='Prjctaccordion'>
                        <h3>Project Highlights</h3>
                        <p>Premium 2BHK Luxury lifestyle apartments for sale in Kattupakkam.</p>
                        <div className='position-relative'>
                          <ul>
                            <li>
                              {' '}
                              <span>Project Name :</span> LML Iconia
                            </li>
                            <li>
                              {' '}
                              <span>Approval :</span> CMDA & RERA
                            </li>
                            <li>
                              {' '}
                              <span>Structure :</span> Stilt + 3 Floors
                            </li>
                            <li>
                              {' '}
                              <span>Saleable Area :</span> 822 - 1063 sq. ft
                            </li>
                            <li>
                              {' '}
                              <span>Total Units :</span> 82
                            </li>
                            <li>
                              {' '}
                              <span>Possession :</span> Nearing Completion.
                            </li>
                          </ul>
                          <ArrowAnimateDown />
                        </div>
                      </div>


                      <Link href='/iconia' aria-label="Explore Iconia Property">
                        <div className={styles.explorePrptyBtn}>
                          EXPLORE PROPERTY
                          <HiOutlineArrowLongRight />
                        </div>
                      </Link>
                    </div>
                  </a>

                </SwiperSlide>

              </Swiper>

            </Row>
          </Container>


        </div>

        <Testimonial />
        <Promise />
        <BlogsGrid />
        <FollowYourJourney />
      </section>
    </PageWrapper>
  )
}
