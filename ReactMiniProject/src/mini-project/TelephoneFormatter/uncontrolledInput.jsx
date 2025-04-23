import React, { useState } from "react";

const TelephoneFormatter = () => {
  let inputRef = useState("");

  const filterNumber = (str) => {
    return [...str]
      .filter((i) => Number.isInteger(parseInt(i)) && i != " ")
      .join("");
  };

  const onChange = () => {
    let str = filterNumber(inputRef.current.value);

    inputRef.current.value =
      str.length > 3
        ? "+(" + str.substring(0, 3) + ") - " + str.substring(3)
        : str;
  };
  return (
    <div className="container">
      <input
        type="tel"
        id="phone"
        autoComplete="off"
        maxLength={16}
        ref={inputRef}
        onChange={onChange}
      ></input>
      <label htmlFor="phone">+(123) - 4567890</label>
    </div>
  );
};

export default TelephoneFormatter;
