import React from "react";

import "./Toggle.css";
import Collapse from "./Collapse";

const Toggle = (props) => {
  const text = props.text;
  return (
    <div id="toggle-div" className="toggle-div">
      <Collapse text={text} />
    </div>
  );
};

export default Toggle;
