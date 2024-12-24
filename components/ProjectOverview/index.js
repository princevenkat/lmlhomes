import React, { useState, useEffect } from "react";
import styles from "./projectOverview.module.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import LandingPageForm from "@/components/lpforms";
import { usePathname } from "next/navigation";

export default function ProjectOverview({ projectDetailPages }) {
  const [keyLocation, setKeyLocation] = useState("");
  const pathname = usePathname();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive(!isActive);
  }
  function handleClose() {
    setIsActive(false);
  }

  const handleOtpFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = phoneNumber;
    const email = `${phoneNumber}@dummy.com`;
    const note = "Project Brochure Download";

    let campaignId = "";
    if (pathname === "/prakriti") {
      campaignId = process.env.NEXT_PUBLIC_SELLDO_PRAKRITI_CAMPAIGN_ID;
    } else if (pathname === "/iconia") {
      campaignId = process.env.NEXT_PUBLIC_SELLDO_ICONIA_CAMPAIGN_ID;
    } else if (pathname === "/arshiya") {
      campaignId = process.env.NEXT_PUBLIC_SELLDO_ARSHIYA_CAMPAIGN_ID;
    } else {
      campaignId = process.env.NEXT_PUBLIC_SELLDO_DEFAULT_CAMPAIGN_ID;
    }

    try {
      const response = await fetch("/api/submitLead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phoneNumber, note, campaignId }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Successfully submitted");
        window.open(projectDetailPages?.pdf, "_blank");
      } else {
        alert("Submission failed: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let keyLoc = projectDetailPages?.heading;
    setKeyLocation(keyLoc);
  }, []);

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
                <img
                  src={`/assets/icons/${projectDetailPages?.logo}`}
                  style={{ paddingRight: "0.25em" }}
                />
              )}

              <span
                className={
                  projectDetailPages?.keyLocation
                    ? styles.content_title_desc
                    : styles.content_title_desc + " mb-0"
                }
              >
                {projectDetailPages?.heading || "Dummy Title"}{" "}
              </span>
            </div>

            {projectDetailPages?.keyLocation ? (
              <span className={styles.keyLocation}>
                {projectDetailPages.keyLocation}
              </span>
            ) : null}

            <div className={styles.content_desc}>
              {projectDetailPages?.detailDescription || "Dummy Description"}
            </div>

            {isActive ? (
              <div className="db-form">
                {" "}
                <LandingPageForm
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                  closeForm={handleClose}
                  onFormSubmit={handleOtpFormSubmit}
                  loading={loading}
                />
              </div>
            ) : (
              <a className={styles.content_button} onClick={handleClick}>
                Download Brochure
                <span className={styles.content_button_arrow}>
                  <HiOutlineArrowLongRight />
                </span>
              </a>
            )}
          </div>
          <div className={styles.offerSection}>
            {pathname === "/league-one" && (
              <div style={{ padding: "0 0rem 1rem 0rem" }} className="">
                <img
                  src={`/assets/icons/league one logo.png`}
                  style={{ width: "150px" }}
                />
              </div>
            )}
            <div className={styles.offerSection_title}>
              <p>OFFER</p>
            </div>
            <div className={styles.offerSection_subtitle}>
              {projectDetailPages?.offer?.info}
            </div>
            {pathname === "/league-one" ? (
              <>
                <div className={styles.offerSection_price}>
                  {projectDetailPages?.offer?.price}
                </div>
                <div className={styles.offerSection_price_2}>No Pre-EMI</div>
              </>
            ) : (
              <div className={styles.offerSection_price}>
                {projectDetailPages?.offer?.price}
              </div>
            )}

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
                      <span style={{ display: "block", width: "12rem" }}>
                        {highlights?.label}
                      </span>
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
