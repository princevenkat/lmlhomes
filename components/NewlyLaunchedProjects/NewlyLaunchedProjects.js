import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { projectData } from "@/utils/projectData";
import Image from "next/image";
import styles from "@/components/NewlyLaunchedProjects/style.module.css";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";

export default function NewlyLaunchedProjects() {
  let newlylaunchedData = projectData?.newlylaunchedProjects;

  return (
    <Row>
      {newlylaunchedData.map((item) => {
        return (
          <Col lg={4} className={styles.projectBox} key={item.name}>
            <Link href={`/${item.slug}`}>
              <div className={styles.projectImage}>
                <div className={styles.cardOverlay}></div>

                <img src={item.image} />
              </div>

              <div className={styles.projectCol}>
                <div className={styles.projectContent}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.floor}</p>
                    <span className={item.status == "Ready to occupy" ? styles.readyToOcuupy : styles.notReady}>
                      {item.status}
                    </span>
                  </div>

                  <div>
                    <h4>{"₹" + item.price}</h4>
                    <span>onwards</span>
                  </div>
                </div>

                <div className={styles.projectLocation}>
                  <IoLocationSharp /> <p>{item.location}</p>
                </div>
              </div>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}