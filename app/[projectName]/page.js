"use client";
import { useEffect, useState } from "react";
import styles from "./projects.module.css";
import useWindowResize from "@/hooks/useWindowResize";
import HomeSections from "./HomeSections";
import LandingPageForm from "@/components/LandingPageForm";
import { usePathname } from "next/navigation";
import { overAllData } from "@/utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Projects() {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);
  const { isMobile } = useWindowResize();
  const [projectDetailPages, setProjectDetailPages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const home1Elem = document.getElementById("bg");
    if (!home1Elem) return;

    if (home1Elem) {
      if (isMobile) {
        if (pathname == "/league-one") {
          home1Elem.style.background =
            "linear-gradient(180deg, rgba(0,0,0,0.9024203431372549) 0%, rgba(0,0,0,0.08729429271708689) 0%, rgba(0,0,0,0.4038209033613446) 72%, rgba(0,0,0,1) 100%),url(/assets/images/banners/leagueone-mbl.png)";
        } else if (pathname == "/prakriti") {
          home1Elem.style.background =
            "linear-gradient(180deg, rgba(0,0,0,0.9024203431372549) 0%, rgba(0,0,0,0.08729429271708689) 0%, rgba(0,0,0,0.4038209033613446) 72%, rgba(0,0,0,1) 100%),url(/assets/images/banners/prakriti-mbl.png)";
        } else if (pathname == "/iconia") {
          home1Elem.style.background =
            "linear-gradient(180deg, rgba(0,0,0,0.9024203431372549) 0%, rgba(0,0,0,0.08729429271708689) 0%, rgba(0,0,0,0.4038209033613446) 72%, rgba(0,0,0,1) 100%),url(/assets/images/banners/iconia-mbl.png)";
        } else {
          home1Elem.style.background =
            "linear-gradient(180deg, rgba(0,0,0,0.9024203431372549) 0%, rgba(0,0,0,0.08729429271708689) 0%, rgba(0,0,0,0.4038209033613446) 72%, rgba(0,0,0,1) 100%),url(/assets/images/banners/arshiya-mbl.png)";
        }
      } else
        home1Elem.style.background = `linear-gradient(180deg,rgba(0,0,0,.8),transparent),url(/assets/images/${projectDetailPages?.bannerImage})`;
      home1Elem.style.backgroundSize = "100%";
      home1Elem.style.backgroundPosition = "center";
      home1Elem.style.backgroundRepeat = "no-repeat";
    }
  }, [isMobile, loading]);

  useEffect(() => {
    var temp = null;
    for (let key in overAllData) {
      temp = overAllData[key]?.find((data) => data?.slug === pathname.replace("/", ""));
      if (temp) {
        break;
      }
    }
    if (!!temp) {
      setProjectDetailPages(temp?.detail);
    }
    setLoading(false);
  }, []);

  if (loading) return <div className="d-flex align-item-center justify-content-center py-5 ">loading...</div>;

  function handleClick() {
    setIsActive(!isActive);
  }
  function handleClose() {
    setIsActive(false);
  }

  return (
    <section className={styles.projSection}>
      {Object.keys(projectDetailPages).length > 0 ? (
        <>
          <div className={styles.home1} id={`${pathname === "/league-one" ? null : "bg"}`}>
            {projectDetailPages?.bannerHighlights?.length > 0 && (
              <div className={styles.homeHighlight} style={{ zIndex: "10" }}>
                {projectDetailPages?.bannerHighlights?.map((highlights, index, arr) => (
                  <>
                    <div className={styles.highlightbox} key={index}>
                      {highlights?.icon && (
                        <img src={`/assets/images/${highlights?.icon}`} className={styles.highlightImg} />
                      )}
                      {highlights?.label && <p className={"mb-0"}>{highlights?.label}</p>}
                    </div>
                    {index !== arr?.length - 1 && <div className={styles.rightBorder}></div>}
                  </>
                ))}
              </div>
            )}
            {pathname === "/league-one" && (
              <div className="position-absolute top-0 w-100 h-100 bg-white">
                <div>
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    slidesPerView={1}
                    autoplay={{
                      delay: 10000,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      720: {
                        slidesPerView: 1,
                      },
                      1024: {
                        slidesPerView: 1,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="position-relative">
                        <img
                          src="/assets/images/league-one-promo-banner.jpg"
                          alt="s"
                          className="league-one-desk-banr"
                          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
                        />
                        <img
                          src="/assets/images/league-one-promo-mob-banner.jpg"
                          alt="s"
                          className="league-one-mob-banr"
                          style={{ width: "100%", height: "80vh", objectFit: "cover" }}
                        />
                        <div
                          style={{ backgroundColor: "#00000038" }}
                          className="position-absolute top-0 w-100 h-100"
                        ></div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="position-relative">
                        <img
                          src="/assets/images/league-one-banner.jpg"
                          alt="s"
                          className="league-one-desk-banr"
                          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
                        />
                        <img
                          src="/assets/images/League-One-Mobile Banner .png"
                          alt="s"
                          className="league-one-mob-banr"
                          style={{ width: "100%", height: "80vh", objectFit: "cover" }}
                        />
                        <div
                          style={{ backgroundColor: "#00000038" }}
                          className="position-absolute top-0 w-100 h-100"
                        ></div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            )}
          </div>
          {/* hello */}
          <HomeSections projectDetailPages={projectDetailPages} />
          <div className={styles.homeEnquire}>
            {/* {projectDetailPages?.enquire?.phone && (
              <>
                <a
                  className={styles.homeEnquireIcon}
                  href={`tel:${projectDetailPages?.enquire?.phone}`}
                >
                  <img src={`/assets/icons/phone.png`} />
                </a>
              </>
            )}
            {projectDetailPages?.enquire?.whatsApp && (
              <>
                <a
                  className={styles.homeEnquireIcon}
                  target="_blank"
                  href={`https://wa.me/${projectDetailPages?.enquire?.whatsApp}`}
                >
                  <img src={`/assets/icons/whatsapp.png`} />
                </a>
              </>
            )} */}
            {isActive ? (
              <LandingPageForm closeForm={handleClose} />
            ) : (
              <div className={styles.homeEnquireBtn} onClick={handleClick}>
                ENQUIRE
              </div>
            )}
          </div>
        </>
      ) : (
        <div className={styles.noProject}>
          <p className={styles.heading}>NO Project Found</p>
        </div>
      )}
    </section>
  );
}
