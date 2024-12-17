import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image'
import styles from '@/components/CompletedProjects/style.module.css'
import { projectData } from '@/utils/projectData'
import { IoLocationSharp } from 'react-icons/io5';
import bannerDesk from '@/public/assets/images/banners/completed-projects-desktop.png'
import bannerMob from '@/public/assets/images/banners/completed-projects-mob.png'

 



export default function CompletedProjects() {

  const [projectsData, setProjectsData] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState();


  const [completedData, setCompletedData] = useState([]);

  useEffect(() => {
    setCompletedData(projectData?.completedProjects)
    setProjectsData(projectData?.completedProjects)
    setSelectedPlace(projectData?.completedProjects)
  }, [completedData]);


  console.log(selectedPlace?.locationInfo, 'selectedPlace');
  console.log(projectsData[0]?.locationInfo, 'projectsData');



  return (
    <>
      <Row>
        <Col lg={12}>
          <Image src={bannerDesk} alt="" className="img-fluid deskOnly" />
          <Image src={bannerMob} alt="" className="img-fluid mobOnly py-4" />
        </Col>
      </Row>


      <Row className={"py-5 " + styles.mobRowPdng}>

        {completedData.map((item) => {
          return (

            <Col lg={4} className={styles.projectBox} key={item.name}>

              <div className={styles.projectImage}>

                {/* <div className={styles.cardOverlay} /> */}

                <img src={item.image} />
              </div>

              <div className={styles.projectCol}>
                <div className={styles.projectContent}>
                  <h3>{item.name}</h3>
                </div>

                <div className={styles.projectLocation}>
                  <IoLocationSharp /> <p style={{ textTransform: 'uppercase' }}>{item.location}</p>
                </div>
              </div>

            </Col>

          )
        })}

      </Row>
    </>
  )
}
