"use client";

import React from "react";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";

export default function WalkThroughVideo({ projectDetailPages }) {
  const pathname = usePathname();
  return (
    <section className="walk-through-section">
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
            <ul className={styles.WalkThroughVideo_desc} style={{ padding: 0 }}>
              <li>
                <b>Privacy & Space:</b> Fewer neighbours, spacious homes.
              </li>
              <li>
                <b>Amenities:</b> Luxurious 9,000+sq. ft clubhouse.
              </li>
              <li>
                <b>Prime Location:</b> Near Porur, linked to major highways, schools, and hospitals.
              </li>
              <li>
                <b>Tech & Industrial Access:</b> Close to DLF Cyber City and industrial areas.
              </li>
              <li>
                <b>Value Appreciation:</b> Upcoming infrastructure that guarantees a super investment.
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
    </section>
  );
}
