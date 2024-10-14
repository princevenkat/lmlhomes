'use client'
import React, { useState, useEffect, useRef } from 'react'
import styles from '@/app/contact/contact.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PageWrapper } from '@/components/PageWrapper';
import ConatctSeo from './ContactSeo'

export default function Contact() {



    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [availability, setAvailability] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')


    //form-sheet-integration
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyf9trl8fGL4xnEQUen1KtOYTBw-xhJXJdSUqHmwIDCsRspVij5uTWgUCqAk3sDOV8/exec"
    const [loading, setLoading] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        setName('')
        setEmail('')
        setNumber('')
        setAvailability('')
        setMessage('')

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
                <ConatctSeo />
                <section className={styles.section1}>
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <h3>Contact Us</h3>

                                <form className={styles.form} ref={formRef} onSubmit={handleSubmit} name="google-sheet">

                                    <div className={styles.inputCntr}>
                                        <div className={styles.inputDiv}>
                                            <p>NAME*</p>
                                            <input
                                                placeholder='Name'
                                                type='text'
                                                name='Name'
                                                required
                                                value={name}
                                                onChange={event => setName(event.target.value)}
                                            />
                                        </div>

                                        <div className={styles.inputDiv}>
                                            <p>EMAIL*</p>
                                            <input
                                                placeholder='Email address'
                                                type='email'
                                                name='Email'
                                                required
                                                value={email}
                                                onChange={event => setEmail(event.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.inputCntr}>
                                        <div className={styles.inputDiv}>
                                            <p>PHONE NUMBER*</p>
                                            <input
                                                placeholder='Phone Number'
                                                type='number'
                                                name='Number'
                                                value={number}
                                                onChange={event => setNumber(event.target.value)} />
                                        </div>
                                        <div className={styles.inputDiv}>
                                            <p>AVAILABILITY</p>
                                            <input
                                                placeholder='Know us when you are available'
                                                type='text'
                                                required
                                                name='Availability'
                                                value={availability}
                                                onChange={event => setAvailability(event.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.inputDiv}>
                                        <p>MESSAGE</p>
                                        <input
                                            placeholder='Tell us a little bit about your inquiry'
                                            className={styles.msgInput}
                                            required
                                            name='Message'
                                            value={message}
                                            onChange={event => setMessage(event.target.value)} />
                                    </div>
<p> I authorise LML Homes LLP & its representatives to contact me with updates and notifications via Email / SMS /WhatsApp / Call. This will override DND/NDNC. I accept the <a href='https://www.lmlhomes.in/privacy-policy' target='_blank'>privacy policy</a></p>
                                    <div className={styles.submitBtn}>
                                        <input type='submit' placeholder='SUBMIT' value={loading ? " Loading..." : " Submit "} />
                                    </div>

                                </form>

                            </Col>
                            <Col lg={6}>
                                <div className={styles.addressCntr}>
                                    <h3>ADDRESS</h3>

                                    <div className={styles.addressDiv}>
                                        <div className={styles.contacTxtDiv + ' ' + styles.contactDiv1}>
                                                <p><b>Head Office: </b> </p>
                                                <p>17, VAIKUNDA VAITHYAR STREET, SOWCARPET, Chennai, Tamil
Nadu, 600079</p>
                                                 
                                                <p><b>Corporate Office: </b> </p>
                                                <p>No.271 (Old No. 182) Mc Nichols Road,
                                                Poonamalle High Road, Kilpauk,
                                                Chennai - 600 010.
                                            </p>
                                        </div>

                                        {/* <div className={styles.contacTxtDiv + ' ' + styles.contactDiv2}>
                                        <p>Phone No:</p>
                                        <a href='tel:04442083999'>044 420 83 999</a>
                                    </div> */}

                                        <div className={styles.contacTxtDiv + ' ' + styles.contacTxtDivMbl}>
                                            <p>Mobile No:</p>
                                            <a href='tel:+918760088999'>+918760088999</a>
                                        </div>
                                    </div>


                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83019.9497920594!2d80.17990102486779!3d13.024965110086422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f57014ac71d%3A0x9a6533f063543f6a!2sLML%20Homes!5e0!3m2!1sen!2sin!4v1690536625262!5m2!1sen!2sin"
                                        loading="lazy"
                                        allowFullScreen="no-referrer-when-downgrade"
                                    />

                                </div>
                            </Col>
                        </Row>
                    </Container >
                </section >

            </PageWrapper >
        </>
    )
}
