"use client";
import React, { useState } from "react";
import styles from "@/app/projects/style.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OngoingProjects from "@/components/OngoingProjects/OngoingProjects";
import UpComingProjects from "@/components/UpComingProjects/UpComingProjects";
import CompletedProjects from "@/components/CompletedProjects/CompletedProjects";
import UpcomingSeo from "./UpcomingSeo";
import CompletedSeo from "./CompletedSeo";
import OngoingSeo from "./OngoingSeo";
import NewlyLaunchedSeo from "./NewlyLaunchedSeo";
import NewlyLaunchedProjects from "@/components/NewlyLaunchedProjects/NewlyLaunchedProjects";

export default function projects() {
  const [tabs, setTabs] = useState([
    { label: "Newly Launched Projects", value: "newlylaunchedProject" },
    { label: "Ongoing Projects", value: "onGoingProjects" },
    { label: "Upcoming Projects", value: "upcomingProjects" },
    { label: "Completed Projects", value: "completedProjects" },
  ]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleActiveTab = (data) => {
    setActiveTab(data);
  };

  const tabComponents = {
    newlylaunchedProject: (
      <>
        <NewlyLaunchedProjects />
        <NewlyLaunchedSeo />
      </>
    ),
    onGoingProjects: (
      <>
        <OngoingProjects /> <OngoingSeo />
      </>
    ),
    upcomingProjects: (
      <>
        <UpComingProjects /> <UpcomingSeo />
      </>
    ),
    completedProjects: (
      <>
        <CompletedProjects />
        <CompletedSeo />
      </>
    ),
  };
  return (
    <>
      <section className={activeTab?.value == "completedProjects" ? styles.completedBgColor : ""}>
        <div className={styles.activeTabBigText}>
          {activeTab?.label === "Completed Projects" ? "40+ Completed Projects" : activeTab?.label}
        </div>
        {/* <div className={activeTabBigText===} */}
        <Container>
          <Row className="py-5">
            <Col lg={8}>
              <div>
                <p className={styles.pageTitle}>Projects</p>
              </div>
              <div className={styles.tabs}>
                {tabs?.map((val) => (
                  <div
                    key={val.value}
                    className={activeTab.value == val?.value ? styles.activeTab : styles.inActiveTab}
                    onClick={() => {
                      handleActiveTab(val);
                    }}
                  >
                    {val?.label}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={activeTab?.value == "completedProjects" ? styles.completedBgColor : ""}>
        <Container>
          <div>{tabComponents[activeTab.value]}</div>
        </Container>
      </section>
    </>
  );
}
