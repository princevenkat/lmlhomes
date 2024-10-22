import React, { useEffect, useState } from "react";
import styles from "./amenities.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { usePathname } from "next/navigation";

const AmenitiesData = [
  {
    id: 1,
    text: "Gym & Fitness Center",
    image: "assets/league-one/amenities1.jpg",
  },
  {
    id: 2,
    text: "Kids' Play Area",
    image: "assets/league-one/amenities2.jpg",
  },
  {
    id: 3,
    text: "Indoor Games",
    image: "assets/league-one/amenities3.jpg",
  },
  {
    id: 4,
    text: "Multipurpose Hall",
    image: "assets/league-one/amenities4.jpg",
  },
  {
    id: 5,
    text: "Wellness Zone",
    image: "assets/league-one/amenities5.jpg",
  },
  {
    id: 6,
    text: "24x7 CCTV",
    image: "assets/league-one/amenities6.jpg",
  },
  {
    id: 7,
    text: "Power Back-up for Individual units",
    image: "assets/league-one/amenities7.jpg",
  },
  {
    id: 8,
    text: "Broadband & Wi-Fi Connectivity",
    image: "assets/league-one/amenities8.jpg",
  },
  {
    id: 9,
    text: "Table Tennis",
    image: "assets/league-one/amenities9.jpg",
  },
  {
    id: 10,
    text: "MyGate App",
    image: "assets/league-one/amenities10.jpg",
  },
  {
    id: 11,
    text: "Guest Bedroom",
    image: "assets/league-one/amenities11.jpg",
  },
  {
    id: 12,
    text: "Air Hockey",
    image: "assets/league-one/amenities12.jpg",
  },
];

