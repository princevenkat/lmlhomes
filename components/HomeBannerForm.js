import React, { useState, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styles from '@/app/page.module.css'

export default function HomeBannerForm({ closeForm }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    //form-sheet-integration
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbx2TS9Orc4sJQ78N0uhlJ8UY9QKLRt_0jAEa7W6uJndK1rEM1Y4thCTlN0WNl4osbRw/exec"
    const [loading, setLoading] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        setName('')
        setEmail('')
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
        <section className={styles.homeEnquiryFormSection}>
            <Container>
                <Row>


                    <div className={styles.homeEnquiryDiv}>

                        <div className={styles.formCloseBtn} onClick={closeForm}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <p>Please fill out the form below and we
                            will get back to you as soon as possible.
                        </p>
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                        <input type='text' className={styles.formInput} placeholder='* Name' required value={name} onChange={(e) => setName(e.target.value)} name='Name' />
                        <input type='text' className={styles.formInput} placeholder='* Email' required value={email} onChange={(e) => setEmail(e.target.value)} name='Email' />
                        <input type='text' className={styles.formInput + ' pb-5'} placeholder='* Message' required value={message} onChange={(e) => setMessage(e.target.value)} name='Message'/>

                        <div className={styles.submitBtnCntr}>
                            <input type='submit' className={styles.submitBtn} value={loading ? 'submitting' : 'submit'} />
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                                <g clipPath="url(#clip0_581_3821)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.58764 10.7753L0.046382 18.4763C-0.032711 18.6073 -0.0129378 18.7632 0.0925197 18.8754C0.197977 18.9876 0.356163 19.0251 0.507758 18.9689L24.7696 9.82124C24.9146 9.76512 25.0002 9.64041 25.0002 9.49699C25.0002 9.35357 24.908 9.22886 24.7696 9.17274L0.507758 0.0250512C0.356163 -0.0310696 0.197977 0.00634429 0.0925197 0.118586C-0.0129378 0.230827 -0.032711 0.386718 0.046382 0.517667L4.58764 8.21868L16.0759 9.37228C16.1616 9.37851 16.2275 9.43463 16.2275 9.49699C16.2275 9.55935 16.1616 9.61547 16.0759 9.6217L4.58764 10.7753Z" fill="#282828" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_581_3821">
                                        <rect width="25" height="19" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                    </form>
                </Row>
            </Container>
        </section>
    )
}
