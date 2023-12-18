import React from "react";

import "./Header.css";

const Header = (props) => {
  const text = props.text.split(",");
  const head = text[0];
  const body = text[1];
  const tail = text[2];
  return (
    <h1 className="header-h1">
      <b> {head} </b>
      <span className="header-span">
        <i> {body} </i>
      </span>
      <b>
        {tail}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </b>
    </h1>
  );
};

export default Header;
