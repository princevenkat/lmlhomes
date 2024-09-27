"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import CoverageCollapse from "@/components/CoverageCollapse";
import GoogleMapReact from "google-map-react";
import MapsMarker from "@/components/MapMarker";
import { overAllData as datas } from "@/utils/constants";

const GoogleMaps = () => {
  const [tabs, setTabs] = useState([
    { label: "Ongoing Projects", value: "onGoingProjects" },
    { label: "Upcoming Projects", value: "upcomingProjects" },
    { label: "Completed Projects", value: "completedProjects" },
  ]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [projectsData, setProjectsData] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState();

  useEffect(() => {
    let data = datas[activeTab?.value];
    console.log(data);
    setProjectsData(data);
  }, [activeTab]);

  const handleActiveTab = (data) => {
    setActiveTab(data);
  };

  return (
    <div className={styles.pageColor}>
      <div className="container">
        <div className={" my-md-4 my-2"}>
          <div className="col-md-6 col-12 mt-4">
            <div>
              <p className={styles.pageTitle}>Projects</p>
            </div>
            <div className={styles.tabs}>
              {tabs?.map((val,i) => (
                <div
                  key={i}
                  className={
                    activeTab.value == val?.value
                      ? styles.activeTab
                      : styles.inActiveTab
                  }
                  onClick={() => {
                    handleActiveTab(val);
                    setSelectedPlace();
                  }}
                >
                  {val?.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="row d-flex align-items-center mt-0 mt-md-5">
            <div className="col-md-4 col-12 order-md-1 order-2">
              <CoverageCollapse
                coverageAccordian={projectsData}
                selectedPlace={selectedPlace}
                setSelectedPlace={(data) => setSelectedPlace(data)}
              />
            </div>
            <div className="col-md-8 col-12 px-md-2 p-0 order-md-2 order-1 mt-0 mt-md-5">
              <div className={styles.map_box}>
                <div className={styles.maps}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyCPQm-Gl4aIgNuj5v8l_J34EEDfGJtZCbU",
                    }}
                    center={
                      selectedPlace?.locationInfo ||
                      projectsData[0]?.locationInfo
                    }
                    defaultZoom={11}
                  // onChange={handleMapChange}
                  >
                    {projectsData.map((x) => (
                      <MapsMarker
                        key={x?.label}
                        lat={x?.locationInfo?.lat}
                        lng={x?.locationInfo?.lng}
                        data={x}
                        color={x?.color}
                        selected={selectedPlace?.location === x.location}
                        onClick={() => setSelectedPlace(x)}
                      />
                    ))}
                  </GoogleMapReact>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div>
        <div className={styles.activeTabBigText}>{activeTab?.label}</div>
      </div>
    </div>
  );
};

export default GoogleMaps;
