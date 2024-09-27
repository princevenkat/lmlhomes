import React, { useState, useRef } from "react";
import sideImage from "@/public/assets/images/unit-plans.png";
import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import ArrowAnimateRight from '@/components/ArrowAnimateRight'


const UnitPlans = ({ projectDetailPages }) => {
  const [activeParentTab, setActiveParentTab] = useState(0);
  const [activeChildTab, setActiveChildTab] = useState(0);

  const currentParentPlan =
    projectDetailPages?.unitPlan?.layoutPlan[activeParentTab];
  const currentChildPlan = currentParentPlan?.sizeList[activeChildTab];


  const [scrollX, setScrollX] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef();

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollX(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed here
    containerRef.current.scrollLeft = scrollX - walk;
  };

  const handleTouchStart = (e) => {
    setIsMouseDown(true);
    setStartX(e.touches[0].clientX - containerRef.current.offsetLeft);
    setScrollX(containerRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsMouseDown(false);
  };

  const handleTouchCancel = () => {
    setIsMouseDown(false);
  };

  const handleTouchMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.touches[0].clientX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed here
    containerRef.current.scrollLeft = scrollX - walk;
  };



  return (
    <Container>
      <div className="row py-4 py-md-0">
        <div className={"offset-md-2 col-12 col-md-8 pt-0 pt-md-3 " + styles.unitSectionPdng}>
          <div className="col-12 col-md-9">
            <p className={styles.heading}>
              {projectDetailPages?.unitPlan?.heading}
            </p>
            <p className={styles.description}>
              {projectDetailPages?.unitPlan?.description}
            </p>
          </div>


          <div className="d-flex overflow-auto pt-2 align-items-end justify-content-between">
            <div className="d-flex align-items-center">
              {projectDetailPages?.unitPlan?.layoutPlan.map((data, index) => {
                return (
                  <p
                    className={
                      activeParentTab === index
                        ? styles.parentActiveTab
                        : styles.parentTab
                    }
                    onClick={() => {
                      setActiveParentTab(index);
                      setActiveChildTab(0);
                    }}
                  >
                    {data?.name}
                  </p>
                );
              })}
            </div>

            <div className="position-relative" style={{ marginRight: '10vw' }}>
              <ArrowAnimateRight />
            </div>


          </div>

          <div
            className={`${styles.borderBottom}`}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            onTouchMove={handleTouchMove}
          >
            {currentParentPlan?.sizeList?.map((data, index) => {
              return (
                <p
                  className={
                    activeChildTab === index ? styles.activeTab : styles.tab
                  }
                  onClick={() => {
                    setActiveChildTab(index);
                  }}
                >
                  {data?.name}
                </p>
              );
            })}
          </div>

          <div className="py-3">
            <img
              src={`${currentChildPlan?.image}`}
              className={styles.imageStyle}
              alt="unit plans"
            />
          </div>
        </div>



        <div className="col-2 d-none d-md-block">
          <Image
            src={sideImage}
            className={styles.sideImageStyle}
            alt="unit plans"
          />
        </div>
      </div>
    </Container>
  );
};

export default UnitPlans;
