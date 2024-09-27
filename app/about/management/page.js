'use client'
import styles from '@/app/about/management/management.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Testimonial from '@/components/Testimonial'
import Promise from '@/components/Promise'
import FollowYourJourney from '@/components/FollowYourJourney'
import Image from 'next/image'
import management1 from '@/public/assets/images/management1.png'
import management2 from '@/public/assets/images/management2.png'
import management3 from '@/public/assets/images/management3.png'
import management4 from '@/public/assets/images/management4.png'
import management5 from '@/public/assets/images/management5.jpg'
import { PageWrapper } from '@/components/PageWrapper';

export default function Management() {
    return (
        <PageWrapper>
            <section>

                <div className={styles.hero}>
                    <Container>
                        <Row>
                            <Col lg={12} md={12}>
                                <h3 className='beba'>Management</h3>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className={styles.section1}>
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <h3 className='beba'>Inventive moves inspiring management</h3>
                                <p>Taking the tradition forward, Mr. Suresh Kothari is assisted by his sons Mr. Mahesh Kothari,  Mr. Surender Kothari, Mr. Pradeep Kothari who oversees the entire operations. The management team promises to strive to develop the most desired realty brand & ensure happy residents for today and forever.</p>                            <p>To achieve this goal, the team follows the best industry practices, excellent management systems and the latest in building technology. It aims to offer innovative and world-class realty solutions to all its occupants.</p>
                            </Col>

                            <Col lg={11}>

                                <Row>
                                    <Col lg={12} sm={12}>
                                        <div className={styles.managementCntr}>
                                            <Col lg={3} sm={12}>
                                                <Image src={management5} alt='management' />
                                            </Col>

                                            <Col lg={9} sm={12}>
                                                <div className={styles.managementTxtCntr}>
                                                    <p>A highly knowledgeable, resourceful and proactive team of architects, engineers, interior designers, project managers and support staff are the strength behind each successful LML project. Our established presence in the real estate development sector for 30 years is thanks to the support of this customer-loving, enthusiastic and solid team. LML is led by our Chairman, the finance and real estate doyen, Mr. Suresh Kothari ably backed by his sons Mr. Mahesh Kothari, Mr. Surender Kothari and Mr. Pradeep Kothari, each one an authority in the real estate development sector. Together, these greats have made LML a household name for home buyers across Chennai city.</p>
                                                </div>
                                            </Col>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={12} sm={12}>
                                        <div className={styles.managementCntr}>
                                            <Col lg={3} sm={12}>
                                                <Image src={management1} alt='management' />
                                            </Col>

                                            <Col lg={9} sm={12}>
                                                <div className={styles.managementTxtCntr}>
                                                    <h3>Mr. Suresh Kothari</h3>
                                                    <span>CHAIRMAN, LML HOMES</span>
                                                    <p>Mr. Suresh Kothari, the founder of LML Homes is an authority in Finance. It is his experience in finance management and expertise in strategic planning that are the inherent strengths of the LML Homes. The determination and decisions of Mr. Suresh Kothari drive positivity. Standing as the pillars of support for Mr. Suresh Kothari to scale up LML Homes to great heights are his sons Mr. Mahesh Kothari, Mr. Surender Kothari and Mr. Pradeep Kothari.</p>
                                                </div>
                                            </Col>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={12} sm={12}>
                                        <div className={styles.managementCntr}>
                                            <Col lg={3} sm={12}>
                                                <Image src={management2} alt='management' />
                                            </Col>

                                            <Col lg={9} sm={12}>
                                                <div className={styles.managementTxtCntr}>
                                                    <h3>Mr. Mahesh Kothari</h3>
                                                    <span>MANAGING DIRECTOR, LML HOMES</span>
                                                    <p>Mr. Mahesh Kothari is the Managing Director of LML Homes. He is exclusively in charge of the day to day functioning of the company. His stewardship at the helm of the management has resulted in the timely completion of every project of LML Homes. He is always committed to raise the standards of quality, pursues uncompromising business ethics and transparency in all spheres of business. It is this commitment from the top management that inspires everyone at LML Homes to scale up and deliver the best.</p>
                                                </div>
                                            </Col>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={12} sm={12}>
                                        <div className={styles.managementCntr}>
                                            <Col lg={3} sm={12}>
                                                <Image src={management3} alt='management' />
                                            </Col>

                                            <Col lg={9} sm={12}>
                                                <div className={styles.managementTxtCntr}>
                                                    <h3>Mr. Surender Kothari</h3>
                                                    <span>EXECUTIVE DIRECTOR, LML HOMES</span>
                                                    <p>Mr. Surender Kothari, the Executive Director of Finance of LML Homes, he is associated with all financial decisions of the company. In charge of the Accounting Department Mr. Surender oversee the day-to-day site operations of the company including materials purchase, man management and schedule planning. A graduate in Business Administration he has rich experience in business management. His shrewd planning and budgeting ensure seamless flow of work to successfully complete the projects on time.</p>
                                                </div>
                                            </Col>
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={12} sm={12}>
                                        <div className={styles.managementCntr}>
                                            <Col lg={3}>
                                                <Image src={management4} alt='management' />
                                            </Col>

                                            <Col lg={9}>
                                                <div className={styles.managementTxtCntr}>
                                                    <h3>Mr. Pradeep Kothari</h3>
                                                    <span>EXECUTIVE DIRECTOR, LML HOMES</span>
                                                    <p>Mr. Pradeep Kothari, the Executive Director of LML Homes, is a post graduate in Business Administration with specialisation in Marketing & Finance. Mr. Pradeep Kumar who also holds a Diploma in Interior Designs works closely with the company architects in designing the interiors of the lifestyle homes of LML Homes. He also lends his experience in business administration of the company and constructively contributes to the development of LML Homes as a progressive and growth focused company.</p>
                                                </div>
                                            </Col>
                                        </div>
                                    </Col>
                                </Row>

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
