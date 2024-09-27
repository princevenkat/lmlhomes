import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import locationPointer from '@/public/assets/icons/locationPointer.svg'

const MapsMarkerNew = ({ data, color, selected, onClick, children, strokeColor }) => {
  const router = useRouter();

  return (
    <div
      className={styles.marker}
      // style={{ backgroundColor: color, border: selected ? "" : "" }}
      onClick={onClick}
    >

      {/* <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
        <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={color} />
        <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#fff" />
      </svg> */}

      {/* <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
        <path d="M6.5 1.75C6.5 1.33579 6.16421 1 5.75 1C5.33579 1 5 1.33579 5 1.75V21.75C5 22.1642 5.33579 22.5 5.75 22.5C6.16421 22.5 6.5 22.1642 6.5 21.75V13.6V3.6V1.75Z" stroke={strokeColor} strokeWidth="1.5" fill={color}  opacity="0.5" fillRule="evenodd" clipRule="evenodd"/>
        <path d="M13.3486 3.78947L13.1449 3.70801C11.5821 3.08288 9.8712 2.9258 8.22067 3.25591L6.5 3.60004V13.6L8.22067 13.2559C9.8712 12.9258 11.5821 13.0829 13.1449 13.708C14.8385 14.3854 16.7024 14.5119 18.472 14.0695L18.6864 14.0159C19.3115 13.8597 19.75 13.298 19.75 12.6538V5.28673C19.75 4.50617 19.0165 3.93343 18.2592 4.12274C16.628 4.53055 14.9097 4.41393 13.3486 3.78947Z" stroke={strokeColor} strokeWidth="1.5" fill={color} />
      </svg> */}

      <img src="/assets/icons/locationPointer.png" style={{ width: '25px', height: '35px', objectFit: 'contain' }} />


      {selected && (
        <div
          style={{ border: `2.5px solid #7db7be` }}
          className={styles.locationCard}
        >
          {/* <div
            style={{ borderBottom: `2.5px solid ${color}` }}
            className={styles.location_image_box}
          >
            <img className={styles.location_image_box_img} src={data?.image} />
          </div> */}
          <div className={styles.locationCardPdng + " px-2"}>
            <div>
              <p className={styles.card_location_name}>{data?.name},</p>
            </div>
            <div>
              <p className={styles.card_location}>{data?.location}</p>
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default MapsMarkerNew;
