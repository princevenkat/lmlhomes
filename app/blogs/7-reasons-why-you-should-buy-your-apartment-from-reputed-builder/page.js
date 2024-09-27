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
      <div className='blogImgDiv svnRsnsForRptBldr'></div>

      <div className='blogContent'>
        <Container>
          <Row>
            <Col lg={6}>
              <h3 className='beba'>7 reasons why you should buy your apartment from a reputed builder</h3>
              <span>Oct 25,2022</span>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <p className='py-4'>Buying a house is that one big decision of your life around which a lot of things matter, mostly the financial aspect. Now when you choose to own one, it is always advisable to get connected to a reputed builder to strike the right deal. There are many choices when it comes to buying apartments in Tambaram, apartments in OMR Chennai, or villas in Neelankarai. Here we list out the reasons why you should only approach reputed builders in Tambaram or in other places.</p>

              <div className='blogContentBox'>
                <p>1.Ensure that your choice of the builder has registered the project under the Real Estate (Regulation and Development) Act that is RERA. In this case, you need not worry about any extra charges more than the actual because it would all be as per the rules laid down by the Government policies for property dealings.</p>
              </div>

              <div className='blogContentBox'>
                <p>2. You may need a home loan to fulfill the dream of owning a home. Many banks recommend the names of builders who have had very good dealings and transactions over the years. This could be a deciding factor, as the EMI will also come with favorable interest rates. Banks' references will be dependable, and home buyers can be assured of their investment.</p>
              </div>

              <div className='blogContentBox'>
                <p>3. The process of documentation work involves a lot of statutory, regulatory, and legal references, and it is seen that reputed builders like LML do involve the buyers in all the stages and take the effort to make every clause of the property very clear. A brief about the same is given during the initial rounds of talks, and then further detailed interactions actually make buyers confident about the dealings.</p>
              </div>

              <div className='blogContentBox'>
                <p>4. A list of modern facilities and amenities is customized by builders like LML Prakriti, LML Iconia, and LML Adora, keeping in mind the needs of the home buyers. Reputed builders like LML offer state-of-the-art amenities for sure over and above the basics. These are also value-added facilities that take care of the occupant's health and well-being, with a clubhouse, swimming pool, and even joggers park in certain cases.</p>
              </div>

              <div className='blogContentBox'>
                <p>5. The word construction is built on the foundation of quality in terms of all the materials used, the durability of the structure, and the overall backbone of every aspect of the building. Where promises may be high, it is best to find out about the builder based on the other projects that they have built in the city. Reputed builders have many success stories to their name.</p>
              </div>

              <div className='blogContentBox'>
                <p>6. Another important factor is the benefit that accrues over the years in terms of the value of the property. So basically, the return of investment in any property should reap you higher returns in the future. A reputed real estate expert will give you a probable idea about the rates in that particular area in case you wish to sell the property sometime in the future.</p>
              </div>

              <div className='blogContentBox'>
                <p>7. All in words and just on paper does not make a fair deal. What locks the contract is the highly efficient customer service process before, during, and after a house is acquired. Reputed builders have a name you can trust. They maintain good and long-term associations with every home buyer.</p>
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
