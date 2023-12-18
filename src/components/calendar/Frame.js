import React from "react";

import "./Frame.css";
import novemberCalendar from "../../images/novemberCalendar.png";

const Frame = () => {
  return (
    <div className="Frame">
      <h1 id="frame-h1" className="frame-h1">
        THE WEDDING DAY
      </h1>
      <img
        src={novemberCalendar}
        className="frame-img"
        alt="November Calendar"
      />
      <h2 id="frame-h2" className="frame-h2">
        년월일 <span className="frame-span">요일</span> 시분
      </h2>
    </div>
  );
};

export default Frame;
