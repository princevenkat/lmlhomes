import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { projectData } from '@/utils/projectData'
import Image from 'next/image'
import styles from '@/components/OngoingProjects/style.module.css'
import { IoLocationSharp } from 'react-icons/io5';
import { useRouter } from 'next/navigation';



export default function OngoingProjects() {
    const router = useRouter();

    const handleNavigate = (slug) => {
        router.push(`/${slug}`);
    };

    let ongoingData = projectData?.onGoingProjects
    // console.log(ongoingData, '...');




    return (
        <Row>
            {ongoingData.map((item) => {
                return (
                    <Col lg={4} className={styles.projectBox} key={item.name} onClick={() => handleNavigate(item.slug)}>

                        <div className={styles.projectImage}>

                            <div className={styles.cardOverlay}>
                            </div>

                            <img src={item.image} />
                        </div>

                        <div className={styles.projectCol}>
                            <div className={styles.projectContent}>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.floor}</p>
                                    <span className={item.status == 'Ready to occupy' ? styles.readyToOcuupy : styles.notReady}>{item.status}</span>
                                </div>

                                <div>
                                    <h4>{'₹' + item.price}</h4>
                                    <span>onwards</span>
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
