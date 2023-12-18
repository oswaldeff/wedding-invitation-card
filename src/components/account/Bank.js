import React from "react";

import "./Bank.css";
import BankTable from "./BankTable";

const Bank = (props) => {
  const text = props.text;
  const hostInfo = JSON.parse(text);
  const table0 = `${hostInfo.bankOwner[0]},${hostInfo.bankName[0]},${hostInfo.accountNumber[0]}`
  const table1 = `${hostInfo.bankOwner[1]},${hostInfo.bankName[1]},${hostInfo.accountNumber[1]}`
  const table2 = `${hostInfo.bankOwner[2]},${hostInfo.bankName[2]},${hostInfo.accountNumber[2]}`

  return (
    <table className="bank-table">
      <colgroup className="bank-colgroup">
        <col className="bank-col"></col>
      </colgroup>
      <tbody className="bank-tbody0">
      <BankTable
          text={table0}
        />
        </tbody>
        <tbody className="bank-tbody1">
      <BankTable
          text={table1}
        />
        </tbody>
        <tbody className="bank-tbody2">
      <BankTable
          text={table2}
        />
      </tbody>
    </table>
  );
};

export default Bank;
