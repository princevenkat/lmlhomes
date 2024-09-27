import React, { useState, useEffect, useRef } from "react";
import sideImage from "@/public/assets/images/floor-plans.png";
import sample from "@/public/assets/images/bg-home-1.jpeg";
import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import A_Block from '@/components/FloorImage/Prakriti/A_Block'
import B_Block from '@/components/FloorImage/Prakriti/B_Block'
import C_Block from '@/components/FloorImage/Prakriti/C_Block'
import D_Block from '@/components/FloorImage/Prakriti/D_Block'
import E_Block from '@/components/FloorImage/Prakriti/E_Block'
import F_Block from '@/components/FloorImage/Prakriti/F_Block'
import { usePathname } from 'next/navigation'
import Lightbox from 'react-18-image-lightbox';


const LayoutAndPlans = ({ projectDetailPages }) => {

  const componentMap = {
    'A_Block': A_Block,
    'B_Block': B_Block,
    'C_Block': C_Block,
    'D_Block': D_Block,
    'E_Block': E_Block,
    'F_Block': F_Block,
  };

  const pathname = usePathname()

  const [currPathname, setCurrentPathname] = useState('')
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isPrakritiOpen, setIsPrakritiOpen] = useState(false)



  useEffect(() => {
    setCurrentPathname(pathname)
  }, [currPathname])


  // let keyTab = projectDetailPages?.layout?.layoutPlan[0]?.image
  // console.log(keyTab, 'keyTab');

  return (
    <section className="project-overview-section">
      <div className="row w-100">

        <div className="col-2 d-none d-md-block">
          <Image
            src={sideImage}
            className={styles.sideImageStyle}
            alt="Floor plans"
          />
        </div>

        <div className="col-12 col-md-10 pt-3">

          <div className={"col-12 col-md-9 pt-5 pt-md-3 " + styles.sectionPdng}>
            <p className={styles.heading}>
              {projectDetailPages?.layout?.heading}
            </p>
            <p className={styles.description}>
              {projectDetailPages?.layout?.description}
            </p>
          </div>

          <div className={`d-flex overflow-auto ${styles.borderBottom}`}>
            {projectDetailPages?.layout?.layoutPlan.map((data, index) => {
              return (
                <>
                  <p
                    key={data.name}
                    className={activeTab === index ? styles.activeTab : styles.tab}
                    onClick={() => { setActiveTab(index) }}
                  >
                    {data?.name}
                  </p>
                </>
              );
            })}
          </div>


          <div className="pt-4">

            {currPathname == '/prakriti' ?
              <div>

                {projectDetailPages?.layout?.layoutPlan[activeTab]?.component && (
                  React.createElement(
                    componentMap[projectDetailPages?.layout?.layoutPlan[activeTab]?.component],
                  )
                )}

                {activeTab == 0 ?
                  <img src={projectDetailPages?.layout?.layoutPlan[0]?.image} className={styles.imageStyle} alt="Floor plans" onClick={() => setIsPrakritiOpen(true)} />
                  : ''}

                {isPrakritiOpen && (
                  <Lightbox
                    mainSrc={projectDetailPages?.layout?.layoutPlan[0]?.image}
                    onCloseRequest={() => setIsPrakritiOpen(false)}
                  />
                )}

              </div>

              :
              <>
                <img
                  src={`${projectDetailPages?.layout?.layoutPlan[activeTab]?.image}`}
                  className={styles.imageStyle}
                  onClick={() => setIsOpen(true)}
                  alt="Floor plans"
                />

                {isOpen && (
                  <Lightbox
                    mainSrc={projectDetailPages?.layout?.layoutPlan[activeTab]?.image}
                    onCloseRequest={() => setIsOpen(false)}
                  />
                )}
              </>


            }


            {/* {componentMap[projectDetailPages?.layout?.layoutPlan[activeTab]?.name] && (
              React.createElement(
                componentMap[projectDetailPages?.layout?.layoutPlan[activeTab]?.name],
              )
            )} */}


          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutAndPlans;
