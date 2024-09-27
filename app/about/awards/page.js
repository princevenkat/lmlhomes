'use client'
import styles from '@/app/about/awards/awards.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import excellence from '@/public/assets/icons/excellence.png'
import award1 from '@/public/assets/images/award1.png'
import award2 from '@/public/assets/images/award2.png'
import award3 from '@/public/assets/images/award3.png'
import award4 from '@/public/assets/images/award4.png'
import credai from '@/public/assets/images/credai.png'
import etExcellence from '@/public/assets/images/et-excellence.png'
import sulekha from '@/public/assets/images/sulekha.png'
import siliconindia from '@/public/assets/images/siliconindia.png'
import Testimonial from '@/components/Testimonial'
import Promise from '@/components/Promise'
import FollowYourJourney from '@/components/FollowYourJourney'
import { PageWrapper } from '@/components/PageWrapper';


export default function Awards() {
    return (
        <PageWrapper>
        <section>

            <div className={styles.hero}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h3 className='beba'>Awards and recognition</h3>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={styles.section1}>

                <Container>
                    <Row className='pt-4'>

                        {/* <Col lg={6}>
                            <div className={styles.awardsCntr}>
                                <div className={styles.awardsImgCntr}>
                                    <Image src={award1} alt='Awards' />
                                </div>

                                <div className={styles.awardsTxtCntr}>
                                    <div>
                                        <Image src={excellence} alt='Awards' className={styles.excellenceImg} />
                                    </div>

                                    <div>
                                        <Image src={credai} alt='Awards' className={styles.brandImg} />
                                        <p>Confederation of Real Estate Developers’ Associations of India (CREDAI), presented a membership certificate to LML. A CREDAI Certificate is imperative to commence a business in real estate. The CREDAI Board sets down the guidelines followed by member builders and developers.</p>
                                    </div>
                                </div>

                            </div>
                        </Col> */}

                        <Col lg={6}>
                            <div className={styles.awardsCntr}>
                                <div className={styles.awardsImgCntr}>
                                    <Image src={award2} alt='Awards' />
                                </div>

                                <div className={styles.awardsTxtCntr}>
                                    <div>
                                        <Image src={excellence} alt='Awards' className={styles.excellenceImg} />
                                    </div>

                                    <div>
                                        <Image src={sulekha} alt='Awards' className={styles.brandImg} />
                                        <p>Sulekha Properties presented LML Homes with the Best Value for Money Project Award for LML Sugam, Perumbakkam. This award was granted based on the feedbacks, ratings, and reviews of Sulekha Property users.</p>
                                    </div>
                                </div>

                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className={styles.awardsCntr}>
                                <div className={styles.awardsImgCntr}>
                                    <Image src={award3} alt='Awards' />
                                </div>

                                <div className={styles.awardsTxtCntr}>
                                    <div>
                                        <Image src={excellence} alt='Awards' className={styles.excellenceImg} />
                                    </div>

                                    <div>
                                        <Image src={siliconindia} alt='Awards' className={styles.brandImg} />
                                        <p>LML Prakriti Tambaram was bestowed the Most Promising Residential Projects in Chennai by Silicon India Magazine at Real Estate Awards - 2021, acknowledging the contribution of LML Prakriti in establishing new benchmarks in the field of Indian Real Estate.</p>
                                    </div>
                                </div>

                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className={styles.awardsCntr}>
                                <div className={styles.awardsImgCntr}>
                                    <Image src={award4} alt='Awards' />
                                </div>

                                <div className={styles.awardsTxtCntr}>
                                    <div>
                                        <Image src={excellence} alt='Awards' className={styles.excellenceImg} />
                                    </div>

                                    <div>
                                        <Image src={etExcellence} alt='Awards' className={styles.brandImg} />
                                        <p>ET Excellence, a TOI initiative, conferred LML Homes with the title of Reliable Developer Of The Year in 2021. The prestigious award is presented to companies who have achieved excellence in their field of business.</p>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>




            <Testimonial />
            <Promise />
            <FollowYourJourney />
        </section>
        </PageWrapper>
    )
}
