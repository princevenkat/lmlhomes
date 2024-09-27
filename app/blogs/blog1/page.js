'use client'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Testimonial from '@/components/Testimonial'
import Promise from '@/components/Promise'
import FollowYourJourney from '@/components/FollowYourJourney'

export default function Blog1() {
  return (
    <section>
      <div className='blogImgDiv'></div>

      <div className='blogContent'>
        <Container>
          <Row>
            <Col lg={6}>
              <h3 className='beba'>7 reasons why this is the best time to buy your dream home</h3>
              <span>20 June, 2023</span>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <p className='py-4'>If there is one thing that the pandemic has taught us (apart from washing hands) is the veritable importance of owning a home. During the last one year, when the entire world was forced to stay inside, the only thing that gave respite was if the four walls of your home belonged to you! And for those people who were living on rent during the pandemic, many realised the absolute importance of buying a house and the security blanket it provided. This is so because physical assets provide the highest sense of security, especially more so during a crisis. Therefore, it is now being observed that in future, the trend of investing in tangible assets will rise as people are understanding the importance of buying a house and investing in real estate. In these uncertain times, where a home was the only safe place, people who preferred rental accommodations will now explore home buying options and would benefit from a favourable market and cheaper home loans available. In case, you are still debating whether to take the plunge, we have made a list of SEVEN reasons why it is the best time to buy the home of your dreams.</p>

              <div className='blogContentBox'>
                <h4>1. Home loan rates at an all-time low</h4>
                <p>During the last few months, the Reserve Bank of India decided to reduce the repo rate as a result of which, home loan interest rates dropped to below 7 percent, a factor that’s going to be a huge enabler for home buyers. It’s also believed that these low-interest rates will continue for now so that makes it one of the best reasons to buy a home.</p>
              </div>

              <div className='blogContentBox'>
                <h4>1. Home loan rates at an all-time low</h4>
                <p>During the last few months, the Reserve Bank of India decided to reduce the repo rate as a result of which, home loan interest rates dropped to below 7 percent, a factor that’s going to be a huge enabler for home buyers. It’s also believed that these low-interest rates will continue for now so that makes it one of the best reasons to buy a home.</p>
              </div>

              <div className='blogContentBox'>
                <h4>1. Home loan rates at an all-time low</h4>
                <p>During the last few months, the Reserve Bank of India decided to reduce the repo rate as a result of which, home loan interest rates dropped to below 7 percent, a factor that’s going to be a huge enabler for home buyers. It’s also believed that these low-interest rates will continue for now so that makes it one of the best reasons to buy a home.</p>
              </div>

            </Col>
          </Row>
        </Container>
      </div>

      <Testimonial />
      <Promise />
      <FollowYourJourney />
    </section>
  )
}
