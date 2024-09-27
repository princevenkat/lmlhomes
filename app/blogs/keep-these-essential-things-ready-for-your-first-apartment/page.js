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
            <div className='blogImgDiv keepEsntlRdy'></div>

            <div className='blogContent'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h3 className='beba'>Keep these essential things ready for your first apartment</h3>
                            <span>Sep 22,2023</span>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <p className='py-4'>Your first home is always special. For first-timers, there is a list of things to be kept in mind, and this will make things easy, and you can settle into the new home easily and comfortably. With a lot of help from experienced people in the family and among your friends, it becomes easy to list the important things you have to keep in mind while buying your first apartment.</p>

                            <div className='blogContentBox'>
                                <p>1. Do your research about the top builders in the city where you wish to buy your first apartment. This will save you from worrying about the name's credibility or the quality of construction. Decide on the home loan amount and how much you can pay for the initial booking amount.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>2. Create a list of the things that you need for sure. It is the furniture, the kitchen essentials, utilities, and everything that is part of your everyday life. Television, washing machine, bedding, sofa set, chairs, and shoe rack are the ones to name a few in your exhaustive list.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>3.Then comes finalizing the professionals who will do the interiors as per your desire. The experts will check your budget and suggest the best possible ways to make every space in your apartment a special one. Whether it is selecting the right colors of the walls, the curtain drapes, or the carpet, the choice of furniture and everything is best-taken care of. Connect to the best who have established a good brand name.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>4.If you have a specific hobby like book reading, painting, classical dancing, or reading, you will need to decide on the exact place and keep all the necessary things around that place to align with the ambiance accordingly. Buy the basic things that will enhance the look of your hobby space.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>5.Buying a house is expensive, and the costs might cross the estimated budget. Best to plan the budget well in advance and keep sufficient money handy to purchase the things you desire to keep in your apartment. Finance planning is an important aspect while making your apartment ready properly.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>6. The bathrooms should have a very good toilet, showers, and taps, so make that selection well before the work in the bathrooms commences. This is important because clarity is essential in getting the right things in the right place in your apartment.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>7.The most constant thing needed is the positive and happy vibes in the body, mind, and soul. The essence of the apartment lies in the harmony of thoughts and the years of togetherness.When the apartment is special, you need to give all the love and essential things to complete your stay and make each day memorable and enjoyable as a family—wishing you all the best while you choose the first apartment. The rest will seem like a breeze once you keep the main things in mind.</p>
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
