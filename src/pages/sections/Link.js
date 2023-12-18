import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/src";

import "./Link.css";
import kakaoTalk from "../../images/kakaoTalk.png";
import linkIcon from "../../images/linkIcon.png";

const Link = () => {
  return (
    <section className="link">
      <div className="link-container">
        <a className="link-a" href="javascript:link()">
          <div className="link-div">
            <img className="link-img1" src={kakaoTalk}></img>
            카카오톡 공유
          </div>
        </a>
        <a className="link-a" href="">
          <div className="link-div">
            <CopyToClipboard
              className="location-clipboard"
              text="https://junedamin.site"
              onCopy={() => alert("링크가 복사되었습니다.")}
            >
              <img className="link-img2" src={linkIcon}></img>
            </CopyToClipboard>
            <CopyToClipboard
              className="location-clipboard"
              text="https://junedamin.site"
              onCopy={() => alert("링크가 복사되었습니다.")}
            >
              <text>링크 복사</text>
            </CopyToClipboard>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Link;
