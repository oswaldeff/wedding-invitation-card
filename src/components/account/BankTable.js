import React from "react";
import {CopyToClipboard} from "react-copy-to-clipboard/src";

import "./BankTable.css";
import copyObject from "../../images/copyObject.png";

const BankTable = (props) => {
  const text = props.text.split(",");
  const personName = text[0];
  const bankName = text[1];
  const accountText = text[2];
  const accountnumber = accountText.replace(/-/g, "")
  return (
    <>
      <tr className="bank-tr-name">
        <td className="bank-td-name">{personName}</td>
        <td className="bank-td-accountnumber">
          <div
            className="bank-div-accountnumber"
          >
            <CopyToClipboard className="location-clipboard" text={accountnumber} onCopy={() => alert("계좌번호가 복사되었습니다.")}>
              <img
                src={copyObject}
                style={{width: "0.8rem", height: "0.8rem"}}
                className="bank-img-accountnumber"
                alt="계좌번호"
              />
            </CopyToClipboard>
            <CopyToClipboard className="location-clipboard" text={accountnumber} onCopy={() => alert("계좌번호가 복사되었습니다.")}>
            <text>계좌번호 복사</text>
            </CopyToClipboard>
          </div>
        </td>
      </tr>
      <tr className="bank-tr-br">
        <td className="bank-td-br"></td>
      </tr>
      <tr className="bank-tr-bankname">
        <td className="bank-td-bankname">
          {bankName} {accountText}
        </td>
      </tr>
    </>
  );
};

export default BankTable;
