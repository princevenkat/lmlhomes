'use client'
import React, { useState, useRef, useEffect } from 'react'
import styles from '@/app/partners/joint-ventures/jointVentures.module.css'
import Image from 'next/image'
import Testimonial from '@/components/Testimonial'
import Promise from '@/components/Promise'
import BlogsGrid from '@/components/BlogsGrid'
import jointVentures1 from '@/public/assets/icons/jointventures-1.png'
import jointVentures2 from '@/public/assets/icons/jointventures-2.png'
import jointVentures3 from '@/public/assets/icons/jointventures-3.png'
import jointVenturesBnr from '@/public/assets/images/joint-ventures-banner2.png'
import jointVenturesBnr2 from '@/public/assets/images/joint-ventures-banner3.jpg'
import SanthanamClient from '@/public/assets/images/SanthanamClient.png'
import MeeraClient from '@/public/assets/images/MeeraClient.jpg'
import LathaClient from '@/public/assets/images/LathaClient.jpg'
import RaveendarClient from '@/public/assets/images/RaveendarClient.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PageWrapper } from '@/components/PageWrapper'
// import JointSlider from '@/components/JointSlider'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import JointVentureSeo from '../JointVentureSeo'

export default function JointVentures() {

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



  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [propertyLocation, setPropertyLocation] = useState('')


  //form-sheet-integration
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbxy1TEl_N35cztpHdYQIP4skt8tqkfAxTXIqOeMEbFO4E74SHq-WKhWvgJFJ2xOColrzA/exec"
  const [loading, setLoading] = useState(false)



  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setName('')
    setEmail('')
    setNumber('')
    setPropertyLocation('')

    fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

    }).then(res => {
      alert("SUCCESSFULLY SUBMITTED")
      setLoading(false)
    })
      .catch(err => console.log(err))
  }


  return (
    <>
      <PageWrapper>
        <JointVentureSeo />
        <section className={styles.hero}>
          <Container>
            <Row>
              <h2 className={styles.h2 + ' beba'}>Joint Ventures</h2>
            </Row>
          </Container>
        </section>

        <section className={styles.firstSection}>
          <Container>
            <Row>
              <Col lg={6} md={6}>
                <h3 className={'beba ' + styles.heading1}>
                  A trusted and reliable partner building profitable joint
                  ventures
                </h3>
                <p>
                  Joint Venture in real estate is a lucrative business opportunity
                  for land and property owners to create value-appreciating assets
                  and pass it on to the next generation. It is the reason why
                  choosing the ideal partner is the most important criteria in a
                  joint venture. We at LML Homes are one of the preferred building
                  partners for Property Joint Ventures in Chennai. We’ve more than
                  a decade of experience and history that stands as a testimonial
                  to our excellence in building value-appreciating properties and
                  cementing the trust of our joint venture partners.
                </p>

                <div className={styles.jointIcoRow}>
                  <div className={styles.jointIconBox}>
                    <Image src={jointVentures1} alt='' />
                    <p className='{styles.IconBoxPara'>Super Quality Homes and on time delivery</p>
                  </div>

                  <div className={styles.jointIconBox}>
                    <Image src={jointVentures2} alt='' />
                    <p className='{styles.IconBoxPara'>Completed 40+ projects</p>
                  </div>

                  <div className={styles.jointIconBox}>
                    <Image src={jointVentures3} alt='' />
                    <p className='{styles.IconBoxPara'>Choice of Apartments</p>
                  </div>
                </div>

                <div className={styles.listSection}>
                  <h3 className={'beba ' + styles.heading2}>
                    Why LML homes is an ideal venture partner
                  </h3>
                  <ul>
                    <li>
                      A reputed and trusted builder with over decades of experience in
                      building quality homes.
                    </li>
                    <li>Transparent and ethical business practices.</li>
                    <li>
                      Quality construction aided by latest construction
                      technologies.
                    </li>
                    <li>Timely delivery of projects.</li>
                    <li>
                      A full-fledged constructing company with seamless flow of
                      man, materials and finance.
                    </li>
                    <li>Completed 40+ Projects.</li>
                  </ul>
                </div>
              </Col>
              <Col lg={6} md={6}>
                <h3 className={styles.formHeading}>For Out Right/ Joint Venture get in touch with our team</h3>
                <div className={styles.formContainer}>

                  <form ref={formRef} onSubmit={handleSubmit} name="google-sheet" >
                    <div className={'mb-3 ' + styles.inputDiv}>
                      <input type='text'
                        placeholder='Your Name'
                        name='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className={'mb-3 ' + styles.inputDiv}>
                      <input type='email'
                        placeholder='Your Email'
                        name='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className={'mb-3 ' + styles.inputDiv}>
                      <input
                        type='number'
                        placeholder='Your Contact Number'
                        name='Number'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className={'mb-4 ' + styles.inputDiv}>
                      <input type='text'
                        placeholder='Property location'
                        name='Property_location'
                        value={propertyLocation}
                        onChange={(e) => setPropertyLocation(e.target.value)}
                        required
                      />
                    </div>

                    <div className='mb-3 form-check'>
                      <input
                        type='checkbox'
                        className='form-check-input'
                        id='exampleCheck1'
                      />
                      <label className='form-check-label' htmlFor='exampleCheck1'>
                        Read Terms and Conditions <span className='ms-2'>&#62;&#62;</span>
                      </label>
                    </div>

                    <p className='fw500'>I have read the terms and conditions</p>

                    <div className={'mb-2 ' + styles.submitBtn}>
                      <input type='submit' placeholder='Submit' value={loading ? " Loading..." : " Submit "} />
                    </div>
                  </form>

                </div>
              </Col>
            </Row>
          </Container>
        </section>


        <section className={styles.section3 + ' jointVentureSlider'}>
          <Container>
            <Row className='align-items-center'>
              <Col lg={6}>

                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation
                  slidesPerView={1}
                  autoplay={{
                    delay: 2500,
                  }}
                >

                  <SwiperSlide>
                    <div>
                      <h3 className='beba'>What Joint Venture Partner Says</h3>
                      <Image
                        src={SanthanamClient}
                        alt=''
                        className={styles.ventureClientImg}
                      />

                      <h4>
                        Mr. T.r. Santhanam, Chartered Accountatnt Consulatant,
                        Verdance Consulting and investing co
                      </h4>

                      <p className='txtGrey'>LML Saroja, Thiruvanmiyur</p>

                      <p>
                        We absolutely love our home at LML Sugam in perumbakkam. The
                        uniqueness of architecture, use of smart technology for speedy
                        construction, the way space is equally functional and so eye
                        pleasing are just some of the amazing differences that makes
                        LML Homes what is is today-a builder of quality livin spaces.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div>
                      <h3 className='beba'>What Joint Venture Partner Says</h3>
                      <Image
                        src={MeeraClient}
                        alt=''
                        className={styles.ventureClientImg}
                      />

                      <h4>Mrs Meera Ramanathan,Former Lecturer - American Literature Loyola College
                      </h4>

                      <p className='txtGrey'>LML Sugam - Perumbakkam, OMR</p>

                      <p>
                        LML SUGAM, our joint venture development of 64 lifestyle apartments at Perumbakkam in one acre with built up area of 60,000 sq. ft., stands as a testimony to LML HOMES excellence in construction Starting from soil tests to obtaining government approvals. Sourcing quality materials to building as per specifications without deviation Timely completion to handing over, LML HOMES commitment impressed us immensely. A through brod professionals, LML HOMES payments to us were prompt and their accounting systems are extremely accurate. We would strongly recommend LML HOMES as an ideal Joint Venture Partner.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div>
                      <h3 className='beba'>What Joint Venture Partner Says</h3>
                      <Image
                        src={LathaClient}
                        alt=''
                        className={styles.ventureClientImg}
                      />

                      <h4>
                        Mrs Latha Madhu, QA Analyst Measurements In, NC USA
                      </h4>

                      <p className='txtGrey'>LML Shantha, Thoraipakkam</p>

                      <p>
                        LML SHANTHA is our joint venture project at Thoraipakkam with LML HOMES. A home enchanting lifestyle apartments, this development is a symbol of LML HOMES' commitment to uphold business ethics. The team headed by Mr. Mahesh Kothari MD of LML HOMES collaborated with honesty and transparency, and worked closely with our legal team to draw up the terms of the Joint Venture. The team ensured seamless flow of funds, materials and manpower which was vital for the timely completion of the project. It is my privileges to recommend LML HOMES for joint ventures. They are truly an ideal partner in progress.
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div>
                      <h3 className='beba'>What Joint Venture Partner Says</h3>
                      <Image
                        src={RaveendarClient}
                        alt=''
                        className={styles.ventureClientImg}
                      />

                      <h4>
                        V Raveendar, Director, V.Raveendar & Associates Chennai
                      </h4>

                      <p className='txtGrey'>Jaimadhav Pallikarnai</p>

                      <p>
                        When I wanted to transform my property into a value appreciating asset, my first choice was Mahesh Kothari. I had entrusted him with a JV Project of 45000 Sq.ft Today it is stands as Jaimadhav, a masterpiece in concrete comprising of 34 lifestyle apartments at Pallikaranai The credit goes to Mr. Mahesh Kothari and his team for completing this value appreciating asset in 18 months. Inspiring elevation, aesthetic design space efficient plan and flawless finish stand as the testimony to Mr. Mahesh Kothari's commitment to quality construction I sincerely wish Mr. Mahesh Kothari and his team more success in the world of property development.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Col>
              <Col lg={6}>
                <div className={styles.VenturesBnrCntr}>
                  <Image src={jointVenturesBnr2} alt='' />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Testimonial />
        <Promise />
        <BlogsGrid />
      </PageWrapper>
    </>
  )
}
