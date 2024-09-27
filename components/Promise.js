import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import excellenceImg from '@/public/assets/icons/excellence.png'
import credai from '@/public/assets/images/credai.png'
import etExcellence from '@/public/assets/images/et-excellence.png'
import siliconindia from '@/public/assets/images/siliconindia.png'
import sulekha from '@/public/assets/images/sulekha.png'
import Link from 'next/link'

export default function Promise() {
    return (
        <section className='PromiseSection'>

            <aside className='awards aside'>
                <div className='asideTitle'>AWARDS</div>
            </aside>

            <Container>
                <Row>
                    <Col lg={8} xs={12}>
                        <h1>The promise of excellence.</h1>
                        <p>At LML Homes, we believe every home holds the promise of a new beginning.
                            A beginning of a new life filled with exciting possibilities.
                            We also take pride in the fact that almost all of our projects have been delivered on schedule,
                            leading to our tagline – Promises Made. Promises Kept.
                        </p>
                        <Link href='/about/awards'><button>Honours and Awards</button></Link>
                    </Col>

                    <Col lg={10} xs={12}>
                        <Row className='mobOverFlwHidden'>
                            {/* <Col lg={3} sm={6} xs={6}>
                                <div className='d-flex flex-column align-items-center'>
                                    <Image src={excellenceImg} alt='excellenceImg' className='excelenceIco' />
                                    <div className='excellenceBox'>
                                        <Image src={credai} alt='credai' />
                                        <p className='OrangeLine'>Confederation of Real Estate Developers’ Associations of India (CREDAI)</p>
                                    </div>
                                </div>
                            </Col> */}

                            <Col lg={3} sm={6} xs={6}>
                                <div className='d-flex flex-column align-items-center'>
                                    <Image src={excellenceImg} alt='excellenceImg' className='excelenceIco' />
                                    <div className='excellenceBox'>
                                        <Image src={sulekha} alt='sulekha' />
                                        <p className='OrangeLine'>Best Value for Money Project Award</p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} sm={6} xs={6}>
                                <div className='d-flex flex-column align-items-center'>
                                    <Image src={excellenceImg} alt='excellenceImg' className='excelenceIco' />
                                    <div className='excellenceBox'>
                                        <Image src={siliconindia} alt='siliconindia' />
                                        <p className='OrangeLine'>Most Promising Residential Projects in Chennai</p>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={3} sm={6} xs={6}>
                                <div className='d-flex flex-column align-items-center'>
                                    <Image src={excellenceImg} alt='excellenceImg' className='excelenceIco' />
                                    <div className='excellenceBox'>
                                        <Image src={etExcellence} alt='excellence' />
                                        <p>Reliable Developer Of The Year in 2021.</p>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>

            </Container >
        </section >
    )
}
