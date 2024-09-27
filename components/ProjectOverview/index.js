import React, { useState, useEffect } from "react";
import styles from "./projectOverview.module.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import OtpFormNew from '@/components/OtpFormNew'

export default function ProjectOverview({ projectDetailPages }) {

  const [keyLocation, setKeyLocation] = useState('')

  const [isActive, setIsActive] = useState(false)
  function handleClick() {
    setIsActive(!isActive);
  }
  function handleClose() {
    setIsActive(false);
  }
  function handleOtpFormSubmit() {
    window.open(projectDetailPages?.pdf, '_blank');
  }

  useEffect(() => {
    let keyLoc = projectDetailPages?.heading
    setKeyLocation(keyLoc)
  }, [])


  return (
    <section className="project-overview-section">
      <aside className={styles.aside}>
        <div className={styles.aside_title}>OVERVIEW</div>
      </aside>
      <div className={styles.content}>
        <div className={styles.detailsSection}>
          <div className={styles.details}>

            <div className={styles.content_title}>
              {projectDetailPages?.logo && (
                <img src={`/assets/icons/${projectDetailPages?.logo}`} />
              )}

              <span className={projectDetailPages?.keyLocation ? styles.content_title_desc : styles.content_title_desc + ' mb-0'}>
                {projectDetailPages?.heading || "Dummy Title"}{" "}
              </span>

            </div>

            {/* <span className={styles.keyLocation}>{projectDetailPages?.keyLocation || ''}</span> */}

            {projectDetailPages?.keyLocation ? (
              <span className={styles.keyLocation}>{projectDetailPages.keyLocation}</span>
            ) : null}

            <div className={styles.content_desc}>
              {projectDetailPages?.detailDescription || "Dummy Description"}
            </div>

            {isActive ? <OtpFormNew closeForm={handleClose} onFormSubmit={handleOtpFormSubmit} /> :
              <a className={styles.content_button} onClick={handleClick}>
                Download Brochure
                <span className={styles.content_button_arrow}>
                  <HiOutlineArrowLongRight />
                </span>
              </a>
            }

            {/* href={projectDetailPages?.pdf} */}


          </div>
          <div className={styles.offerSection}>
            <div className={styles.offerSection_title}><p>OFFER PRICE</p></div>
            <div className={styles.offerSection_subtitle}>
              {projectDetailPages?.offer?.info}
            </div>
            <div className={styles.offerSection_price}>
              {projectDetailPages?.offer?.price}
            </div>
            <div className={styles.offerSection_content}>
              Onwards
              <span className={styles.offerSection_subContent}>
                {projectDetailPages?.offer?.subContent}
              </span>
              <span className={styles.offerSection_subContentNxtLine}>
                {projectDetailPages?.offer?.subContentNxtLine}
              </span>
            </div>
          </div>
        </div>
        {projectDetailPages?.descriptionHighlights?.length > 0 && (
          <div className={styles.projectHighlights}>
            <div className={styles.projectHighlights_title}>
              Project Highlights
            </div>
            <div className={styles.projectHighlights_details}>
              {projectDetailPages?.descriptionHighlights?.map(
                (highlights, index) => (
                  <div
                    className={styles.projectHighlights_detail_item}
                    key={index}
                  >
                    <img
                      className={styles.item_img}
                      src={`/assets/icons/${highlights?.icon}`}
                    />
                    <div className={styles.item_content}>
                      {/* {highlights?.label} */}
                      <span style={{ display: 'block' , width: '12rem' }}>{highlights?.label}</span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
