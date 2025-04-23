import React, { useState } from "react";

const TelephoneFormatter = () => {
  let [phone, setPhone] = useState("");

  const filterNumber = (str) => {
    return [...str]
      .filter((i) => Number.isInteger(parseInt(i)) && i != " ")
      .join("");
  };

  const onChange = (e) => {
    let str = filterNumber(e.target.value);
    setPhone(
      str.length > 3
        ? "+(" + str.substring(0, 3) + ") - " + str.substring(3)
        : str
    );
  };
  return (
    <div className="container">
      <input  type="tel" id="phone" value={phone} autoComplete="off" maxLength={16} onChange={onChange}></input>
      <label htmlFor="phone">+(123) - 4567890</label>
    </div>
  );
};

export default TelephoneFormatter;
