import React, { useState } from "react";

import "./Collapse.css";
import SlideToggle from "react-slide-toggle";
import upDirection from "../../images/upDirection.png";
import downDirection from "../../images/downDirection.png";
import Bank from "./Bank";

const Collapse = (props) => {
  const text = props.text;
  const host = JSON.parse(text).host;
  const [imageUrl, setImageUrl] = useState(downDirection);
  const [isCollapsed, setIsCollapsed] = useState(true); // 토글 상태 추가

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed); // 토글 상태를 반전시킴
    if (isCollapsed) {
      setImageUrl(upDirection);
    } else {
      setImageUrl(downDirection);
    }
  };
  return (
    <SlideToggle
      duration={600}
      collapsed={true}
      whenReversedUseBackwardEase={false}
      render={({ toggle, setCollapsibleElement }) => (
        <div
          className="collapse-main-div"
          style={{
            width: isCollapsed ? "55%" : "90%", // 토글 상태에 따라 스타일 변경
          }}
        >
          <div
            className="collapse-head-div"
            onClick={() => {
              toggle();
              handleToggle();
            }}
          >
            <h1 className="collapse-h1">{host}측 계좌번호 보기</h1>
            <img
              src={imageUrl}
              className="collapse-img"
              alt="이미지"
              style={{
                width: isCollapsed ? "1rem" : "1rem", // 토글 상태에 따라 스타일 변경
                height: isCollapsed ? "1rem" : "1rem",
              }}
            />
          </div>
          <div
            className="collapse-body-div"
            ref={setCollapsibleElement}
            style={{ display: isCollapsed ? "none" : "flex" }}
          >
            <div className="collapse-content-div">
              <Bank text={text} />
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Collapse;
