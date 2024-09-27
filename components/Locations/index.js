import React from "react";
import styles from "./locations.module.css";
import { useState } from "react";
import { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import MapsMarker from "@/components/MapMarker";

export default function Locations({ projectDetailPages }) {
  const [selectedLocationName, setSelectedLocationName] = useState(
    projectDetailPages?.locationInfo?.locations?.[0]?.name
  );

  const [locationList, setLocationList] = useState([]);
  const [locationDetails, setLocationDetails] = useState([]);
  const [centerLocationIcon, setCenterLocationIcon] = useState("");
  const [centerLocationLink, setCenterLocationLink] = useState("");

  useEffect(() => {
    if (selectedLocationName) {
      const data = projectDetailPages?.locationInfo?.locations?.find?.((loc) => loc.name === selectedLocationName);
      setLocationList(data?.locationList || []);

      const centerLocationData = projectDetailPages?.locationInfo?.CenterLocation;
      setLocationDetails(centerLocationData || null);

      const centerLocationIcon = projectDetailPages?.locationInfo?.centerLocationMarker;
      setCenterLocationIcon(centerLocationIcon || null);

      const centerLoctLink = projectDetailPages?.locationInfo?.centerLocationLink;
      setCenterLocationLink(centerLoctLink || null);
    } else {
      setLocationList([]);
    }
  }, [selectedLocationName]);

  return (
    <section className="location-section">
      <div className={styles.location_content}>
        <div className={styles.location_title}>{projectDetailPages?.locationInfo?.heading}</div>
        <div className={styles.location_desc}>{projectDetailPages?.locationInfo?.description}</div>
        <div className={styles.location_lists_overall_container}>
          <div className={styles.location_lists}>
            {projectDetailPages?.locationInfo?.locations?.map((loc, index) => (
              <div
                className={`${styles.location_item} ${loc?.name == selectedLocationName ? styles.active : ""}`}
                onClick={() => setSelectedLocationName(loc?.name)}
                key={index}
              >
                <img src={`/assets/icons/${loc?.icon}`} />
                <span>{loc?.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.location_item_lists}>
          {locationList?.map((list, index) => (
            <div className={styles.location_list_item} key={index}>
              {list?.name}
            </div>
          ))}
        </div>
        <div className={styles.location_address + " deskOnly"}>
          <h4>Address</h4>
          <p>{projectDetailPages.locationInfo.address}</p>
        </div>
      </div>
      <div className={styles.location_map}>
        <div className={styles.locationMapCntr}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCPQm-Gl4aIgNuj5v8l_J34EEDfGJtZCbU",
            }}
            center={locationDetails}
            defaultZoom={13}
          >
            {locationList.map((x, index) => (
              <MapsMarker lat={x?.location?.lat} lng={x?.location?.lng} key={index}>
                <img
                  src={`/assets/icons/${x?.location?.markerIcon}`}
                  className={
                    x?.location?.markerIcon == "logo-1.svg" ||
                    x.location.markerIcon == "Iconia-logo.svg" ||
                    x.location.markerIcon == "Arshiya-logo.svg" ||
                    x.location.markerIcon == "league one logo.png"
                      ? "markerIco"
                      : ""
                  }
                />
              </MapsMarker>
            ))}
          </GoogleMapReact>
        </div>
        <div className={styles.mob_location_item_lists}>
          {locationList?.map((list, index) => (
            <React.Fragment>
              {list.name ? (
                <div className={styles.location_list_item} key={index}>
                  {list?.name}
                </div>
              ) : (
                <div />
              )}
            </React.Fragment>
          ))}
        </div>

        <aside className={styles.aside}>
          <div className={styles.aside_title}>LOCATION</div>
        </aside>
      </div>

      <div className={styles.location_address + " mobOnly ps-2"}>
        <h4>Address</h4>
        <p>{projectDetailPages.locationInfo.address}</p>
      </div>
    </section>
  );
}
