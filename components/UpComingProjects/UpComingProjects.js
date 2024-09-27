import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { projectData } from '@/utils/projectData'
import styles from '@/components/UpComingProjects/style.module.css'
import { IoLocationSharp } from 'react-icons/io5';
import Head from 'next/head'


export default function UpComingProjects() {

    const [upcomingData, setUpcomingData] = useState([]);

    useEffect(() => {
        setUpcomingData(projectData?.upcomingProjects)
    }, [upcomingData]);

    return (
        <Row>

            <Head>
                <meta charSet="utf-8" />
                <title>LML Homes - Upcoming Luxury Projects in Chennai</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Upcoming projects of LML Homes,Upcoming luxury projects in chennai,New apartment in chennai" />
                <meta name="description" content="Upcoming projects of LML Homes are LML Nirmalayam Behind Aravind Eye Hospital, 80 new apartments in Noombal - Chennai.If you want more information visit the official website or contact: 04442083999." />
                <meta name="google-site-verification" content="6W6xnO0K4ykz8tNAwpdezn0TBdb7iO7bBRLi4LVfKLQ" />
            </Head>


            {upcomingData.map((item) => {
                return (
                    <Col lg={4} className={styles.projectBox} key={item.name}>

                        <div className={styles.projectImage}>

                            {/* <div className={styles.cardOverlay}>
                        </div> */}

                            <img src={item.image} />
                        </div>

                        <div className={styles.projectCol}>
                            <div className={styles.projectContent}>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.floor}</p>
                                    <span>UPCOMING</span>
                                </div>

                                <div>
                                    {/* <h4>{'₹' + item.price}</h4> */}
                                    {/* <span>onwards</span> */}
                                </div>
                            </div>

                            <div className={styles.projectLocation}>
                                <IoLocationSharp /> <p>{item.location}</p>
                            </div>
                        </div>

                    </Col>
                )
            })}


        </Row>
    )
}
