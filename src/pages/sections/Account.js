import React from "react";

import "./Account.css";
import Toggle from "../../components/account/Toggle";

// SECTION Account
const Account = () => {
  const accountInfo = [
    {
      host: "신랑",
      bankOwner: ["신랑이름", "신랑부이름", "신랑모이름"],
      bankName: ["기업은행", "하나은행", "신한은행"],
      accountNumber: ["111-2222-333333", "111-2222-333333", "111-2222-333333"],
    },
    {
      host: "신부",
      bankOwner: ["신부이름", "신부부이름", "신부모이름"],
      bankName: ["신한은행", "경남은행", "농협은행"],
      accountNumber: ["111-2222-333333", "111-2222-333333", "111-2222-333333"],
    },
  ];
  return (
    <section id="account" className="account">
      <h1 id="account-h1" className="account-h1">
        INFORMATION
      </h1>
      <h2 id="account-h2" className="account-h2">
        마음 전하기
      </h2>
      <span id="account-span" className="account-span">
        참석이 어려우신 분들을 위해 기재하였습니다. <br></br>
        너그러운 마음으로 양해 부탁드립니다.
      </span>
      <div id="account-div1" className="account-div1">
        <Toggle text={JSON.stringify(accountInfo[0])} />
      </div>
      <div id="account-div2" className="account-div2">
        <Toggle text={JSON.stringify(accountInfo[1])} />
      </div>
    </section>
  );
};

export default Account;
