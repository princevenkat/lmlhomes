'use client'
import React, { useState, useRef, useEffect } from 'react'
import styles from '@/app/partners/channel-partners/channelPartners.module.css'
import Testimonial from '@/components/Testimonial'
import Promise from '@/components/Promise'
import BlogsGrid from '@/components/BlogsGrid'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PageWrapper } from '@/components/PageWrapper'
import ChannelPartnerSeo from '../ChannelPartnerSeo'

export default function channelPartners() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [address, setAddress] = useState('')


    //form-sheet-integration
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzxX9ePasPAt0NEOcS3JFFO32iIbfkJqua38vWn5R8TDLyQ3rzct3t4k-KgEqUAS_Pd/exec"
    const [loading, setLoading] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        setName('')
        setEmail('')
        setNumber('')
        setCompanyName('')
        setAddress('')

        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(formRef.current),

        }).then(res => {
            alert("SUCCESSFULLY SUBMITTED")
            setLoading(false)
        })
            .catch(err => console.log(err))
    }

    return (
        <>
            <PageWrapper>
                <ChannelPartnerSeo />
                <section className={styles.hero}></section>

                <section className={styles.firstSection}>
                    <Container>
                        <Row>
                            <h2 className={styles.h2 + ' beba'}>Channel Partners</h2>
                            <h3>Channel Partner Details(to be filled and submit)</h3>
                        </Row>

                        <Row>
                            <Col lg={5} md={5}>

                                <div className={styles.formContainer}>
                                    <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                                        <div className={'mb-3 ' + styles.inputDiv}>
                                            <input
                                                type='text'
                                                placeholder='Your Name'
                                                name='Name'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className={'mb-3 ' + styles.inputDiv}>
                                            <input
                                                type='text'
                                                placeholder='Your Company Name'
                                                name='Company_Name'
                                                value={companyName}
                                                required
                                                onChange={(e) => setCompanyName(e.target.value)}
                                            />
                                        </div>
                                        <div className={'mb-3 ' + styles.inputDiv}>
                                            <input
                                                type='email'
                                                placeholder='Your Email'
                                                name='Email'
                                                value={email}
                                                required
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className={'mb-3 ' + styles.inputDiv}>
                                            <input
                                                type='number '
                                                placeholder='Your Contact Number'
                                                name='Number'
                                                value={number}
                                                required
                                                onChange={(e) => setNumber(e.target.value)}
                                            />
                                        </div>
                                        <div className={'mb-4 ' + styles.inputDiv}>
                                            <input
                                                type='text'
                                                placeholder='Your Address'
                                                name='Address'
                                                value={address}
                                                required
                                                onChange={(e) => setAddress(e.target.value)} />
                                        </div>

                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Read Terms and Conditions<span className='ms-2'>&#62;&#62;</span></label>
                                        </div>

                                        <p className='fw500'>I have read the terms and conditions</p>

                                        <div className={'mb-2 ' + styles.submitBtn}>
                                            <input type='submit' placeholder='Submit' value={loading ? 'submitting...' : 'submit'} />
                                        </div>

                                    </form>
                                </div>
                            </Col>
                        </Row>

                    </Container>



                </section>

                <Testimonial />
                <Promise />
                <BlogsGrid />
            </PageWrapper>
        </>
    )
}
