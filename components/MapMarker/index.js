import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

const MapsMarker = ({ data, color, selected, onClick, children }) => {
  const router = useRouter();

  return (
    <div
      className={styles.marker}
      style={{ background: color, border: selected ? "2px solid black" : "" }}
      onClick={onClick}
    >
      {selected && (
        <div
          style={{ border: `2.5px solid ${color}` }}
          className={styles.locationCard}
        >
          <div
            style={{ borderBottom: `2.5px solid ${color}` }}
            className={styles.location_image_box}
          >
            <img className={styles.location_image_box_img} src={data?.image} />
          </div>
          <div className="d-flex justify-content-between px-2 py-3">
            <div>
              <p className={styles.card_location_name}>{data?.name},</p>
              <p className={styles.card_location}>{data?.location}</p>
            </div>
            <div>
              <button
                className={styles.cardButton}
                onClick={() => {
                  router.push(`/${data?.slug}`);
                }}
              >
                Explore <BsArrowRight size={15} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default MapsMarker;
