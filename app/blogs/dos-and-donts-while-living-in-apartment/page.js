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
            <div className='blogImgDiv dosAndDonts'></div>

            <div className='blogContent'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h3 className='beba'>The Dos and Don'ts while living in an apartment</h3>
                            <span>Nov 18,2023</span>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <p className='py-4'>Living in an apartment is fun and takes care of many worries that one would otherwise face when residing in an individual house or any other type of residential setup. While it looks quite good, let us quickly understand the terms these come with. The perks of living in an apartment are high, but one also has to abide by the particular society's rules.</p>

                            <h3 className='beba mt-4'>POSITIVE Do's in an apartment living</h3>
                            <div className='blogContentBox'>
                                <h4>1. Safe and Secure</h4>
                                <p>With 24 hours of security service available to every resident, no one can enter without checking in at the main entrance. Many apps these days help one give their approval or reserve the same in letting visitors in. The guards are always there to ensure that society is safe for everyone. Burglars have no chance of sneaking into an apartment society with all the CCTV cameras in full action.</p>
                            </div>

                            <div className='blogContentBox'>
                                <h4>2. Privacy and Peace</h4>
                                <p>Apartment life is ideal for every type of individual. This could be the best choice for the typical private people who wish to stay at home without bothering anyone much. Limited and necessary interactions keep them going happy and also peaceful in their own space.</p>
                            </div>

                            <div className='blogContentBox'>
                                <h4>3.Socialite and Organizers</h4>
                                <p>With many events organized in the society, one also gets to make friends and take an active role in almost all the major events happening all around the year. They are solution providers and also enjoy people around. Again if you need a great social life in the apartment living style, such events open a great opportunity.</p>
                            </div>


                            <h3 className='beba mt-4'>PREVENTIVE Don'ts while residing in an apartment</h3>
                            <div className='blogContentBox'>
                                <h4>1.Waste management</h4>
                                <p>Waste management is considered a sacred ritual, and every citizen has to cooperate when the Government has laid down rules. Apartments often have a proper waste management system in place, and one has to follow the guidelines strictly. The issue is mainly for those who leave their homes early in the morning and cannot drop it on any designated area. So seeking help and the best solution would be ideal.</p>
                            </div>

                            <div className='blogContentBox'>
                                <h4>2. Pet care</h4>
                                <p>If a person or family owns a pet(s), these inmates have to be vaccinated regularly and accompanied all the time. Not everyone is a pet lover residing in society, so pet care and the safety of others are the responsibility of the pet owners. The association rules have to be followed without any excuse.</p>
                            </div>

                            <div className='blogContentBox'>
                                <h4>3. Party with mindfulness</h4>
                                <p>People love to party at home and call friends and family members to have a good time. These social meets are great and fruitful as long as it is within the walls. Loud music during late night hours is not received well. It is best to keep it sober and enjoy the moments in peace with less sound and more of an enriching experience together. People love peace and calm, so one has to respect that always.</p>
                            </div>

                            <p>Living in an apartment is a blend of openness and quietness, a wonderful experience.</p>


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
