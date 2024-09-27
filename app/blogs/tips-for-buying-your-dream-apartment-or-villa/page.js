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
            <div className='blogImgDiv tipsForByngHome'></div>

            <div className='blogContent'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <h3 className='beba'>Tips for buying your dream apartment/villa</h3>
                            <span>October 14,2023</span>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <p className='py-4'>Be it an apartment in Tambaram, a flat in Kattupakkam, or a villa in Neelankarai, do not compromise on the credibility of the builder and the amenities you are looking for.</p>

                            <div className='blogContentBox'>
                                <p>Buying a villa or an apartment is a significant decision in one's life. Apart from the financial implications involved, it should also suit his and his family's lifestyle, aspirations and kids' requirements, and parents' comfort. That's why one must buy an apartment from a reputed builder. For example, if you want to buy apartments in Tambaram, check out the builders in Tambaram, and you will see LML. When you approach a reputed builder, they will have their past work for you to review and success stories to share to know the construction quality.</p>
                            </div>

                            
                            <div className='blogContentBox'>
                                <p>A reputed builder will not try to cut corners and put a buyer in trouble. From floor plans to various approvals and amenities, you can trust a reputed builder with properties for sale in Kattupakkam than a newcomer. This is especially true when developing gated community projects like villas, flats, and 3 and 4 bhk apartments. After all, everyone looks forward to a peaceful and happy living experience in the newly purchased house, be it apartments in OMR Chennai or villas in Neelankarai.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>While choosing your dream villa near ECR, flats in Tambaram, or apartments in Kattupakkam, you should consider certain important aspects. Check the locality first. A locality near your or your spouse's workplace will work better as it will save a lot of fuel and commuting time. If both of you are in the IT domain and your offices are in and around ECR, LML Adora has 3 bhk villas. Suppose you have school-going children or are planning to start a family. In that case, reputed schools in the nearby locality will help. ATMs, banks, supermarkets, grocery stores, spas, and gyms are other considerations. The presence of hospitals nearby will help, especially if you have elderly parents. LML Iconia, gated community apartment in Kattupakkam, is near Arvind Eye hospital.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>While everyone would aspire to a luxury housing project, you should consider your buying capacity. Though housing loans are easy to get, you need to ensure that you are not borrowing more than what you can repay. While making a buying decision, consider inflation and the cost that you would have to incur in the future for children's studies and more. LML Prakriti in Tambaram has 2, 3, and 4 BHK apartments offering you apartments in Tambaram ranging from compact to luxury flats, 600 to 2019 sqft. LML Prakriti is a gated community apartment complex with over 24 amenities, including an air-conditioned gym, multipurpose hall, and a mini theatre. While gated communities offer you every amenity, monthly maintenance costs will also be involved.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>As mentioned earlier, the credibility of the builder or the promoter should not be overlooked. Check all the approvals and plans and ensure that there are no deviations. Verify the parent documents, and if you find it challenging to do it all by yourself, engage a lawyer who deals with the documentation of properties.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>While you are all set to move to your new apartment, do not forget to follow the social rules. Be it your pet or partying, ensure you are not creating any nuisance for others. Apartment complexes will have different types of residents. Unlike in a single house, gated community villas and apartments follow specific garbage segregation, collection, and disposal rules. If you are a pet parent, vaccinate your pet, and take care of others' safety while taking the pet for a stroll.</p>
                            </div>

                            <div className='blogContentBox'>
                                <p>While some look for a peaceful stay, there will be others who want to enjoy a thriving social life. Such people will be very keen to take an active part in the organized events time and again. If you love organizing things, you can join like-minded people to come up with exciting celebrations.</p>
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
