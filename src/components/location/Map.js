import React, {useEffect} from "react";

import "./Map.css";

const {kakao} = window;

const Map = () => {
  
    useEffect(()=>{
        const container = document.getElementById('map');
        container.style.width = '80%';
        container.style.height = '200%'; 
        const options = {
            center: new kakao.maps.LatLng(37.4494951, 127.1272446),
            level: 3
        }
        const map = new kakao.maps.Map(container, options);
        const markerPosition  = new kakao.maps.LatLng(37.4494951, 127.1272446); 
        const marker = new kakao.maps.Marker({
            position: markerPosition
        })
        marker.setMap(map);
        const mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    }, [])
  return (
    <div id="map" className="map"></div>
  );
};

export default Map;
