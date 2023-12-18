import React from "react";

import "./Contact.css";
import contactPhone from "../../images/contactPhone.png";

const Contact = () => {
  return (
    <h1 className="contact-h1">
      <p className="contact-p">
        <a
          className="contact-a1"
          href="tel:01035845324"
          target="_blank"
          rel="noreferrer"
        >
          <img src={contactPhone} className="contact-img" alt="신랑연락처" />
          신랑에게 연락하기
          <br></br>
        </a>
        <br></br>
        <a className="contact-a1" href="tel:01095513911">
          <img src={contactPhone} className="contact-img" alt="신부연락처" />
          신부에게 연락하기 <br></br>
        </a>
        <br></br>
        <br></br>
        신랑측 혼주<span>&nbsp;&nbsp;&nbsp;&nbsp;</span> |{" "}
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>신부측 혼주
        <br></br>
        <br></br>
        <a className="contact-a2" href="tel:01087211809">
          <img
            src={contactPhone}
            className="contact-img"
            alt="신랑측 혼주 아버지 연락처"
          />
          아버지 <span className="contact-span">신랑아버지이름</span>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a className="contact-a2" href="tel:01047403912">
          <img
            src={contactPhone}
            className="contact-img"
            alt="신부측 혼주 아버지 연락처"
          />
          아버지 <span className="contact-span">신부아버지이름</span>
        </a>
        <br></br>
        <br></br>
        <a className="contact-a2" href="tel:01048795324">
          <img
            src={contactPhone}
            className="contact-img"
            alt="신랑측 혼주 어머니 연락처"
          />
          어머니 <span className="contact-span">신랑어머니이름</span>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a className="contact-a2" href="tel:01068523911">
          <img
            src={contactPhone}
            className="contact-img"
            alt="신부측 혼주 어머니 연락처"
          />
          어머니 <span className="contact-span">신부어머니이름</span>
        </a>
      </p>
    </h1>
  );
};

export default Contact;