export default function Amenities({ projectDetailPages }) {
  const [showMore, setshowMore] = useState(false);
  const pathname = usePathname();

  const [currPathname, setCurrentPathname] = useState("");

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [currPathname]);

  return (
    <section>
      <div className={styles.amenities_content}>
        <div className={styles.amenities_title}>
          {currPathname == "/prakriti"
            ? "25+ Amenities"
            : currPathname === "/league-one"
            ? "40+ Amenities / Facilities"
            : "10+ Amenities"}
        </div>
        <div className={styles.amenities_desc}>
          <p>{projectDetailPages?.amenities?.description}</p>
          {pathname !== "/league-one" && (
            <div className={styles.navigators}>
              <div className={`prev ${styles.navigators_link}`}>
                <img src={`/assets/icons/ArrowLeftDark.svg`} />
              </div>
              <div className={`next ${styles.navigators_link}`}>
                <img src={`/assets/icons/ArrowRightDark.svg`} />
              </div>
            </div>
          )}
        </div>

        {pathname !== "/league-one" && (
          <div className={"amenities_slider"}>
            <Swiper
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 2000 }}
              pagination={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
            >
              {projectDetailPages?.amenities?.amenityList?.map((amenities, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.amenities_box}>
                    <img src={`${amenities?.image}`} />
                    <div className={styles.overlay_layer}></div>
                    <div className={styles.overlay_content}>{amenities?.label}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {pathname !== "/league-one" && (
          <div className={styles.mob_navigators}>
            <div className={`prev ${styles.navigators_link}`}>
              <img src={`/assets/icons/ArrowLeftDark.svg`} />
            </div>
            <div className={`next ${styles.navigators_link}`}>
              <img src={`/assets/icons/ArrowRightDark.svg`} />
            </div>
          </div>
        )}

        {pathname === "/league-one" && (
          <div className="container-fluid" style={{ padding: "30px", backgroundColor: "#fef5e6" }}>
            <div className="row g-3">
              {AmenitiesData.map((item) => (
                <div key={item.id} className="col-md-4">
                  <div className="league-one-amenities-image-container">
                    <img src={item.image} alt={item.text} />
                    <div className="league-one-amenities-image-container-overlay">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
            {showMore && (
              <div className="pt-5">
                <div className="container-fluid main-amenities">
                  <div className="row">
                    <div className="col-md-3 liststlep">
                      <h3>CLUB HOUSE</h3>
                      <ul>
                        <li>Waiting Lounge with Reception Desk</li>
                        <li>Furnished Guest Bedrooms with AC</li>
                      </ul>
                    </div>
                    <div className="col-md-3 liststlep">
                      <h3> EVENT ZONE</h3>
                      <ul>
                        <li>Multipurpose Hall with AC </li>
                        <li>Pantry Pot Wash Area</li>
                      </ul>
                    </div>
                    <div className="col-md-3 liststlep">
                      <h3>KIDS ZONE</h3>
                      <ul>
                        <li>Slide Seesaw</li>
                        <li>CrŠche (Indoor)</li>
                      </ul>
                    </div>
                    <div className="col-md-3 liststlep">
                      <h3>PLAY ZONE</h3>
                      <div className="row">
                        <div className="col-md-6">
                          <ul>
                            <li>Table Tennis</li>
                            <li>Carrom</li>
                            <li>Foosball</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li>Dart Board</li>
                            <li>Air Hockey</li>
                            <li>Billiards</li>
                          </ul>
                        </div>
                        <div className="col-md-12">
                          <ul>
                            <li>Multipurpose Court</li>
                            <li>Board Games</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row my-5 general-amenities">
                      <h3 className="text-center bdr">GENERAL AMENITIES &amp; FACILITIES</h3>
                      <div className="col-md-3 liststlep">
                        <ul>
                          <li>Grand Entrance Arch</li>
                          <li>My Gate App</li>
                          <li>24/7 Surveillance Cabin</li>
                          <li>Waiting Lounge in Lobby</li>
                          <li>Automated Passenger Lift</li>
                          <li>Soft &amp; Hard Landscape</li>
                        </ul>
                      </div>
                      <div className="col-md-3 liststlep">
                        <ul>
                          <li>Broadband &amp; Wi-Fi Connectivity</li>
                          <li>Integrated DTH Facilities</li>
                          <li>Generator Backup for Common Area &amp; Lift</li>
                          <li>Generator Backup for Individual Units up to 1KVA</li>
                          <li>Ironing Room</li>
                          <li>Building Maintenance Room</li>
                        </ul>
                      </div>
                      <div className="col-md-3 liststlep">
                        <ul>
                          <li>Paved Driveway</li>
                          <li>EV Charging Hub</li>
                          <li>Visitor Car Parking</li>
                          <li>Car &amp; Bike Wash Area</li>
                          <li>Driver Sit out</li>
                          <li>Domestic Workers Restroom</li>
                          <li>24/7 CCTV Surveillance</li>
                        </ul>
                      </div>
                      <div className="col-md-3 liststlep">
                        <ul>
                          <li>Water Treatment Plant</li>
                          <li>Sewage Treatment Plant</li>
                          <li>Garbage Disposal Area</li>
                          <li>Rain Water Harvesting</li>
                          <li>Storm Water Drain</li>
                          <li>Transformer Yard</li>
                          <li>Sump</li>
                        </ul>
                      </div>
                    </div>

                    <div className="row wellness-zone">
                      <h3 className="text-center bdr">WELLNESS ZONE</h3>
                      <div className="col-md-2"></div>
                      <div className="col-md-8 liststlep">
                        <ul>
                          <li>Yoga / Aerobics / Zumba Hall</li>
                          <li>Fully fitted AC GYM</li>
                          <li>Trainer Room</li>
                          <li>
                            Separate Steam Room, Shower Area, Changing Room &amp; Locker Rooms for Men &amp; Women
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="d-flex justify-content-center align-items-center mt-4">
              <button
                onClick={() => setshowMore(!showMore)}
                type="button"
                style={{ background: "#14808a", color: "#fff", fontSize: "24px", border: "0px", padding: "5px 26px" }}
              >
                {showMore ? "Less" : "More"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
