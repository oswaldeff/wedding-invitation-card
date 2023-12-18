import React from "react";

import "./Navi.css";
import kakaoMap from "../../images/kakaoMap.png";
import naverMap from "../../images/naverMap.png";
import tMap from "../../images/tMap.png";

const Navi = () => {
  return (
    <div className="navi-container">
      <a
        className="navi-a"
        href="https://map.naver.com/?menu=location&pinType=place&lat=위도&lng=경도&title=주소"
      >
        <div className="navi-div">
          <img className="navi-img" src={naverMap}></img>
          네이버지도
        </div>
      </a>
      <a className="navi-a" href="javascript:navi()">
        <div className="navi-div">
          <img className="navi-img" src={kakaoMap}></img>
          카카오내비
        </div>
      </a>
      <a
        className="navi-a"
        href="https://apis.openapi.sk.com/tmap/app/routes?appKey=앱키&name=주소 &lon=경도&lat=위도"
      >
        <div className="navi-div">
          <img className="navi-img" src={tMap}></img>
          티맵
        </div>
      </a>
    </div>
  );
};

export default Navi;
