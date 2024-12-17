'use client'
import React from 'react'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './blogs.module.css'
import blog1 from '@/public/assets/blogs/7-reasons-why-buy-your-apartment.jpg'
import blog2 from '@/public/assets/blogs/benefits-construction-properties.jpg'
import blog3 from '@/public/assets/blogs/dos-and-Donts-while-living-im-apartment.jpg'
import blog4 from '@/public/assets/blogs/importance-of-color-choosing.jpg'
import blog5 from '@/public/assets/blogs/keep-these-essential-things-ready-for-your-first-apartment.jpg'
import blog6 from '@/public/assets/blogs/tips-for-buying-home.jpg'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import Testimonial from '@/components/Testimonial'
import Promise from '@/components/Promise'
import FollowYourJourney from '@/components/FollowYourJourney'
import { PageWrapper } from '@/components/PageWrapper'
export default function Blogs() {

    return (
        <PageWrapper>
        <section className='blogsSection'>

            <div className={styles.hero}>
                <Container>
                    <h3 className='beba'>Blogs</h3>
                </Container>
            </div>


        

            <div className={styles.recentArticle}>
                <Container>
                    <h3 className='beba'>Recent articles</h3>
                    <Row>
                    <Col lg={4}>
                            <Image src={blog5} alt='' />
                            <div className='BlogGridBox'>
                                <p className='mb-0'>Sep 22,2023</p>
                                <h2 className='py-2'>Keep these essential things ready for your first apartment</h2>
                                <p>Your first home is always special. For first-timers, there is a list of things to be kept in mind, and this will make things easy, and you can settle into the new home easily,..</p>
                                <a href='/blogs/Best-Flats-for-Sale-in-Kattupakkam'>READ MORE <HiOutlineArrowLongRight /></a>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <Image src={blog5} alt='' />
                            <div className='BlogGridBox'>
                                <p className='mb-0'>Sep 22,2023</p>
                                <h2 className='py-2'>Keep these essential things ready for your first apartment</h2>
                                <p>Your first home is always special. For first-timers, there is a list of things to be kept in mind, and this will make things easy, and you can settle into the new home easily,..</p>
                                <a href='/blogs/why-is-kattupakkam-the-perfect-place-for-your-dream-home'>READ MORE <HiOutlineArrowLongRight /></a>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <Image src={blog5} alt='' />
                            <div className='BlogGridBox'>
                                <p className='mb-0'>Sep 22,2023</p>
                                <h2 className='py-2'>Keep these essential things ready for your first apartment</h2>
                                <p>Your first home is always special. For first-timers, there is a list of things to be kept in mind, and this will make things easy, and you can settle into the new home easily,..</p>
                                <a href='/blogs/keep-these-essential-things-ready-for-your-first-apartment'>READ MORE <HiOutlineArrowLongRight /></a>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <Image src={blog6} alt='' />
                            <div className='BlogGridBox'>
                                <p className='mb-0'>Oct 14,2023</p>
                                <h2 className='py-2'>Tips for buying your dream apartment/villa</h2>
                                <p>Be it an apartment in Tambaram, a flat in Kattupakkam, or a villa in Neelankarai, do not compromise on the credibility of the builder and the amenities you are looking for...</p>
                                <a href='/blogs/tips-for-buying-your-dream-apartment-or-villa'>READ MORE <HiOutlineArrowLongRight /></a>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <Image src={blog3} alt='' />
                            <div className='BlogGridBox'>
                                <p className='mb-0'>Nov 18,2023</p>
                                <h2 className='py-2'>The Dos and Don'ts while living in an Apartment</h2>
                                <p>Living in an apartment is fun and takes care of many worries that one would otherwise face when residing in an individual house or any other type of residential setup. While it looks quite good,..</p>
                                <a href='/blogs/dos-and-donts-while-living-in-apartment'>READ MORE <HiOutlineArrowLongRight /></a>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-5'>

                        <Col lg={4}>
                            <Image src={blog2} alt='' />
                            <div className='BlogGridBox'>
                                <p className='mb-0'>Sep 18,2022</p>
                                <h2 className='py-2'>Major benefits of buying under-construction properties</h2>
                                <p>For most of us, buying a home to call our own is a dream. However, when it comes to choosing the right home at the right time is not an easy one.While some opt for under-construction projects,..</p>
                                <a href='/blogs/major-benefits-buying-under-construction-properties'>READ MORE <HiOutlineArrowLongRight /></a>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <Image src={blog1} alt='' />
                            <div className='BlogGridBox'>
                                <p className='mb-0'>Oct 25,2022</p>
                                <h2 className='py-2'>7 reasons why you should buy your apartment from a reputed builder</h2>
                                <p>Buying a house is that one big decision of your life around which a lot of things matter, mostly the financial aspect. Now when you choose to own one, it is always advisable to get connected,..</p>
                                <a href='/blogs/7-reasons-why-you-should-buy-your-apartment-from-reputed-builder'>READ MORE <HiOutlineArrowLongRight /></a>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <Image src={blog4} alt='' />
                            <div className='BlogGridBox'>
                                <p className='mb-0'>Dec 18,2022</p>
                                <h2 className='py-2'>The importance of choosing the right colors for your home</h2>
                                <p>Gone are the days when we had the luxury to live in palatial independent homes. In today's open-plan homes, where kitchens, living rooms,..</p>
                                <a href='/blogs/importance-of-choosing-right-colors-for-your-home'>READ MORE <HiOutlineArrowLongRight /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div >

            <Testimonial />
            <Promise />
            <FollowYourJourney />
        </section >
        </PageWrapper>
    )
}
