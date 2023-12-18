import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/src";

import "./Location.css";
import Map from "../../components/location/Map";
import Navi from "../../components/location/Navi";
import copyObject from "../../images/copyObject.png";
import locationCar from "../../images/locationCar.png";
import locationSubway from "../../images/locationSubway.png";

const Location = () => {
  return (
    <section className="location">
      <div className="location-div">
        <h1 className="location-h1">LOCATION</h1>
        <div className="location-clipboard-div">
          <CopyToClipboard
            className="location-clipboard"
            text="도로명 주소"
            onCopy={() => alert("도로명 주소가 복사되었습니다.")}
          >
            <img
              src={copyObject}
              style={{
                width: "0.8rem",
                height: "0.8rem",
                verticalAlign: "bottom",
              }}
              className="location-clipboard-img"
              alt="도로명 주소"
            />
          </CopyToClipboard>
          <CopyToClipboard
            className="location-clipboard"
            text="도로명 주소"
            onCopy={() => alert("도로명 주소가 복사되었습니다.")}
          >
            <text>[도로명] 도로명 주소</text>
          </CopyToClipboard>
          <br></br>
          <CopyToClipboard
            className="location-clipboard"
            text="지번 주소"
            onCopy={() => alert("지번 주소가 복사되었습니다.")}
          >
            <img
              src={copyObject}
              style={{ width: "0.8rem", height: "0.8rem" }}
              className="location-clipboard-img"
              alt="지번 주소"
            />
          </CopyToClipboard>
          <CopyToClipboard
            className="location-clipboard"
            text="지번 주소"
            onCopy={() => alert("지번 주소가 복사되었습니다.")}
          >
            <text>[지번] 지번 주소</text>
          </CopyToClipboard>
        </div>
        <Map />
        <Navi />
        <div className="location-information-div">
          <div className="location-subway-information-div">
            <div className="location-information-title-div">
              <img
                src={locationSubway}
                style={{
                  width: "1rem",
                  height: "1rem",
                  verticalAlign: "middle",
                }}
                className="location-subway-img"
                alt="지하철"
              />
              <span>&nbsp;</span>지하철 오시는길
            </div>
            <h3 className="location-information-title-h3">
              <span className="location-information-title-span">[n호선]</span>{" "}
              오시는길1 <br></br>
              <span className="location-information-title-span">
                [n호선]
              </span>{" "}
              오시는길2
            </h3>
          </div>
          <div className="location-car-information-div">
            <div className="location-information-title-div">
              <img
                src={locationCar}
                style={{
                  width: "1.2rem",
                  height: "1.2rem",
                  verticalAlign: "middle",
                }}
                className="location-car-img"
                alt="자가용"
              />
              <span>&nbsp;</span>자가용 오시는길
            </div>
            <h3 className="location-information-title-h3">주차장 위치</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
