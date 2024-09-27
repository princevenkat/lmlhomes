import React from 'react'
import styles from './styles.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
// import door from '@/public/assets/images/specifications/door.jpg'

export default function Specifications({ projectDetailPages }) {

    console.log(projectDetailPages?.specifications, 'Project');
    return (
        <section className={styles.SpecificationsSection}>
            <Container>

                <h1>Specifications</h1>
                <Row className='py-3'>

                    {projectDetailPages?.specifications.map((item) => {
                        return (
                            <Col lg={3} md={4} sm={12}>
                                <div class={styles.flipcard}>
                                    <div class={styles.flipcardinner}>

                                        <div class={styles.flipcardfront}>
                                            <img src={`/assets/images/specifications/${item.image}`} alt='specification Image' />
                                            <h3 className="text-center">{item.name}</h3>
                                        </div>

                                        <div class={styles.flipcardback}>
                                            <ul class={styles.liststyle}>
                                                {item?.specifications.map((point) => {

                                                    return (
                                                        <>
                                                            {point.pointOne ? <li>{point.pointOne}</li> : ''}
                                                            {point.pointTwo ? <li>{point.pointTwo}</li> : ''}
                                                            {point.pointThree ? <li>{point.pointThree}</li> : ''}
                                                        </>
                                                    )
                                                })}
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>

            </Container>
        </section>
    )
}
