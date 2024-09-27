import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import blog1 from '@/public/assets/blogs/blog1.png'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import blog3 from '@/public/assets/blogs/dos-and-Donts-while-living-im-apartment.jpg'
import blog5 from '@/public/assets/blogs/keep-these-essential-things-ready-for-your-first-apartment.jpg'
import blog6 from '@/public/assets/blogs/tips-for-buying-home.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'



export default function BlogsGrid() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const arrowRightSrc = '/assets/icons/arrowRightGreen.png';
      const arrowLeftSrc = '/assets/icons/arrowLeftGreen.png';

      const addArrowImage = (className, src, alt) => {
        const divElement = document.querySelector(className);

        if (divElement) {
          const imgElement = document.createElement('img');
          imgElement.src = src;
          imgElement.alt = alt;
          divElement.appendChild(imgElement);
        }
      };

      addArrowImage('.swiper-button-next', arrowRightSrc, 'Arrow Right');
      addArrowImage('.swiper-button-prev', arrowLeftSrc, 'Arrow Left');
    }
  }, [])

  return (

    <section className='BlogsGridSection'>

      <Container>
        <Row>
          <Col lg={3}>
            <h3>Blogs</h3>
          </Col>

          <Col lg={10}>

            <Row>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                spaceBetween={30}
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
                  <Image src={blog5} alt='' />
                  <div className='BlogGridBox'>
                    <p className='mb-0'>Feb 22,2023</p>
                    <h2 className='py-2'>Keep these essential things ready for your first apartment</h2>
                    <p>Your first home is always special. For first-timers, there is a list of things to be kept in mind, and this will make things easy, and you can settle into the new home easily,..</p>
                    <a href='/blogs/keep-these-essential-things-ready-for-your-first-apartment'>READ MORE <HiOutlineArrowLongRight /></a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <Image src={blog6} alt='' />
                  <div className='BlogGridBox'>
                    <p className='mb-0'>June 14,2023</p>
                    <h2 className='py-2'>Tips for buying your dream apartment/villa</h2>
                    <p>Be it an apartment in Tambaram, a flat in Kattupakkam, or a villa in Neelankarai, do not compromise on the credibility of the builder and the amenities you are looking for...</p>
                    <a href='/blogs/tips-for-buying-your-dream-apartment-or-villa'>READ MORE <HiOutlineArrowLongRight /></a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <Image src={blog3} alt='' />
                  <div className='BlogGridBox'>
                    <p className='mb-0'>May 11,2023</p>
                    <h2 className='py-2'>The Dos and Don'ts while living in an Apartment</h2>
                    <p>Living in an apartment is fun and takes care of many worries that one would otherwise face when residing in an individual house or any other type of residential setup. While it looks quite good,..</p>
                    <a href='/blogs/dos-and-donts-while-living-in-apartment'>READ MORE <HiOutlineArrowLongRight /></a>
                  </div>
                </SwiperSlide>


                <div className="swiper-button-next">
                  <img src='/assets/icons/arrowRightGreen.png' alt="Arrow Right" />
                </div>
                <div className="swiper-button-prev">
                  <img src='/assets/icons/arrowLeftGreen.png' alt="Arrow Left" />
                </div>

              </Swiper>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
