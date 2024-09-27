import loader from '@/utils/googleMapsLoader';
import { useEffect } from 'react';

const Map = ({ locationLists }) => {
    useEffect(() => {
        loader.load().then(() => {
            const mapOptions = {
                center: locationLists[0]?.location,
                zoom: 16,
                disableDefaultUI: true,
                styles: [{
                    elementType: "labels",
                    featureType: "poi.business",
                    stylers: [{ visibility: "off", }],
                }, {
                    elementType: "labels",
                    featureType: "poi.attraction",
                    stylers: [{ visibility: "off", }],
                }, {
                    elementType: "labels",
                    featureType: "poi.medical",
                    stylers: [{ visibility: "off", }],
                }, {
                    elementType: "labels",
                    featureType: "poi.park",
                    stylers: [{ visibility: "off", }],
                }, {
                    elementType: "labels",
                    featureType: "poi.sports_complex",
                    stylers: [{ visibility: "off", }],
                }, {
                    elementType: "labels",
                    featureType: "poi.place_of_worship",
                    stylers: [{ visibility: "off", }],
                }, {
                    elementType: "labels",
                    featureType: "poi.government",
                    stylers: [{ visibility: "off", }],
                }, {
                    elementType: "labels",
                    featureType: "transit.station.bus",
                    stylers: [{ visibility: "off", }],
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    stylers: [{ visibility: "off", }],
                }, {
                    "featureType": "landscape",
                    "elementType": "labels",
                    stylers: [{ visibility: "off", }],
                }],
            };
            const newMap = new window.google.maps.Map(
                document.getElementById('map'),
                mapOptions
            );
            locationLists.map(loc => {
                new window.google.maps.Marker({
                    position: loc?.location,
                    map: newMap,
                    title: loc?.name,
                    icon: "/assets/icons/mapMarker.png"
                })
            })
        });
    }, [locationLists]);

    return <div id="map" style={{ height: '500px' }}></div>;
};
export default Map;