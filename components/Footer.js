import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className='Footer'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className='footerCol1'>
                            <h6>Contact Us</h6>
                            <h5>LUCKY MERCANTILE PRIVATE LIMITED</h5>
                           <p><b>Head Office: </b> <br/>
                                                17, VAIKUNDA VAITHYAR STREET, SOWCARPET, Chennai, Tamil
Nadu, 600079</p>
                                                 
                                                <p><b>Corporate Office: </b> <br/>
                                                No.271 (Old No. 182) Mc Nichols Road,
                                                Poonamalle High Road, Kilpauk,
                                                Chennai - 600 010.
                                            </p>
                            <p className='mb-1'><FontAwesomeIcon icon={faEnvelope} />&nbsp; <a href='mailto:enquiry@lmlhomes.in'> enquiry@lmlhomes.in</a></p>
                            <p className='mb-1'><FontAwesomeIcon icon={faPhone} />&nbsp; <a href='tel:8760088999'>For Sales enquiry +91 8760088999</a></p>
                            <p className='mb-1'><FontAwesomeIcon icon={faPhone} />&nbsp; <a href='tel:8760088999'>For General enquiry 044-42083999</a></p>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='footerCol2'>
                            <h6>Quick Links</h6>
                            <a >apartments in chennai tambaram</a>
                            <a >west tambaram apartments sale</a>
                            <a >Luxury apartment in tambaram</a>
                            <a >Budgeted apartment in Tambaram</a>
                            <a >Budget flats in tambaram</a>
                            <a >New flats for sale in west tambaram</a>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='footerCol3'>
                            <a className='footerMt'>Apartments in Kattupakkam Chennai</a>
                            <a >Luxury Apartmets in Kattupakkam</a>
                            <a >budget flats in Kattupakkam</a>
                            <a >3 BHK Villas in Neelankarai Chennai</a>
                            <a >Luxury Villas in Neelankarai</a>
                            <a >budget flats in Neelankarai</a>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='footerCol4'>
                            <a className='footerMt'>3 BHK Premium Villas in Neelankarai</a>
                            <a >3 BHK Villas for sale in Neelankarai</a>
                            <a >Budgeted apartment in Tambaram</a>
                            <a >Real Estate Companies in Chennai</a>
                            <a >2 BHK Apartments for sale in Kattupakkam</a>
                        </div>
                    </Col>
                </Row>

                <Row className='footerRow2'>
                    <Col lg={10}>
                        <p className='copyRightTxt'>© Copyright 2024 - LUCKY MERCANTILE PRIVATE LIMITED  |  All rights reserved</p>

                        <p className='disclaimerTxt'> Disclaimer: All statements, pictures, models, drawings,
                            illustrations, photographs and other renderings are artistic
                            representations only and may vary in actual construction.
                            All information, plans and specifications provided in the brochure,
                            and other promotional materials would be subject to change by the
                            Builder or Architect. Floor areas and measurements given are
                            approximate only and subject to final measurements. The Builder
                            shall not be responsible for any representation made by its
                            agents or Consultants in respect of any feature or specification
                            of the building complex. The terms of duly executed Sale and construction
                            Agreement shall be final and would be binding on all parties.
                        </p>

                        <a href='https://benfy.co/' target='_blank' rel='noopener noreferrer'><h6 className='devTxt'>Developed by Benfy.</h6></a>
                    </Col>
                </Row>


                <div>
                    <a
                        className={'homeEnquireIcon'}
                        target="_blank"
                        href={`https://wa.me/+919551223333`}
                    >
                        <img src={`/assets/icons/whatsappIcon.svg`} alt='Whatsapp-icon '/>
                    </a>
                </div>

            </Container>
        </footer>
    )
}
