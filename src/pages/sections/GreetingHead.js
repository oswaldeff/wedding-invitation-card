import React from "react";

import "./GreetingHead.css";
import Intro from "../../components/greeting/Intro";

// SECTION GREETING HEAD
const GreetingHead = () => {
  return (
    <section id="greeting-head" className="greeting-head">
      <Intro />
    </section>
  );
};

export default GreetingHead;
