import React from "react";

import "./GreetingBody.css";
import Letter from "../../components/greeting/Letter";

// SECTION GREETING BODY
const GreetingBody = () => {
  return (
    <section id="greeting-body" className="greeting-body">
      <Letter />
    </section>
  );
};

export default GreetingBody;
