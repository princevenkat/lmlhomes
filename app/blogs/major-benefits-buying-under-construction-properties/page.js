'use client'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Testimonial from '@/components/Testimonial'
import Promise from '@/components/Promise'
import FollowYourJourney from '@/components/FollowYourJourney'

export default function Blog() {
  return (
    <section>
      <div className='blogImgDiv undrCnstrtProp'></div>

      <div className='blogContent'>
        <Container>
          <Row>
            <Col lg={6}>
              <h3 className='beba'>Major benefits of buying under-construction properties</h3>
              <span>Sep 18,2022</span>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <p className='py-4'>For most of us, buying a home to call our own is a dream. However, when it comes to choosing the right home at the right time is not an easy one. While some opt for under-construction projects, others prefer ready-to-move-in homes. Both have their pros and cons. Here let’s see the advantages of buying an under-construction apartment.</p>

              <div className='blogContentBox'>
                <h4>Cost factor:</h4>
                <p>The cost of a property is one of the major factors for an apartment buyer. An under-construction property will cost you less than a completed project. Though it may involve a waiting period, the wait is worth it as you get several options to look for. Make sure that you buy your apartment from a reputed builder like LML, which has many types of apartments with different sizes to choose from. These days with the presence of RERA, the buyer is safe and protected. When you buy an apartment under construction, the price is often low, which means your investment grows by the time the project is complete as the appreciation goes up.</p>
              </div>

              <div className='blogContentBox'>
                <h4>Price increase:</h4>
                <p>From buying an apartment under construction to its completion, you can observe that the price of the units goes up. You can expect the appreciation to be higher as you’re buying your apartment at a lower cost. But ensure that you book your apartment in fast-growing localities with good infrastructure. The presence of employment hubs and educational institutions can increase the appreciation of your property.</p>
              </div>

              <div className='blogContentBox'>
                <h4>Flexible payments:</h4>
                <p>When you purchase a completed apartment, you have to pay the entire money in one go. Additionally, there is the cost of property registration, which runs into some lakh of rupees. But when you buy an under-construction apartment, your initial investment will be some 10-15 percent of the total cost. The rest you can pay in installments based on the stage of the construction.</p>
              </div>

              <div className='blogContentBox'>
                <h4>Brand new construction:</h4>
                <p>An under-construction apartment means you own a brand new unit. You can keep away the worries of repairs and such things when it is a new apartment. Also, developers incorporate the latest features in the under-construction property, an added advantage.</p>
              </div>

              <div className='blogContentBox'>
                <h4>Attractive discounts:</h4>
                <p>Real estate developers do not extend any discounts for the ready-to-move-in property. You will pay as per the market rate depending on the amenities. But if you are buying an under-construction apartment, developers often give attractive discounts and offers. From cash discounts to home appliances and interiors, there are many discounts you can get for under-construction properties. You can spot a variety of schemes and plans on under-construction apartments.</p>
              </div>

              <p>Homebuyers used to select ready-to-move properties than under-construction apartments mainly to avoid possession delays. With the arrival of RERA, homebuyers can now choose an under-construction apartment as long as it has a RERA number and the project is by a reputed developer.</p>

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
