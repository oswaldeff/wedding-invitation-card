import React from "react";
import ScrollToTop from "react-scroll-to-top";

import { ReactComponent as UpArrow } from "../images/up-arrow.svg";
// import Title from "./sections/Title";
// import Interaction from "./sections/Interaction";
import Main from "./sections/Main";
import GreetingHead from "./sections/GreetingHead";
import GreetingCanvas from "./sections/GreetingCanvas";
import GreetingBody from "./sections/GreetingBody";
import GreetingTail from "./sections/GreetingTail";
import Gallery from "./sections/Gallery";
import Calendar from "./sections/Calendar";
import Location from "./sections/Location";
import Account from "./sections/Account";
import Link from "./sections/Link";

// NOTE Wedding Invitation Card
const CardPage = () => {
  return (
    <div id="card" className="card">
      <ScrollToTop
        smooth
        component={<UpArrow />}
        style={{
          backgroundColor: "white",
          right: "20px",
          bottom: "20px",
          zIndex: "10",
        }}
      />
      {/*
      <Title /> // deprecated
      <Interaction /> // deprecated
      */}
      <Main />
      <GreetingHead />
      <GreetingBody />
      <GreetingCanvas />
      <GreetingTail />
      <Gallery />
      <Calendar />
      <Location />
      <Account />
      <Link />
    </div>
  );
};

export default CardPage;
