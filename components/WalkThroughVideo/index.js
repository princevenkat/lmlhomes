"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";

export default function WalkThroughVideo({ projectDetailPages }) {
  const pathname = usePathname();
  const [tabs, setTabs] = useState([
    { label: "Why League One", value: "WhyLeagueOne" },
    { label: "Walk Through Video", value: "WalkThroughVideo" },
  ]);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleActiveTab = (data) => {
    setActiveTab(data);
  };
  return (
    <section className="league-one-section">
      {/* Tabs Section  */}
      {pathname === "/league-one" && (
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
      )}
      {/* End Tabs Section  */}

      {/* League-One Content  */}
      {pathname === "/league-one" && (
        <>
          {activeTab.value === "WhyLeagueOne" ? (
            <div className="walk-through-section">
              {/* <div className="league-walk-through-section"> */}
              <div className={styles.walkThroughVideo_content}>
                {projectDetailPages?.walkthrough?.video === "" ? null : (
                  <div className={styles.mobWthVideo}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/s5VNb25HpKU?si=U6asuo7bUVmNavvJ`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                )}

                <div className={styles.WalkThroughVideo_ques_section}>
                  <div className={styles.WalkThroughVideo_ques}>{projectDetailPages?.walkthrough?.question}</div>
                  {pathname === "/league-one" ? (
                    <ul className={styles.WalkThroughVideo_desc} style={{ padding: "0" }}>
                      <li>
                        <b>125 Signature Units:</b> Thoughtfully designed 2 & 3 BHK residences spread across 5 floors.
                      </li>
                      <li>
                        <b>Prime Location:</b> Just 2 minutes from the upcoming metro station, 5 minutes from Porur, and
                        only 90 meters from the main road.
                      </li>
                      <li>
                        <b>Limited Neighbors:</b> Enjoy greater privacy with fewer residences per floor.
                      </li>
                      <li>
                        <b>Expansive Clubhouse:</b> 9,000 sq. ft. of world-class amenities for leisure and relaxation.
                      </li>
                      <li>
                        <b>Strategic Industrial Access:</b> Proximity to key industrial areas.
                      </li>
                      <li>
                        <b>Seamless Connectivity:</b> Only 15 minutes from major IT hubs including DLF, L&T, and RMZ.
                      </li>
                      <li>
                        <b>Premium Specifications:</b> Designed with superior materials and finishes to offer a
                        luxurious living experience.
                      </li>
                    </ul>
                  ) : (
                    <div className={styles.WalkThroughVideo_ques_ans}>{projectDetailPages?.walkthrough?.answer}</div>
                  )}
                </div>

                {/* <div>
                  <div className={styles.WalkThroughVideo_title}>Walk through Video</div>
                  <div className={styles.WalkThroughVideo_desc}>{projectDetailPages?.walkthrough?.description}</div>
                </div> */}
              </div>

              {projectDetailPages?.walkthrough?.video === "" ? null : (
                <div className={styles.walkThroughVideo_media}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/s5VNb25HpKU?si=U6asuo7bUVmNavvJ`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}
              {/* </div> */}
            </div>
          ) : (
            <div className="walk-through-section">
              {/* <div className="league-walk-through-section"> */}
              <div className={styles.walkThroughVideo_content}>
                {projectDetailPages?.walkthrough?.video === "" ? null : (
                  <div className={styles.mobWthVideo}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={`${projectDetailPages?.walkthrough?.video}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                )}

                <div>
                  <div className={styles.WalkThroughVideo_title}>Walk through Video</div>
                  <div className={styles.WalkThroughVideo_desc}>{projectDetailPages?.walkthrough?.description}</div>
                </div>
              </div>

              {projectDetailPages?.walkthrough?.video === "" ? null : (
                <div className={styles.walkThroughVideo_media}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`${projectDetailPages?.walkthrough?.video}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}
              {/* </div> */}
            </div>
          )}
        </>
      )}
      {/* League-One Content  */}

      {pathname !== "/league-one" && (
        <div className="walk-through-section">
          <div className={styles.walkThroughVideo_content}>
            {projectDetailPages?.walkthrough?.video === "" ? null : (
              <div className={styles.mobWthVideo}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`${projectDetailPages?.walkthrough?.video}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}

            <div className={styles.WalkThroughVideo_ques_section}>
              <div className={styles.WalkThroughVideo_ques}>{projectDetailPages?.walkthrough?.question}</div>
              {pathname === "/league-one" ? (
                <ul className={styles.WalkThroughVideo_desc} style={{ padding: "0" }}>
                  <li>
                    <b>125 Signature Units:</b> Thoughtfully designed 2 & 3 BHK residences spread across 5 floors.
                  </li>
                  <li>
                    <b>Prime Location:</b> Just 2 minutes from the upcoming metro station, 5 minutes from Porur, and
                    only 90 meters from the main road.
                  </li>
                  <li>
                    <b>Limited Neighbors:</b> Enjoy greater privacy with fewer residences per floor.
                  </li>
                  <li>
                    <b>Expansive Clubhouse:</b> 9,000 sq. ft. of world-class amenities for leisure and relaxation.
                  </li>
                  <li>
                    <b>Strategic Industrial Access:</b> Proximity to key industrial areas.
                  </li>
                  <li>
                    <b>Seamless Connectivity:</b> Only 15 minutes from major IT hubs including DLF, L&T, and RMZ.
                  </li>
                  <li>
                    <b>Premium Specifications:</b> Designed with superior materials and finishes to offer a luxurious
                    living experience.
                  </li>
                </ul>
              ) : (
                <div className={styles.WalkThroughVideo_ques_ans}>{projectDetailPages?.walkthrough?.answer}</div>
              )}
            </div>

            <div>
              <div className={styles.WalkThroughVideo_title}>Walk through Video</div>
              <div className={styles.WalkThroughVideo_desc}>{projectDetailPages?.walkthrough?.description}</div>
            </div>
          </div>

          {projectDetailPages?.walkthrough?.video === "" ? null : (
            <div className={styles.walkThroughVideo_media}>
              {/* <video
          src={`/assets/images/${projectDetailPages?.walkthrough?.video}`}
          controls
        /> */}

              <iframe
                width="100%"
                height="100%"
                src={`${projectDetailPages?.walkthrough?.video}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
